// just had an idea for a program:        
// given:                schema.ts & resolvers.ts           the AI can make queries.ts (basically make params from args)
// possibly uses puppeteeer to scrape that text and to write to the containers.

import { UsersIDnUsernameINTERFACE } from "Interface/InterfaceTypes"


// journall:
   export const allUsersGETquery = `query { allUsersGET { id, username, icon, email, joinday }}`
   export const allStarsGETquery = `query { allStarsGET { id, day_id, user_id, username, user_profile_icon, thought_id, message_id, suggestion_id, stars, timestamp, updatedAtBin }}`

   // export const allUsersGETquery = `query { allUsersGET { id, username, icon, email, joinday, has_flagged, flagged_posts, has_reported, reported_posts, location, gender, orientation, ethnicity }}`

   export const signupQueryStringFunc = (username:string, password:string, email:string, birthday:string, locale:string) => {
      // id | username | icon | password| email | birthday | has_flagged | flagged_posts | has_reported | reported_posts | location | gender | orientation | ethnicity 
      const query = `mutation {
         userSignup(username: "${username}", password: "${password}", email: "${email}", birthday: "${birthday}", locale: "${locale}") {
            id, username, password, email, birthday, joinday, 
            location_id, last_username_change, full_name, icon, cover_photo, gender, orientation,  
            total_followers, total_following, i_can_trash_u, trash_u_today, trash_me_today, trash_u_30, trash_me_30, total_sessions,
            ethnicity, role, no_ads, post_order, show_followers, avg_likes, avg_comments, daily_scrolling, avg_scrolling, avg_shares, total_posts,           
            sessions_this_year, vibe_u_today, spam_percent, reported_posts_me, has_reported_u, explicit_posts, has_marked_exp,
            thought_limit, comment_limit, last_vibe_gift, sus_start_date, token, malicious_action_tally,
            timestamp, updatedAtBin
         }
      }`   
      // timestamp                       
      return query;
   }

   export const loginQueryStringFunc = (email:string, password:string) => {
      const query = `query {
         userLogin(email: "${email}", password: "${password}") {
            id, username, password, email, birthday, joinday, location_id, last_username_change, full_name, icon, cover_photo, gender, orientation,
            ethnicity, role, no_ads, post_order, show_followers, avg_likes, avg_comments, daily_scrolling, avg_scrolling, avg_shares, total_posts,           
            total_followers, total_following, i_can_trash_u, trash_u_today, trash_me_today, trash_u_30, trash_me_30, total_sessions,
            sessions_this_year, vibe_u_today, spam_percent, reported_posts_me, has_reported_u, explicit_posts, has_marked_exp,
            thought_limit, comment_limit, last_vibe_gift, sus_start_date, token, malicious_action_tally,
            timestamp, updatedAtBin
         }
      }`
      // timestamp                       
      return query
   }

   export const getUserWithIdQueryStringFunc = (id:number) => {
      const query = `query {
         getUserWithId(id: ${id}) {
            id, username, password, email, birthday, joinday, location_id, last_username_change, full_name, icon, cover_photo, gender, orientation,
            ethnicity, role, no_ads, post_order, show_followers, avg_likes, avg_comments, daily_scrolling, avg_scrolling, avg_shares, total_posts,           
            total_followers, total_following, i_can_trash_u, trash_u_today, trash_me_today, trash_u_30, trash_me_30, total_sessions,
            sessions_this_year, vibe_u_today, spam_percent, reported_posts_me, has_reported_u, explicit_posts, has_marked_exp,
            thought_limit, comment_limit, last_vibe_gift, sus_start_date, token, malicious_action_tally,
            timestamp, updatedAtBin
         }
      }`
      // timestamp                                       
      return query;
   }

   export const getUserPrivacySettingsWithUserIdQueryStringFunc = (userId:number) => {
      const query = `query {
         getUserPrivacySettingsWithUserId(userId: ${userId}) {
            id, user_id, private_acct,
            share_data, prankable, opt_in_feedgame, opt_in_thoughtblank, opt_in_allours,
            show_history, show_friends, 
            can_msg, anon_msg, can_mention
         }
      }`
      return query;
   }

export const doWeFollowEachOtherQueryStringFunc = (meId:number, youId:number) => {
      const query = `query {
         doWeFollowEachOther(meId: ${meId}, youId: ${youId}) {
            iFollowThem, theyFollowMe
         }
      }`
      return query;
   }

