import axios from 'axios'
import bcrypt from "bcryptjs"
import Redis from 'ioredis'
import passport from "utility/passport"
import prisma from "prisma/prismaClient"
import { JWTsecretKeyMaker } from 'utility/utilityValues'
import { getToday } from 'utility/utilityValues'
import { isArrayEmpty } from 'utility/utilityValues'
import { getUserPrivacySettingsWithUserIdQueryStringFunc } from './queries'
import { TOGGLE_CURR_DAY_HAS_MEDIA } from 'redux/content/daySlice'
import { startTransition } from 'react'

const allUsers =  prisma.users.findMany
const allDays = prisma.days.findMany
const allThoughts = prisma.thoughts.findMany
const allFields = prisma.fields.findMany

const allFollowers = prisma.followers.findMany
const allBlocks = prisma.blocks.findMany;
const allUserPassDayLocks = prisma.userpassdaylocks.findMany
const allStars = prisma.stars.findMany

const returnMyDayPosts = async (userId: number) => {
  const days = await allDays();
        let myDayPosts = days?.filter(days => days.user_id === userId)
        // console.log('server: myDayPosts', myDayPosts)
        if (!myDayPosts) {
          return 
        }
        myDayPosts = myDayPosts
        return myDayPosts        
}

const CBgetUserPrivacySettingsWithUserID = (userId:number) => {
  try {
    const userPrivacySettings = prisma.privacy.findFirst({
      where: {
        user_id: userId
      }
    })
    if (!userPrivacySettings) {
      // console.log("! userPrivacySettings")
      return null;
    }
    return userPrivacySettings
  }
  catch(error) {
    return "error";
  }
}

// modular funcs() to make the intro prisma.user.create() and other create() data 

// import { usernameStrainidINTERFACE, userLoginINTERFACE, updateUserIconINTERFACE } from 'utility/InterfaceTypes'

// 

// import { createClient } from 'redis';

// this has to be NEXT_PUBLIC_REDIS_URL
// password: process.env.NEXT_PUBLIC_REDIS_PASSWORD,

  // actual production environment redis:
// const redis = new Redis({
//   host: 'redis-188sss08.c265.us-east-1-2.ec2.cloud.redislabs.com',
//   port: 18808,
//   password: 'KYWPyVGWuaAjAFglwtpG2BEx5IiTmFwo',
// });

                  // dev environment configuration
  // const redis = new Redis({
  //   host: 'localhost',   
  //   port: 6379,          
  // });

