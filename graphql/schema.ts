import {gql} from 'apollo-server-micro';

    // considered putting login_count in {type users} but don't know if information could somehow be exposed. 
    export const typeDefs = gql`

        type Users {
            id:                         Int!
            username:                   String!
            password:                   String!
            email:                      String!
            birthday:                   String!
            joinday:                    String!
            location_id:                Int
            last_username_change:       String
            full_name:                  String
            icon:                       String!
            cover_photo:                String
            gender:                     String
            orientation:                String
            ethnicity:                  String
            role:                       String
            no_ads:                     Boolean
            post_order:                 String
            show_followers:             Boolean
            avg_likes:                  Int
            avg_comments:               Int
            daily_scrolling:            Int
            avg_scrolling:              Int
            avg_shares:                 Int
            total_posts:                Int
            total_followers:            Int
            total_following:            Int
            malicious_action_tally:     Int       
            i_can_trash_u:              Int
            trash_u_today:              Int
            trash_me_today:             Int
            trash_u_30:                 Int
            trash_me_30:                Int
            total_sessions:             Int
            sessions_this_year:         Int
            vibe_u_today:               Int
            spam_percent:               Int
            reported_posts_me:          Int
            has_reported_u:             Int
            explicit_posts:             Int
            has_marked_exp:             Int
            thought_limit:              Int
            comment_limit:              Int
            last_vibe_gift:             Int
            sus_start_date:             Int
            token:                      String           
            timestamp:                  String
            updatedAtBin:               [String]
        }

        type Followers {
            id:                         Int!
            user_id:                    Int!
            follower_id:                Int!

            timestamp:                  String
            updatedAtBin:               [String]
        }

        type DoWeFollowEachOther {
            iFollowThem:                Boolean!
            theyFollowMe:               Boolean!
        }

        type Blocks {
            id:                         Int!
            user_id:                    Int!
            blocked_id:                 Int!
            feedback:                   String
            notes:                      String
        }

        type DoWeBlockEachOther {
            iBlockThem:                 Boolean!
            theyBlockMe:                Boolean!
        }

        type UsersIDnUsername {
            id:                         Int!
            username:                   String!
        }

        input UsersIDnUsernameInput {
            id:                         Int!
            username:                   String!
        }

        type Thoughts {
            id:                         Int                         
            user_id:                    Int
            username:                   String
            user_profile_icon:          String        
            day_id:                     Int
            location_id:                Int
            moment_id:                  Int
            greatfullagain_id:          Int
            parent_thought_id:          Int
            sus_content:                Boolean     
            suggestion_id:              Int
            feedgame_id:                Int
            meme_id:                    Int
            title:                      String    
            thought:                    String
            thoughts:                   [String]
            date:                       String
            non_anonymous:              String
            starrable:                  String
            thoughts_ok:                String
            comment_icon:               String
            
            is_voice:                   Boolean
            is_video:                   Boolean
            stars_show_avg:             Boolean
            stars_show_users:           Boolean     

            blank_thoughts_ok:          Boolean
            blank_thoughts_username:    String

            downloadable:               String
            explicit:                   Boolean
            is_reported:                Boolean
            is_in_trash:                Boolean
            trash_tally:                Int
            on_profile:                 String
        }

        type Greatfullagain {
            id:                         Int
            user_id:                    Int
            day_id:                     Int
            concern:                    String
            question:                   String
            criticism:                  String
            words:                      [String]
            greatfull:                  [String]
            on_profile:                 String
            show_cgc:                   String
            zoom_in:                    String
            zoom_out:                   String
        }

        type Moments {
            id:                         Int
            day_id:                     Int!
            moment:                     String
            moments:                    [String]
            caption:                    [String]
            on_profile:                 String
        }

        type Stars {
            id:                         Int
            user_id:                    Int!
            username:                   String
            user_profile_icon:          String        
            day_id:                     Int
            
            thought_id:                 Int
            message_id:                 Int
            suggestion_id:              Int

            stars_show_avg:             Boolean
            stars_show_users:           Boolean

            stars:                      Int!
            timestamp:                  String
            updatedAtBin:               [String]
        }

        type Fields {
            id:                         Int
            user_id:                    Int
            day_id:                     Int
            decidedo_id:                Int
            fields:                     [String]
            checkbox:                   [Boolean]
            constantsee:                [String]
            users_checkboxes:           [Boolean]
            text:                       [String]
            decide:                     String
            do:                         String
            dream:                      String
            likeable:                   String
            thoughts_ok:                String
            on_profile:                 String
            wits_ok:                    Boolean
            wits_username:              String
        }

        type Days {
            id:                         Int!
            user_id:                    Int!
            username:                   String!
            user_profile_icon:          String
            location_id:                Int
            category_id:                Int
            title:                      String
            caption:                    String
            non_anonymous:              String!
            thoughts_ok:                String!
            shareable:                  String!
            downloadable:               String!

            show_views_ok:              Boolean
            show_time_ok:               Boolean
            public_likes:               Boolean
            rlly_like_ok:               Boolean
            rlly_like_group:            Boolean
            commenter_can_determine:    Boolean
            voice_comments_ok:          Boolean
            video_comments_ok:          Boolean            

            is_reported:                Boolean
            is_in_trash:                Boolean
            trash_tally:                Int
            feedface:                   String!
            date:                       String
            lock:                       String
            unlock:                     String
            sus_content:                Boolean
            timestamp:                  String
            updatedAtBin:               [String]
        }  

        type Privacy {
            id:                         Int!      
            user_id:                    Int!      
            private_acct:               Boolean!
            can_msg:                    String!
            anon_msg:                   String!

            share_data:                 Boolean
            prankable:                  Boolean
            opt_in_feedgame:            Boolean
            opt_in_thoughtblank:        Boolean
            opt_in_allours:             Boolean
            show_history:               Boolean
            show_friends:               String
            can_mention:                String             
        }

        type UserPassDayLocks {
            id:                         Int!      
            day_id:                     Int!
            user_id:                    Int!                     
        }

        input FieldsInput {
            id:                         Int
            user_id:                    Int
            day_id:                     Int
            decidedo_id:                Int         
            fields:                     [String]
            constantsee:                [String]
            text:                       [String]
            dream:                      String
            likeable:                   String
            thoughts_ok:                String
            on_profile:                 String
            wits_ok:                    Boolean
            wits_username:              String
            checkbox:                   [Boolean]
            users_checkboxes:           [Boolean]    
        }

        type Query {
            allUsersGET:                [Users]
            allFollowersGET:            [Followers]
            allBlocksGET:               [Blocks]
            allUserPassDayLocksGET:     [UserPassDayLocks]            
            allStarsGET:                [Stars]

            getUserWithId(
                id:                     Int!
            ): Users

            getUserPrivacySettingsWithUserId(
                userId:                 Int!
            ): Privacy

            doWeFollowEachOther(
                meId:                   Int!
                youId:                  Int!
            ):  DoWeFollowEachOther
                
            doWeBlockEachOther(
                meId:                   Int!
                youId:                  Int!
            ): DoWeBlockEachOther

            getDayDataWithId(
                dayId:                  Int!
            ): Days

            ALLdayDataString(
                dayId:                  Int!
            ): String

            ALLdayDataWithID(
                dayId:                  Int!
            ): Days

            getDayMoments(
                dayId:                  Int!
            ): Moments

            getDayThoughts(
                dayId:                  Int!
            ): [Thoughts]

            getDayCommentThoughts(
                dayId:                  Int!
            ): [Thoughts]

            getDayFields(
            dayId:                      Int!
            ): Fields

            getDayGreatfullagain(
                dayId:                  Int!
            ): Greatfullagain

            getDayStars(
                dayId:                  Int!
            ): [Stars]

            userLogin(
                email:                  String!
                password:               String!
            ): Users

            getAllMyUserDayPostsWithUserID(
                userId:                 Int!
            ): [Days]

            getMostRecentDayPostWithUserId(
                userId:                 Int!
            ): String

            getAllUserPassDayLocksForDayId(
                dayId:                  Int!
            ): [UserPassDayLocks]
            
        }

        type Mutation {

            userSignup(
                username:               String!
                password:               String!
                email:                  String!
                birthday:               String!
                locale:                 String!
            ): Users

            toggleFieldsCheckboxIndex(
                fieldId: Int!
                newCheckboxes: [Boolean]
            ): Fields
                
            copyFieldsOntoNewFields(
                fields:                     FieldsInput!
                duplicateFields:            [String]!
                deletingFieldsId:           Int!
                currUserRecentPostId:       Int!
                scrollingUserId:            Int!
                postingUserId:              Int!
            ): Fields

            copyFieldsSaveDraftDay(
                userId:                     Int!
                username:                   String!
                fields:                     FieldsInput!
            ): Fields     
            
            submitOneThruFiveStars(
                day_id:                     Int!
                scrolling_user_id:          Int!
                posting_user_id:            Int!
                username:                   String
                user_profile_icon:          String
                thought_id:                 Int
                message_id:                 Int
                suggestion_id:              Int
                stars:                      Int!                                
            ): [Stars]
            
            }            
            `                    