export const doWeBlockEachOtherQueryStringFunc = (meId:number, youId:number) => {
      const query = `query {
         doWeBlockEachOther(meId: ${meId}, youId: ${youId}) {
            iBlockThem, theyBlockMe
         }
      }`
      return query;
   }

   export const dayDataQueryStringFunc = (dayId:number) => {
      const query = `query {
         getDayDataWithId(dayId: ${dayId}) {
            title, caption, non_anonymous, thoughts_ok, shareable, downloadable, 
            id, user_id, username, user_profile_icon, location_id, category_id,
            show_views_ok, show_time_ok, public_likes, 
            rlly_like_ok, rlly_like_group,
            is_reported, feedface, 
            is_in_trash, trash_tally, date, lock, unlock, sus_content,
            voice_comments_ok, video_comments_ok, commenter_can_determine,
            timestamp, updatedAtBin,
         }
      }`
      // i_can_unlock
      return query
   }

   export const ALLdayDATAqueryStringFunc = (dayId:number) => {
      const query = `query {
         ALLdayDataWithID(dayId: ${dayId}) {
            title, caption, non_anonymous, thoughts_ok, shareable, downloadable, 
            id, user_id, username, user_profile_icon, location_id, category_id,
            show_views_ok, show_time_ok, public_likes, 
            rlly_like_ok, rlly_like_group,
            is_reported, feedface, 
            is_in_trash, trash_tally, date, lock, unlock, sus_content,
            voice_comments_ok, video_comments_ok, commenter_can_determine,
            timestamp, updatedAtBin,    
         }
      }`
      // i_can_unlock 
      return query;
   }

   // JSON.stringify() to return all tables as a stringified value.
   export const ALLdayDataStringQueryStringFunc = (dayId:number) => {
      const query = `query {
         ALLdayDataString(dayId: ${dayId})
      }`
      return query;
   }

   export const dayMomentsQueryStringFunc = (dayId:number) => {
      const query = `query {
         getDayMoments(dayId: ${dayId}) {
            day_id, moment, moments, on_profile, caption, 
         }
      }`
      return query
   }

   export const dayFieldsQueryStringFunc = (dayId:number) => {
      const query = `query {
         getDayFields(dayId: ${dayId}) {
            id, user_id, day_id, decidedo_id, fields, checkbox, constantsee, users_checkboxes, text,
            decide, do, dream, likeable, thoughts_ok, on_profile, 
            wits_username, wits_ok
         }
      }`
      return query
   }

   export const dayThoughtsQueryStringFunc = (dayId:number) => {
      const query = `query {
         getDayThoughts(dayId: ${dayId}) {
            id, user_id, username, user_profile_icon, day_id, location_id, moment_id,          
            greatfullagain_id, parent_thought_id, sus_content,
            suggestion_id, feedgame_id, meme_id, title,
            thought, thoughts, 
            non_anonymous, downloadable, starrable, thoughts_ok, comment_icon, 
            is_reported, is_in_trash, trash_tally, date, on_profile,
            is_voice, is_video, 
            stars_show_avg, stars_show_users,
            blank_thoughts_ok, blank_thoughts_username,
         }
      }`
      return query
   }

   export const dayGreatfullagainQueryStringFunc = (dayId:number) => {
      const query = `query {
         getDayGreatfullagain(dayId: ${dayId}) {
            concern, question, criticism, words, greatfull, zoom_in, zoom_out       
         }
      }`
      return query
   }

   export const toggleFieldsCheckboxIndexQuery = (fieldId:number, newCheckboxes:any) => {  
      // no :boolean[] because then JSON.stringify doesn't work and graphQL returns a GRAPHQL_PARSE_ERROR // also no :any[]
      newCheckboxes = JSON.stringify(newCheckboxes)
      const query = `query {
         toggleFieldsCheckboxIndex(fieldId: ${fieldId}, newCheckboxes: ${newCheckboxes})
      }`
      return query;
   }

   export const getAllMyUserDayPostsWithUserIDQueryStringFunc = (userId:number) => {
      const query = `query {
         getAllMyUserDayPostsWithUserID(userId: ${userId}) {
            title, caption, non_anonymous, thoughts_ok, shareable, downloadable, 
            id, user_id, location_id, category_id,
            show_views_ok, show_time_ok, public_likes, 
            rlly_like_ok, rlly_like_group,
            is_reported, feedface, 
            is_in_trash, trash_tally, date, lock, unlock, sus_content          
         }
      }`   
      return query;
   }

   export const getMostRecentDayPostWithUserIdQueryStringFunc = (userId:number) => {
      const query = `query {
         getMostRecentDayPostWithUserId(userId: ${userId})
      }`
      // title, caption, non_anonymous, thoughts_ok, shareable, downloadable, 
      // id, user_id, location_id, category_id,
      // show_views_ok, show_time_ok, public_likes, 
      // rlly_like_ok, rlly_like_group,
      // is_reported, feedface, 
      // is_in_trash, trash_tally, date, lock, unlock, sus_content                   
      return query;
   }