export const resolvers = {
    Query: {
    allUsersGET: async () => {
      let users = await prisma.users.findMany()
      if (!users) { return; }
      return users;
    },

    // not any followers corresponding to a user in particular just ALL followers in the whole table.
    allFollowersGET: async () => {
      let followers = await prisma.followers.findMany()
      if (!followers) { return null }
      return followers;
    },

    allBlocksGET: async () => {
      let blocks = await prisma.blocks.findMany()
      if (!blocks) { return null }
      return blocks;
    },

    allUserPassDayLocksGET: async () => {
      let userPassDayLocks = await prisma.userpassdaylocks.findMany();
      if (!userPassDayLocks) {
        return null;
      }
      return userPassDayLocks
      // null safety redundant here because of:          if(!userPassDayLocks)
      // if (userPassDayLocks?.length === 1) {
      //   return userPassDayLocks
      // } else {
      //   return userPassDayLocks;
      // } 
    },

    allStarsGET: async () => {
      let stars = await allStars()
      if (!stars) {
        return null;
      }
      return stars;
    },    

    getUserWithId: async (_, args) => {
        const { id } = args;
        try {
        const user:any = await prisma.users.findFirst({
            where: {
              id: id
            }
          })
          // console.log('getUserWithId graphQL', user)
          if (user?.id > 0) {
            return user;
          }
        }
        catch (err) {
          // console.log('getUserWithId graphQL', err)
          return err
        }
    },

    getUserPrivacySettingsWithUserId: async (_, args) => {
      // console.log("getUserPrivacySettingsWithUserId!")
      const { userId } = args;
      try {
        const userPrivacySettings = prisma.privacy.findFirst({
          where: {
            user_id: userId
          }
        })
        if (!userPrivacySettings) {
          console.log("! userPrivacySettings")
          return { can_msg: 'null!', anon_msg: 'yes', id: 0, user_id: 0, private_account: true }
        }

        return userPrivacySettings
      }
      catch(error) {
        // catch block doesn't run if value is returned as null.
        return { can_msg: 'error', anon_msg: 'yes', id: 0, user_id: 0, private_account: true }
      }
    },

    doWeFollowEachOther: async (_, args) => {
      const { meId, youId } = args;
      const ALLfollowers = await allFollowers();      
      const doIFollowThem = ALLfollowers.some(followers => followers?.user_id === youId && followers?.follower_id === meId )
      const doTheyFollowMe = ALLfollowers.some(followers => followers?.user_id === meId && followers?.follower_id === youId )            
      
      return { iFollowThem: doIFollowThem, theyFollowMe: doTheyFollowMe };
  },  
  
  doWeBlockEachOther: async (_, args) => {
      const { meId, youId } = args;
      const ALLblocks = await allBlocks();
      const doIBlockThem = ALLblocks.some(blocks => blocks?.user_id === meId && blocks?.blocked_id === youId )      
      const doTheyBlockMe = ALLblocks.some(blocks => blocks?.user_id === youId && blocks?.blocked_id === meId )
      
      return { iBlockThem: doIBlockThem, theyBlockMe: doTheyBlockMe };
    },

    userLogin: async (_, args) => {
      // userLogin: async (parent, args) => {
        const { email, password } = args
        let res = {...args}
      // userLogin: async (parent, args, {res}) => {
        try {
          // promise with standard passport.authenticate to hit localDB only. resolve the user or reject with the error
          const user:any = await new Promise((resolve, reject) => {
            passport.authenticate('local', { session: false }, (err, user, info) => {
              if (err || !user) {
                return reject(info ? new Error(info.message) : err);
              }
              resolve(user);
            })({ body: { email, password } });
          });
  
          // generate SECRET_KEY as a unique identifier to attach to retrievable user info like [user.id, user.username] for currentUser
          const SECRET_KEY = await JWTsecretKeyMaker() 
          // .split('-')[1] === CURRNE_DAY_.username  -------> this is the check that a user is definitely a user. 
          const token=`currentUser-${user.id}-${user.username}-${SECRET_KEY}`      
          
      
          return {
            id: user.id,
            username: user.username,
            password: user.password,
            email: user.email,
            birthday: user.birthday,
            joinday: user.joinday,
            token: token,      
            icon: user.icon,
            role: user.token
          };

          // return user

        } catch (error) {
          console.log(error)
          throw new Error('An error occurred during login. Please try again.');
        }
      },

      getAllMyUserDayPostsWithUserID: async (_, args) => {
        const { userId } = args;
        const myDays = await returnMyDayPosts(userId)
        // console.log('SERVER: myDays', myDays)
        if (!myDays) {
          return;
        }
        return [myDays];
      },
      
      getMostRecentDayPostWithUserId: async (_, args) => {
        const { userId } = args;                          

        const mostRecentPost = await prisma.days.findFirst({
          where: {
            user_id: userId,
          },
          include: { thoughts: true, fields: true },
          orderBy: {
            date: 'desc', 
          },
        });
        // edge case might use isArrayEmpty() but the val returned might not be array at all 
        if (!mostRecentPost) {
          return;
        }
        // now returns associative data, JSON.stringify() to do so 
        return JSON.stringify(mostRecentPost);                
        // return mostRecentPost;                
      },
      
      getDayDataWithId: async (_, args) => {
        const { dayId } = args
        return prisma.days.findUnique({
          where: {
            id: dayId
          }
        }).then( (dayData:any) => {
          dayData = dayData?.data?.data?.getDayDataWithId
          if (dayData?.id > 0) {
            return dayData 
          } else {
            // return object that has 'error' in it's endpoints to perform client-side, UI updating, logic. 
            return { id: 0, username: 'error', email: '', password: 'no password', birthday: '11-21-1992', joinday: '' }
          }
        }).catch((err) => {
          return
        })
      },
      
      // ALLdayDataWithID: async (_, args) => {      
      //   const { dayId } = args;
      //   return "hey";
      // },

      ALLdayDataString: async (_, args) => {
  // JSON.stringify() on all associative tables whereas that func() attempts to return solid obj through graphql
        const { dayId } = args
        return await prisma.days.findUnique({
          where: {
            id: dayId
          },
          include: { 
            thoughts: {
            include: {
              stars: true
            }
          },
            moments: true,
            fields: true,
            greatfullagain: true,
          }
        })
        .then(async (dayData:any) => {
          console.log('stars: true!!!!!!', dayData)
  // stringify all tables so the associative data can be brought back and bypass GraphQL (which sounds dumb compared to the fact that .. that action solved the problem. )
          const isdayDataEmpty = await isArrayEmpty(dayData)
          // if the data is empty then prisma couldn't find anything and there's no need to stringify undefined values so return.
          if (isdayDataEmpty === true) return "error"

          const privacySettingsPROMISE = new Promise(async (resolve:any) => {
            // no reject() ... it will resolve either way. 
            const postingUserPrivacySettings = await CBgetUserPrivacySettingsWithUserID(dayData?.user_id)
            if (!postingUserPrivacySettings) {
              const returnObject = { dayData: dayData, privacy: "none"};
              resolve(returnObject)
            } else {
              const returnObject = { dayData: dayData, privacy: postingUserPrivacySettings};            
              resolve(returnObject)
            }
          })

          return privacySettingsPROMISE
          .then((returnObject) => {
            console.log("then block! privactySettingsPROMISE")
            console.log('returnObject', returnObject)
            const stringifiedReturnObject:string = JSON.stringify(returnObject);
            return stringifiedReturnObject
            // return JSON.stringify(dayData)
          })
          .catch((error) => {
            console.log("privacySettingsPROMISE catch block")
            return "error"
          })

          // original return without the privacy settings.           
          // return JSON.stringify(dayData)
          
        }).catch((error) => {
          console.log('ALLdayDataWithID from the server', error)
          return "error"
        })
      },

      ALLdayDataWithID: async (_, args) => {      
        const { dayId } = args
        return await prisma.days.findUnique({
          where: {
            id: dayId
          },
          include: { 
            thoughts: true,
            moments: true,
            fields: true,
            greatfullagain: true,
          }
        })
        .then((dayData:any) => {
          dayData = dayData?.data?.data?.ALLdayDataWithID
          console.log('ALLdayDataWithID from the server', dayData)

          // let allTables = await  JSON.stringify(dayData)
          // set a random value of dayData to be that stringified value.
          return dayData
          
        }).catch((error) => {
          console.log('ALLdayDataWithID from the server', error)
          return;
        })
      },

      getDayMoments: async (_, args) => {
         const { dayId } = args

          return prisma.days.findUnique({
          where: {
            id: dayId
          },
          include: { moments: true } 
         }).then( (dayData:any) => {
          console.log('dayData', dayData)          
          return dayData?.moments
            // return dayData
         })
      },

      getDayFields: async (_, args) => {
        const { dayId } = args
        return prisma.days.findUnique({ 
           where: { id: dayId },
           include: { fields: true } 
        }).then( (dayData:any) => {
          return dayData?.fields
        })        
      },

      getDayThoughts: async (_, args) => {
        const { dayId } = args
        return prisma.days.findUnique({ 
           where: { id: dayId },
           include: { thoughts: true } 
        }).then( (dayData:any) => {
          // console.log('dayData', dayData)
          const thoughts = dayData?.thoughts
          console.log('dayData', dayData)
          // console.log('getDayThoughts', thoughts)
          return thoughts          
        }).catch( (err) => {
          console.log('err', err)
          return err;
        })        
      },

      getDayGreatfullagain: async (_, args) => {
        const { dayId } = args
        return prisma.days.findUnique({
          where: { id: dayId },
          include: { greatfullagain: true }
        }).then( (dayData:any) => {
          console.log('dayData', dayData)
          const greatfullagain = dayData?.greatfullagain
          if (!greatfullagain) {
            return null;
          }
          return greatfullagain
        }).catch((error) => {
          console.log('error', error)
          return null;
          // return { value: 'error', why: error}
          // needs work! store as a variable! and do:       if (!greatfullagain) { return } else { }
        })
      },

      getDayStars: async (_, args) => {
        const { dayId } = args;
        const stars = await allStars()
        if (!stars) {
          return;
        }
        let dayDataStars = stars.filter(star => star?.day_id === dayId)
          // dayDataStars = dayDataStars
          // if (dayDataStars === null) {
          //   return;
          // }
          return dayDataStars

      },

      getAllUserPassDayLocksForDayId: async (_, args) => {
        // really don't like try catch because atleast given what I've seen it leads to two statements in the try { } ... for null
        const userPassLocks = await prisma.userpassdaylocks.findMany()
        if (!userPassLocks) {
          return null;
        }
        return userPassLocks
        // return [
        //   { id: 7, user_id: 7, day_id: 7 },
        //   { id: 3, user_id: 3, day_id: 3 },
        // ];
      }
    },  // query bracket end 

    Mutation: {    
        userSignup: async (_, args) => {
          
          const {
            username, password, email, birthday             
          } = args;
          // || locale
          const locale:string = args?.locale || 'en' 
          
          const saltRounds = 13
          const tableSalt = bcrypt.genSaltSync(saltRounds)
          const passHasher = bcrypt.hashSync(password, tableSalt)  
          let today = getToday(locale);
          
          console.log('passHasher', passHasher);        

          const newUser = await prisma.users.create({
              data: {
              username: username,
              icon: '',
              password: passHasher,
              email: email,
              birthday: birthday, // age: age,  
              joinday: today?.date,
              role: 'user',
            },  
          })
          if (!newUser) {
            console.log('no new user')
            return;
          }
          console.log('server resolvers.ts newUser', newUser)
          return newUser;
          // console.log('newUser', newUser)

          // return {
          //     id: 0,
          //     username: 'error',
          //     icon: '',
          //     password: 'no pass',
          //     email: 'no email',
          //     birthday: 0,
          //     joinday: 0,
          //     has_flagged: 0,
          //     flagged_posts: 0,
          //     has_reported: 0,
          //     reported_posts: 0,
          //     location: '',
          //     gender: '', 
          //     orientation: '',
          //     ethnicity: ''
          // }
          
          // return prisma.users.create({
          //   data: {
          //     username: username,
          //     icon: '',
          //     password: passHasher,
          //     email: email,
          //     birthday: birthday,
          //     joinday: today,
          //     // age: age,
          //     role: 'user',
          //   },
          // }).then( (u) => {                
          //   console.log('hey its u!', u)
          //   return u
          // }).catch( (err) => {
          //   console.log('SERVER resolvers.ts', err)
          //   return {
          //     id: 0,
          //     username: 'error',
          //     icon: '',
          //     password: 'no pass',
          //     email: 'no email',
          //     birthday: 0,
          //     joinday: 0,
          //     has_flagged: 0,
          //     flagged_posts: 0,
          //     has_reported: 0,
          //     reported_posts: 0,
          //     location: '',
          //     gender: '', 
          //     orientation: '',
          //     ethnicity: ''
          //   }
          //   })     
        },

        toggleFieldsCheckboxIndex: async (_, args) => {
        // this function is expressed when the user clicks on a checkbox. toggle value T->F | F->T by updating the table with args that have the final array to be entered as is into psql
        //  if (newCheckboxes[i] = true) newCheckboxes[i] = False            if (newCheckboxes[i] = false) newCheckboxes[i] = true    (togling function)
        // was kind of stuck wondering whether to change the values from T to F serverside or clientside. doesn't seem to matter.

            // const {fieldId} = args
            const {fieldId, newCheckboxes, currUserRecentPostId} = args
            // console.log('server side newCheckboxes', newCheckboxes)

            console.log('newCheckboxes', newCheckboxes)
            // const parsedStringedCheckboxes = JSON.parse(newCheckboxes)

            return await prisma.fields.update({
              where: {
                id: fieldId
              },
              data: {
                checkbox: newCheckboxes,
              }
            }).then((updatedFields:any) => {    // updatedFields:Fields & has to allow for methods on the typing.
              return { checkbox: updatedFields.checkbox }              
            }).catch((error) => {
              // error handling return some strings:
            })            
        },
        copyFieldsOntoNewFields: async (_, args) => {
// WITS Walk-In-Their-Shoes:    scrolling-user copying posting-user's fields but updating most recent {table.days.fields} to do it. 
          let { fields, duplicateFields, deletingFieldsId, currUserRecentPostId } = args;                   
          const { user_id, constantsee, text, dream, likeable, on_profile, wits_ok, wits_username, checkbox, users_checkboxes } = fields
          
// no params? return. also, if JSON.stringify() [] === [] comparing fields.fields -> strictly equal? no point in copying. return.
          if (!fields || !deletingFieldsId || !currUserRecentPostId || JSON.stringify(duplicateFields) === JSON.stringify(fields.fields)) {
            return;
          }

          // we have params and the copying-user's most recent 
          const updatedFields = await prisma.fields.update({
            where: {
              id: deletingFieldsId
            },
            data: {
                user_id: user_id ? user_id : null,
                day_id: currUserRecentPostId,
                // decidedo_id: fields?.decidedo_id || null,
                fields: fields?.fields,
                constantsee: constantsee,
                text: text,
                dream: dream,
                likeable: likeable,
                on_profile: on_profile,
                wits_ok: wits_ok,
                wits_username: wits_username,
                checkbox: checkbox,
                users_checkboxes: users_checkboxes
                // thoughts_ok: fields?.thoughts_ok,
              }
          }).then((f:any) => {            
            console.log('SERVER f is for fields:', f)
            // let { user_id, day_id, fields, constantsee, text, dream, likeable, on_profile, wits_ok, wits_username, checkbox } = updatedFields
            const { user_id, day_id, constantsee, text, dream, likeable, on_profile, wits_ok, wits_username, checkbox, users_checkboxes } = f
            const fieldsObject = { 
              user_id: user_id || null, 
              day_id: day_id, 
              fields: fields, 
              constantsee: constantsee,
              text: text, 
              dream: dream, 
              likeable: likeable, 
              on_profile: on_profile, 
              wits_ok: wits_ok, 
              wits_username: wits_username, 
              checkbox: checkbox,
              users_checkboxes: users_checkboxes                          
            }
            console.log('SERVER: fieldsObject', fieldsObject)
            return fieldsObject;
          }).catch((error) => {
            console.log('error', error)
            return;
          })
          return updatedFields;
        },
        
        copyFieldsSaveDraftDay: async (_, args) => {
//  WITS: Walk-In-Their-Shoes -> scrolling-user copying posting-user's fields. 
//  instead of scrolling-user rewriting their CURR_USER_RECENT_POST.fields. create empty post with associated fields data from posted content.
          const { userId, username, fields } = args;
          const locale = args?.locale || 'en'
          const { user_id, constantsee, text, dream, likeable, on_profile, wits_ok, wits_username, checkbox, users_checkboxes } = fields
// messups is an incrementing boolean in case fields.day_id somehow doesn't get populated with the created days.id value. recursively rerun!!!
          let messups:number = 0;
          
          if (!userId || !username || !fields) {
            console.log("if (!userId || !username || !fields) {")
            return;
          }

// for table.days.length;
          const ALLDAYS = await allDays();                    

          const today = await getToday(locale)
          const todaysDay:string = today?.date;

//        recursive function because sometimes {table.days} & {tables.fields} are created but fields has no day_id
//  when that happens else block checks messages:number for limit. if under limit: delete newly created fields w/o day_id & recreate data!
          const recursiveNewDayAndAssociatedFields = async () => {
            let newDayFields = {
                                      // table.days:
              id: ALLDAYS?.length + 1,
              user_id: userId,
              username: username,
              title: '',
              caption: '',
              feedface: 'fields',
              non_anonymous: 'yes',
              shareable: 'yes',
              downloadable: 'no',  
              thoughts_ok: 'yes',
              date: todaysDay,                
              voice_comments_ok: true,        // playing safe & defaulting to voice_comments_ok for these.
              video_comments_ok: false,       // to be used with locks | maybe weekends only ?  
                                      // table.fields:
              fields: {
                create: {
                  // day_id: ALLDAYS?.length + 1,   // not needed.
                  fields: fields.fields,   // || null:    null safety performed clientside. if the value didn't exist then it's already null
                  text: text,
                  checkbox: checkbox,
                  users_checkboxes: users_checkboxes,
                  constantsee: constantsee,
                  likeable: likeable,
                  dream: dream,
                  on_profile: on_profile,
                  wits_ok: wits_ok,
                  wits_username: wits_username,
                }
              }
            }          
  
            try {
              let dayFields = await prisma.days.create({ data: newDayFields })

              let dayDataChildFields = await prisma.fields.findUnique({
                where: {
                  day_id: dayFields?.id
                }
              })              

              if (!dayDataChildFields) {
                console.log("THIS BLOCK!!!!!!!!!    fields.day_id === null || undefined");
                messups++;
                Promise.all([
                  // await prisma.days.delete({ where: { id: dayFields?.id } }),
                  // await prisma.fields.delete({ where: { id: dayFields?.fields?.id } })                  
                ]).then(() => {
                  if (messups <= 2) {                    
                    recursiveNewDayAndAssociatedFields();
                  } else {
                    return { id: userId,  fields: ['this', 'didnt', 'work'] }
                  }
                })
                // .then(() => recursiveNewDayAndAssociatedFields())                
              } else {
                return dayDataChildFields
              }
            }
            catch(error) {
              console.log('error', error)
              return { id: userId,  fields: ['this', 'didnt', 'work'] }
            }                      
          }
          return recursiveNewDayAndAssociatedFields()
          
        },
        
        submitOneThruFiveStars: async (_, args) => {
          // might be called submitOneThruFiveStarsComments but should be reusable to apply to other cases.
          const { day_id, scrolling_user_id, posting_user_id, username, user_profile_icon, stars, thought_id, message_id, suggestion_id } = args;

          console.log('SERVER: day_id', day_id)
          console.log('SERVER: scrolling_user_id', scrolling_user_id)
          console.log('SERVER: posting_user_id', posting_user_id)
          console.log('SERVER: username', username)
          console.log('SERVER: user_profile_icon', user_profile_icon)
          console.log('SERVER: stars', stars)
          console.log('SERVER: thought_id', thought_id)

          if (scrolling_user_id === posting_user_id ) {
            // prevent duplicate
            return [{ user_id: scrolling_user_id, username: 'me', stars: 777 }]
          }

          // bool returning func
          // takes userId as params and thought_id as params
          // 
          let allStarsDB = await allStars()
          if (allStarsDB === null || allStarsDB === undefined || allStarsDB?.length === 0) {
            return; 
          }
          const iReviewedAlready = allStarsDB.filter(stars => stars?.user_id === scrolling_user_id && stars?.thought_id === thought_id)

          console.log('iReviewedAlready', iReviewedAlready)

          if (iReviewedAlready !== null || iReviewedAlready !== undefined || iReviewedAlready?.length === 0) {            
            // filter should return [] so it will hit this block and avoid the return.
          } else {
            return;
          }

          // const didIAlreadyReview = await prisma.stars.findFirst({
          //   where: {
          //     user_id: user_id,
          //     thought_id: thought_id
          //   }
          // })
          // if (didIAlreadyReview) {
          //   console.log('SERVER: didIAlreadyReview', didIAlreadyReview)
          //   return;
          // }

          return prisma.stars.create({
            data: {
              // user_id already checked:        if (!user_id) { return null } before we even attempt to find the rating.
              day_id: day_id,
              user_id: scrolling_user_id,
              username: username || null,
              user_profile_icon: user_profile_icon,
              thought_id: thought_id || null,
              message_id: message_id || null,
              suggestion_id: suggestion_id || null,
              stars: stars || null,
            }
            }).then(async(newStars) => {
              if (!newStars) {
                return
              }
              let allStars = await prisma.stars.findMany()
              return allStars;
            })  
          // }).then(async newStars => { return newStars ? await prisma.stars.findMany() : null})         
          // }).then(newStars => { return newStars ? newStars : null})         

          .catch((error) => { 
            console.log('error', error)
            return null
          })
        }
      } // mutation bracket end.
     }  // whole resolvers end. 

                      // close redis
// process.on('SIGINT', async () => {
//   await redis.quit();
//   process.exit(0);
// });  '