// {copyFieldsRewrite} -> scrolling-user posting-users'-post,  copies/updates the scrolling-users's most recent post with the CURRENT_DAY post 
   export const copyFieldsOntoNewFieldsQueryStringFunc = async (fields: any, duplicateFields:any, currDay: any, deletingFieldsId:number, currUserRecentPostId:number, scrollingUserId:number, postingUserId:number) => {            
      const query = `mutation {   
         copyFieldsOntoNewFields(fields: 
            { 
               id: ${fields.id}, 
               user_id: ${fields.user_id}, 
               day_id: ${currUserRecentPostId},    
               fields: "${fields.fields}", 
               constantsee: "${fields.constantsee}", 
               text: "${fields.text || ['no', 'text']}", 
               dream: "${fields.dream || 'no dream'}", 
               likeable: "${fields.likeable || 'yes'}",
               thoughts_ok: "${fields.thoughts_ok || 'yes'}", 
               on_profile: "${fields.on_profile || ''}", 
               wits_ok: ${fields.wits_ok || true},            
               wits_username: "${currDay?.username || 'no wits username'}",
               checkbox: ${fields.checkbox}
            },                
               deletingFieldsId: ${deletingFieldsId},
               duplicateFields: "${duplicateFields}",
               currUserRecentPostId: ${currUserRecentPostId},
               scrollingUserId: ${scrollingUserId},
               postingUserId: ${postingUserId},
            ) {
               id, user_id, day_id, decidedo_id, fields, checkbox, constantsee, users_checkboxes, text,
               decide, do, dream, likeable, thoughts_ok, on_profile, 
               wits_username, wits_ok
            }
         }`         
         return query;
   }

   export const copyFieldsSaveDraftDayQueryStringFunc = async (userId:number, username:string, fields:any, currDay:any) => {
   // day_id: not shown below because: day_id gets found serverside because it makes the new day as draft post and attaches these fields.
   const { id, user_id, constantsee, text, dream, likeable, thoughts_ok, on_profile, wits_ok, wits_username, checkbox, users_checkboxes } = fields;
      const query = `mutation {
         copyFieldsSaveDraftDay(fields: {
               id: ${id}, 
               day_id: ${currDay?.id}
               user_id: ${user_id},
               fields: "${fields.fields}", 
               constantsee: "${constantsee}", 
               text: "${text || ['no', 'text']}", 
               dream: "${dream || 'no dream'}", 
               likeable: "${likeable || 'yes'}",
               thoughts_ok: "${thoughts_ok || 'yes'}", 
               on_profile: "${on_profile || ''}", 
               wits_ok: ${wits_ok || true},            
               wits_username: "${currDay?.username || ''}",
               checkbox: ${checkbox},
               users_checkboxes: ${users_checkboxes},
            },
            userId: ${userId}
            username: "${username}"
            ) {
               id, user_id, day_id, decidedo_id, fields, checkbox, constantsee, users_checkboxes, text,
               decide, do, dream, likeable, thoughts_ok, on_profile, 
               wits_username, wits_ok
            }
         }`         
      return query;
   }   

   //  userPassDayLocks queries. when a post has a lock and a user passes it they make it to this table which corresponds to the days.id 
   export const allUserPassDayLocksGETQuery = `query { allUserPassDayLocksGET { id, day_id, user_id } }`
   
   export const getAllUserPassDayLocksForDayIdQueryStringFunc = async (dayId:number) => {
         const query = `query {
            getAllUserPassDayLocksForDayId(dayId: ${dayId}) {
               id, day_id, user_id, 
            }
         }`   
      return query;
   }

   export const submitOneThruFiveStarsQueryStringFunc = (day_id: number, posting_user_id: number, scrolling_user_id: number, username:string|null, user_profile_icon:string|null, thought_id: number|null, message_id: number|null, suggestion_id: number|null, stars: number) => {
      const query = `mutation {
         submitOneThruFiveStars(day_id: ${day_id}, scrolling_user_id: ${scrolling_user_id}, posting_user_id: ${posting_user_id}, username: "${username}", user_profile_icon: "${user_profile_icon}", thought_id: ${thought_id}, message_id: ${message_id}, suggestion_id: ${suggestion_id}, stars: ${stars}) {
            id, day_id, user_id, username, user_profile_icon, thought_id, message_id, suggestion_id, stars, timestamp
         }
      }`
      return query;
   }

   export const getDayStarsQueryStringFunc = (dayId:number) => {
      const query = `query {
         getDayStars(dayId: ${dayId}) {
            id, day_id, stars,
            user_id, username, user_profile_icon,
            thought_id, message_id, suggestion_id,
            timestamp, updatedAtBin
         }
      }`
      return query;
   }
   //    const { user_id, thought_id, message_id, suggestion_id } = args;