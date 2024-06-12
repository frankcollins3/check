-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "location_id" INTEGER,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "birthday" TEXT NOT NULL,
    "joinday" TEXT NOT NULL,
    "last_username_change" TIMESTAMP(3),
    "full_name" TEXT,
    "icon" TEXT NOT NULL,
    "cover_photo" TEXT,
    "ballot_title" TEXT,
    "gender" TEXT,
    "orientation" TEXT,
    "ethnicity" TEXT,
    "role" TEXT,
    "no_ads" BOOLEAN,
    "post_order" TEXT,
    "show_followers" BOOLEAN,
    "avg_likes" INTEGER,
    "avg_comments" INTEGER,
    "daily_scrolling" INTEGER,
    "avg_scrolling" INTEGER,
    "avg_shares" INTEGER,
    "total_posts" INTEGER,
    "total_followers" INTEGER,
    "total_following" INTEGER,
    "i_can_trash_u" BOOLEAN,
    "malicious_action_tally" INTEGER,
    "trash_u_today" INTEGER,
    "trash_me_today" INTEGER,
    "trash_u_30" INTEGER,
    "trash_me_30" INTEGER,
    "total_sessions" INTEGER,
    "sessions_this_year" INTEGER,
    "vibe_u_today" INTEGER,
    "last_vibe_gift" TIMESTAMP(3),
    "spam_percent" INTEGER,
    "reported_posts_me" INTEGER,
    "sus_start_date" TIMESTAMP(3),
    "has_reported_u" INTEGER,
    "explicit_posts" INTEGER,
    "has_marked_exp" INTEGER,
    "thought_limit" INTEGER,
    "comment_limit" INTEGER,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAtBin" TEXT[],

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "days" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER,
    "username" TEXT,
    "user_profile_icon" TEXT,
    "location_id" INTEGER,
    "category_id" INTEGER,
    "title" TEXT,
    "caption" TEXT,
    "non_anonymous" TEXT NOT NULL,
    "thoughts_ok" TEXT NOT NULL,
    "shareable" TEXT NOT NULL,
    "downloadable" TEXT NOT NULL,
    "voice_comments_ok" BOOLEAN NOT NULL,
    "video_comments_ok" BOOLEAN NOT NULL,
    "show_views_ok" BOOLEAN,
    "show_time_ok" BOOLEAN,
    "public_likes" BOOLEAN,
    "thought_blanks_ok" BOOLEAN,
    "thought_blank_time" TEXT,
    "thought_blank_user" TEXT,
    "rlly_like_ok" TEXT,
    "rlly_like_group" BOOLEAN,
    "commenter_can_determine" BOOLEAN,
    "is_reported" BOOLEAN,
    "feedface" TEXT NOT NULL,
    "is_in_trash" BOOLEAN,
    "trash_tally" INTEGER,
    "date" TEXT NOT NULL,
    "lock" TEXT,
    "unlock" TEXT,
    "sus_content" BOOLEAN,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAtBin" TEXT[],

    CONSTRAINT "days_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "thoughts" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER,
    "username" TEXT,
    "user_profile_icon" TEXT,
    "day_id" INTEGER,
    "location_id" INTEGER,
    "moment_id" INTEGER,
    "greatfullagain_id" INTEGER,
    "parent_thought_id" INTEGER,
    "sus_content" BOOLEAN,
    "suggestion_id" INTEGER,
    "feedgame_id" INTEGER,
    "meme_id" INTEGER,
    "title" TEXT,
    "thought" TEXT,
    "thoughts" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "non_anonymous" TEXT NOT NULL,
    "downloadable" TEXT NOT NULL,
    "starrable" TEXT NOT NULL,
    "thoughts_ok" TEXT NOT NULL,
    "comment_icon" TEXT,
    "is_voice" BOOLEAN,
    "is_video" BOOLEAN,
    "stars_show_avg" BOOLEAN,
    "stars_show_users" BOOLEAN,
    "blank_thoughts_ok" BOOLEAN,
    "blank_thoughts_username" TEXT,
    "is_reported" BOOLEAN,
    "is_in_trash" BOOLEAN,
    "trash_tally" INTEGER,
    "date" TEXT,
    "on_profile" TEXT,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAtBin" TEXT[],

    CONSTRAINT "thoughts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "moments" (
    "id" SERIAL NOT NULL,
    "day_id" INTEGER,
    "moment" TEXT,
    "moments" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "caption" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "on_profile" TEXT,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAtBin" TEXT[],

    CONSTRAINT "moments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fields" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER,
    "day_id" INTEGER,
    "wits_ok" BOOLEAN,
    "wits_username" TEXT,
    "decidedo_id" INTEGER,
    "fields" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "checkbox" BOOLEAN[] DEFAULT ARRAY[]::BOOLEAN[],
    "constantsee" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "users_checkboxes" BOOLEAN[] DEFAULT ARRAY[]::BOOLEAN[],
    "text" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "dream" TEXT,
    "likeable" TEXT NOT NULL,
    "on_profile" TEXT,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAtBin" TEXT[],

    CONSTRAINT "fields_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "witsfields" (
    "id" SERIAL NOT NULL,
    "copy_fields_id" INTEGER,
    "copy_user_id" INTEGER,
    "credit_username" TEXT,
    "paste_fields_id" INTEGER,
    "paste_user_id" INTEGER,
    "swap_fields_id_1" INTEGER,
    "swap_fields_id_2" INTEGER,
    "swap_username_1" TEXT,
    "swap_username_2" TEXT,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAtBin" TEXT[],

    CONSTRAINT "witsfields_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "greatfullagain" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER,
    "day_id" INTEGER,
    "concern" TEXT,
    "question" TEXT,
    "criticism" TEXT,
    "words" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "greatfull" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "zoom_in_msg" TEXT,
    "zoom_out_msg" TEXT,
    "zoom_in" TEXT,
    "zoom_out" TEXT,
    "on_profile" TEXT,
    "show_cgc" TEXT,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAtBin" TEXT[],

    CONSTRAINT "greatfullagain_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ourlocksactivities" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER,
    "username" TEXT,
    "user_profile_icon" TEXT,
    "lock" TEXT,
    "activity" TEXT,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAtBin" TEXT[],

    CONSTRAINT "ourlocksactivities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ourconcerns" (
    "id" SERIAL NOT NULL,
    "concern" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAtBin" TEXT[],

    CONSTRAINT "ourconcerns_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "myconcerns" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "greatfullagain_id" INTEGER NOT NULL,
    "ourconcern_id" INTEGER,
    "concern" TEXT,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAtBin" TEXT[],

    CONSTRAINT "myconcerns_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ourquestions" (
    "id" SERIAL NOT NULL,
    "question" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAtBin" TEXT[],

    CONSTRAINT "ourquestions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "myquestions" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "greatfullagain_id" INTEGER NOT NULL,
    "ourquestion_id" INTEGER,
    "concern" TEXT,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAtBin" TEXT[],

    CONSTRAINT "myquestions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ourcriticisms" (
    "id" SERIAL NOT NULL,
    "criticism" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAtBin" TEXT[],

    CONSTRAINT "ourcriticisms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mycriticisms" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "greatfullagain_id" INTEGER NOT NULL,
    "ourcriticism_id" INTEGER,
    "criticism" TEXT,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAtBin" TEXT[],

    CONSTRAINT "mycriticisms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ourhabits" (
    "id" SERIAL NOT NULL,
    "habit" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAtBin" TEXT[],

    CONSTRAINT "ourhabits_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "myhabits" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "field_id" INTEGER,
    "ourhabit_id" INTEGER,
    "habit" TEXT,
    "start" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "stop" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "active" BOOLEAN,
    "notes" TEXT,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAtBin" TEXT[],

    CONSTRAINT "myhabits_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ourvalues" (
    "id" SERIAL NOT NULL,
    "value" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAtBin" TEXT[],

    CONSTRAINT "ourvalues_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "myvalues" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "field_id" INTEGER,
    "ourvalue_id" INTEGER,
    "value" TEXT,
    "notes" TEXT,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAtBin" TEXT[],

    CONSTRAINT "myvalues_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "media" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER,
    "day_id" INTEGER,
    "thought_id" INTEGER,
    "moment_id" INTEGER,
    "greatfullagain_id" INTEGER,
    "field_id" INTEGER,
    "media_tag" TEXT NOT NULL,
    "media_type" TEXT NOT NULL,
    "is_thumbnail" BOOLEAN,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAtBin" TEXT[],

    CONSTRAINT "media_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "decidedo" (
    "id" SERIAL NOT NULL,
    "fields_id" INTEGER NOT NULL,
    "decide" TEXT NOT NULL,
    "doings" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAtBin" TEXT[],

    CONSTRAINT "decidedo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "listeners" (
    "id" SERIAL NOT NULL,
    "day_id" INTEGER,
    "user_id" INTEGER,
    "still_listening" BOOLEAN NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAtBin" TEXT[],

    CONSTRAINT "listeners_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "likes" (
    "id" SERIAL NOT NULL,
    "liked_by_id" INTEGER,
    "day_id" INTEGER,
    "thought_id" INTEGER,
    "field_id" INTEGER,
    "feedgame_id" INTEGER,
    "message_id" INTEGER,
    "habit" TEXT,
    "is_like" BOOLEAN,
    "is_dislike" BOOLEAN,
    "rlly" TEXT,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAtBin" TEXT[],

    CONSTRAINT "likes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notifications" (
    "id" SERIAL NOT NULL,
    "from_user_id" INTEGER,
    "for_user_id" INTEGER,
    "from_app" BOOLEAN,
    "follower_id" INTEGER,
    "day_id" INTEGER,
    "thought_id" INTEGER,
    "moment_id" INTEGER,
    "listener_id" INTEGER,
    "share_id" INTEGER,
    "like_id" INTEGER,
    "star_id" INTEGER,
    "reaction_id" INTEGER,
    "vibe_id" INTEGER,
    "payment_id" INTEGER,
    "prank_id" INTEGER,
    "feedgame_id" INTEGER,
    "message_id" INTEGER,
    "report_id" INTEGER,
    "user_pass_lock_id" INTEGER,
    "ballot_id" INTEGER,
    "is_read" BOOLEAN NOT NULL,
    "is_request" BOOLEAN,
    "type" TEXT,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAtBin" TEXT[],

    CONSTRAINT "notifications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "locations" (
    "id" SERIAL NOT NULL,
    "nickname" TEXT,
    "city" TEXT,
    "zip_code" INTEGER,
    "country" TEXT,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAtBin" TEXT[],

    CONSTRAINT "locations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "zipcodes" (
    "id" SERIAL NOT NULL,
    "location_id" INTEGER NOT NULL,
    "zipcode" INTEGER NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAtBin" TEXT[],

    CONSTRAINT "zipcodes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "followers" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "follower_id" INTEGER NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAtBin" TEXT[],

    CONSTRAINT "followers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "privacy" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "private_acct" BOOLEAN NOT NULL,
    "can_msg" TEXT NOT NULL,
    "anon_msg" TEXT NOT NULL,
    "share_data" BOOLEAN,
    "prankable" BOOLEAN,
    "opt_in_feedgame" BOOLEAN,
    "opt_in_thoughtblank" BOOLEAN,
    "opt_in_allours" BOOLEAN,
    "show_history" BOOLEAN NOT NULL,
    "show_friends" TEXT,
    "can_mention" TEXT,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAtBin" TEXT[],

    CONSTRAINT "privacy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "rules" TEXT[],
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAtBin" TEXT[],

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mods" (
    "id" SERIAL NOT NULL,
    "category_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAtBin" TEXT[],

    CONSTRAINT "mods_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mod_users" (
    "id" SERIAL NOT NULL,
    "mod_id" INTEGER,
    "user_id" INTEGER,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAtBin" TEXT[],

    CONSTRAINT "mod_users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "blocks" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "blocked_id" INTEGER NOT NULL,
    "feedback" TEXT,
    "notes" TEXT,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAtBin" TEXT[],

    CONSTRAINT "blocks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "suggestions" (
    "id" SERIAL NOT NULL,
    "suggested_by" INTEGER NOT NULL,
    "suggestion" TEXT NOT NULL,
    "notes" TEXT,
    "non_anonymous" BOOLEAN NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAtBin" TEXT[],

    CONSTRAINT "suggestions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stars" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "day_id" INTEGER,
    "username" TEXT,
    "user_profile_icon" TEXT,
    "thought_id" INTEGER,
    "message_id" INTEGER,
    "suggestion_id" INTEGER,
    "stars" INTEGER NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAtBin" TEXT[],

    CONSTRAINT "stars_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shares" (
    "id" SERIAL NOT NULL,
    "day_id" INTEGER,
    "thought_id" INTEGER,
    "field_id" INTEGER,
    "sharer_id" INTEGER,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAtBin" TEXT[],

    CONSTRAINT "shares_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reactions" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER,
    "day_id" INTEGER,
    "feedgame_id" INTEGER,
    "message_id" INTEGER,
    "value_id" INTEGER,
    "habit_id" INTEGER,
    "meme_id" INTEGER,
    "reaction" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAtBin" TEXT[],

    CONSTRAINT "reactions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vibes" (
    "id" SERIAL NOT NULL,
    "for_user" INTEGER NOT NULL,
    "from_user" INTEGER NOT NULL,
    "day_id" INTEGER NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAtBin" TEXT[],

    CONSTRAINT "vibes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payments" (
    "id" SERIAL NOT NULL,
    "from_user_id" INTEGER,
    "for_user_id" INTEGER,
    "is_app_payment" BOOLEAN NOT NULL,
    "day_id" INTEGER,
    "location_id" INTEGER,
    "last_4" INTEGER NOT NULL,
    "ip_addy" TEXT NOT NULL,
    "notes" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "currency" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAtBin" TEXT[],

    CONSTRAINT "payments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pranks" (
    "id" SERIAL NOT NULL,
    "pranked_by_id" INTEGER,
    "pranked_user_id" INTEGER,
    "day_id" INTEGER,
    "prank" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAtBin" TEXT[],

    CONSTRAINT "pranks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hashtags" (
    "id" SERIAL NOT NULL,
    "tag" TEXT,
    "location_id" INTEGER,
    "no_db_loc" TEXT,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAtBin" TEXT[],

    CONSTRAINT "hashtags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hashtaggedcontent" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "hashtag_id" INTEGER NOT NULL,
    "day_id" INTEGER,
    "thought_id" INTEGER,
    "category" TEXT,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAtBin" TEXT[],

    CONSTRAINT "hashtaggedcontent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "feedgames" (
    "id" SERIAL NOT NULL,
    "gametype" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAtBin" TEXT[],

    CONSTRAINT "feedgames_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "messages" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "from_id" INTEGER NOT NULL,
    "msg" TEXT NOT NULL,
    "non_anonymous" BOOLEAN NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAtBin" TEXT[],

    CONSTRAINT "messages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reportedcontent" (
    "id" SERIAL NOT NULL,
    "reported_user" INTEGER NOT NULL,
    "reporting_user" INTEGER NOT NULL,
    "day_id" INTEGER,
    "thought_id" INTEGER,
    "suggestion_id" INTEGER,
    "why" TEXT,
    "status" TEXT,
    "notes" TEXT,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAtBin" TEXT[],

    CONSTRAINT "reportedcontent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "showsuscontentusers" (
    "id" SERIAL NOT NULL,
    "thought_id" INTEGER,
    "day_id" INTEGER,
    "scroll_user_id" INTEGER NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAtBin" TEXT[],

    CONSTRAINT "showsuscontentusers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "trash" (
    "id" SERIAL NOT NULL,
    "trashed_by_id" INTEGER NOT NULL,
    "day_id" INTEGER,
    "thought_id" INTEGER,
    "trashed_count" INTEGER NOT NULL,
    "is_in_trash" BOOLEAN NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAtBin" TEXT[],

    CONSTRAINT "trash_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userpassdaylocks" (
    "id" SERIAL NOT NULL,
    "day_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAtBin" TEXT[],

    CONSTRAINT "userpassdaylocks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mentions" (
    "id" SERIAL NOT NULL,
    "menionted_by_id" INTEGER NOT NULL,
    "mentioned_user_id" INTEGER NOT NULL,
    "day_id" INTEGER,
    "thought_id" INTEGER,
    "moment_id" INTEGER,
    "greatfullagain_id" INTEGER,
    "field_id" INTEGER,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAtBin" TEXT[],

    CONSTRAINT "mentions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ballots" (
    "id" SERIAL NOT NULL,
    "feedgames_id" INTEGER,
    "day_id" INTEGER,
    "started_by_id" INTEGER,
    "suggestion_id" INTEGER,
    "ourconcern_id" INTEGER,
    "ourquestion_id" INTEGER,
    "ourcriticism_id" INTEGER,
    "ourhabit_id" INTEGER,
    "ourvalue_id" INTEGER,
    "title" TEXT,
    "description" TEXT,
    "decision" TEXT,
    "notes" TEXT,
    "option" TEXT,
    "restriction" TEXT,
    "options" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAtBin" TEXT[],

    CONSTRAINT "ballots_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "votes" (
    "id" SERIAL NOT NULL,
    "ballot_id" INTEGER,
    "user_id" INTEGER,
    "vote" INTEGER NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAtBin" TEXT[],

    CONSTRAINT "votes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "algosettings" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER,
    "hashtag_id" INTEGER,
    "location_id" INTEGER,
    "layout" TEXT,
    "concern_id" INTEGER,
    "question_id" INTEGER,
    "criticism_id" INTEGER,
    "field_id" INTEGER,
    "category_id" INTEGER,
    "nickname" TEXT,
    "include_words" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "exclude_words" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "gender" TEXT,
    "engaged_percent" INTEGER,
    "verified" TEXT,
    "trash_percent" INTEGER,
    "reactions" TEXT,
    "anonymous_percent" INTEGER,
    "is_anonymous" TEXT,
    "after_join_date" TEXT,
    "post_percent" INTEGER,
    "feedgame_percent" INTEGER,
    "spam_percent" INTEGER,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAtBin" TEXT[],
    "feed_axis_x" TEXT,

    CONSTRAINT "algosettings_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "moments_day_id_key" ON "moments"("day_id");

-- CreateIndex
CREATE UNIQUE INDEX "fields_day_id_key" ON "fields"("day_id");

-- CreateIndex
CREATE UNIQUE INDEX "greatfullagain_user_id_key" ON "greatfullagain"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "greatfullagain_day_id_key" ON "greatfullagain"("day_id");

-- CreateIndex
CREATE UNIQUE INDEX "myconcerns_greatfullagain_id_key" ON "myconcerns"("greatfullagain_id");

-- CreateIndex
CREATE UNIQUE INDEX "myquestions_greatfullagain_id_key" ON "myquestions"("greatfullagain_id");

-- CreateIndex
CREATE UNIQUE INDEX "mycriticisms_greatfullagain_id_key" ON "mycriticisms"("greatfullagain_id");

-- CreateIndex
CREATE UNIQUE INDEX "ourhabits_habit_key" ON "ourhabits"("habit");

-- CreateIndex
CREATE UNIQUE INDEX "ourvalues_value_key" ON "ourvalues"("value");

-- CreateIndex
CREATE UNIQUE INDEX "decidedo_id_key" ON "decidedo"("id");

-- CreateIndex
CREATE UNIQUE INDEX "locations_nickname_key" ON "locations"("nickname");

-- CreateIndex
CREATE UNIQUE INDEX "privacy_user_id_key" ON "privacy"("user_id");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_location_id_fkey" FOREIGN KEY ("location_id") REFERENCES "locations"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "days" ADD CONSTRAINT "days_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "days" ADD CONSTRAINT "days_location_id_fkey" FOREIGN KEY ("location_id") REFERENCES "locations"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "days" ADD CONSTRAINT "days_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "thoughts" ADD CONSTRAINT "thoughts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "thoughts" ADD CONSTRAINT "thoughts_day_id_fkey" FOREIGN KEY ("day_id") REFERENCES "days"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "thoughts" ADD CONSTRAINT "thoughts_moment_id_fkey" FOREIGN KEY ("moment_id") REFERENCES "moments"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "thoughts" ADD CONSTRAINT "thoughts_greatfullagain_id_fkey" FOREIGN KEY ("greatfullagain_id") REFERENCES "greatfullagain"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "thoughts" ADD CONSTRAINT "thoughts_location_id_fkey" FOREIGN KEY ("location_id") REFERENCES "locations"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "thoughts" ADD CONSTRAINT "thoughts_suggestion_id_fkey" FOREIGN KEY ("suggestion_id") REFERENCES "suggestions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "thoughts" ADD CONSTRAINT "thoughts_feedgame_id_fkey" FOREIGN KEY ("feedgame_id") REFERENCES "feedgames"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "thoughts" ADD CONSTRAINT "thoughts_parent_thought_id_fkey" FOREIGN KEY ("parent_thought_id") REFERENCES "thoughts"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "moments" ADD CONSTRAINT "moments_day_id_fkey" FOREIGN KEY ("day_id") REFERENCES "days"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fields" ADD CONSTRAINT "fields_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fields" ADD CONSTRAINT "fields_day_id_fkey" FOREIGN KEY ("day_id") REFERENCES "days"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fields" ADD CONSTRAINT "fields_decidedo_id_fkey" FOREIGN KEY ("decidedo_id") REFERENCES "decidedo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "greatfullagain" ADD CONSTRAINT "greatfullagain_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "greatfullagain" ADD CONSTRAINT "greatfullagain_day_id_fkey" FOREIGN KEY ("day_id") REFERENCES "days"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "myconcerns" ADD CONSTRAINT "myconcerns_greatfullagain_id_fkey" FOREIGN KEY ("greatfullagain_id") REFERENCES "greatfullagain"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "myconcerns" ADD CONSTRAINT "myconcerns_ourconcern_id_fkey" FOREIGN KEY ("ourconcern_id") REFERENCES "ourconcerns"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "myquestions" ADD CONSTRAINT "myquestions_greatfullagain_id_fkey" FOREIGN KEY ("greatfullagain_id") REFERENCES "greatfullagain"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "myquestions" ADD CONSTRAINT "myquestions_ourquestion_id_fkey" FOREIGN KEY ("ourquestion_id") REFERENCES "ourquestions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mycriticisms" ADD CONSTRAINT "mycriticisms_greatfullagain_id_fkey" FOREIGN KEY ("greatfullagain_id") REFERENCES "greatfullagain"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mycriticisms" ADD CONSTRAINT "mycriticisms_ourcriticism_id_fkey" FOREIGN KEY ("ourcriticism_id") REFERENCES "ourcriticisms"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "myhabits" ADD CONSTRAINT "myhabits_field_id_fkey" FOREIGN KEY ("field_id") REFERENCES "fields"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "myhabits" ADD CONSTRAINT "myhabits_ourhabit_id_fkey" FOREIGN KEY ("ourhabit_id") REFERENCES "ourhabits"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "myvalues" ADD CONSTRAINT "myvalues_field_id_fkey" FOREIGN KEY ("field_id") REFERENCES "fields"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "myvalues" ADD CONSTRAINT "myvalues_ourvalue_id_fkey" FOREIGN KEY ("ourvalue_id") REFERENCES "ourvalues"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "media" ADD CONSTRAINT "media_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "media" ADD CONSTRAINT "media_day_id_fkey" FOREIGN KEY ("day_id") REFERENCES "days"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "media" ADD CONSTRAINT "media_thought_id_fkey" FOREIGN KEY ("thought_id") REFERENCES "thoughts"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "media" ADD CONSTRAINT "media_moment_id_fkey" FOREIGN KEY ("moment_id") REFERENCES "moments"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "media" ADD CONSTRAINT "media_field_id_fkey" FOREIGN KEY ("field_id") REFERENCES "fields"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "media" ADD CONSTRAINT "media_greatfullagain_id_fkey" FOREIGN KEY ("greatfullagain_id") REFERENCES "greatfullagain"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "listeners" ADD CONSTRAINT "listeners_day_id_fkey" FOREIGN KEY ("day_id") REFERENCES "days"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "listeners" ADD CONSTRAINT "listeners_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "likes" ADD CONSTRAINT "likes_liked_by_id_fkey" FOREIGN KEY ("liked_by_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "likes" ADD CONSTRAINT "likes_day_id_fkey" FOREIGN KEY ("day_id") REFERENCES "days"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "likes" ADD CONSTRAINT "likes_feedgame_id_fkey" FOREIGN KEY ("feedgame_id") REFERENCES "feedgames"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "likes" ADD CONSTRAINT "likes_message_id_fkey" FOREIGN KEY ("message_id") REFERENCES "messages"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "likes" ADD CONSTRAINT "likes_field_id_fkey" FOREIGN KEY ("field_id") REFERENCES "fields"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_from_user_id_fkey" FOREIGN KEY ("from_user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_for_user_id_fkey" FOREIGN KEY ("for_user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_follower_id_fkey" FOREIGN KEY ("follower_id") REFERENCES "followers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_feedgame_id_fkey" FOREIGN KEY ("feedgame_id") REFERENCES "feedgames"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_day_id_fkey" FOREIGN KEY ("day_id") REFERENCES "days"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_thought_id_fkey" FOREIGN KEY ("thought_id") REFERENCES "thoughts"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_moment_id_fkey" FOREIGN KEY ("moment_id") REFERENCES "moments"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_listener_id_fkey" FOREIGN KEY ("listener_id") REFERENCES "listeners"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_share_id_fkey" FOREIGN KEY ("share_id") REFERENCES "shares"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_like_id_fkey" FOREIGN KEY ("like_id") REFERENCES "likes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_star_id_fkey" FOREIGN KEY ("star_id") REFERENCES "stars"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_reaction_id_fkey" FOREIGN KEY ("reaction_id") REFERENCES "reactions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_vibe_id_fkey" FOREIGN KEY ("vibe_id") REFERENCES "vibes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_payment_id_fkey" FOREIGN KEY ("payment_id") REFERENCES "payments"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_prank_id_fkey" FOREIGN KEY ("prank_id") REFERENCES "pranks"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_report_id_fkey" FOREIGN KEY ("report_id") REFERENCES "reportedcontent"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_user_pass_lock_id_fkey" FOREIGN KEY ("user_pass_lock_id") REFERENCES "userpassdaylocks"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_ballot_id_fkey" FOREIGN KEY ("ballot_id") REFERENCES "ballots"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_message_id_fkey" FOREIGN KEY ("message_id") REFERENCES "messages"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "zipcodes" ADD CONSTRAINT "zipcodes_location_id_fkey" FOREIGN KEY ("location_id") REFERENCES "locations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "followers" ADD CONSTRAINT "followers_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "followers" ADD CONSTRAINT "followers_follower_id_fkey" FOREIGN KEY ("follower_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "privacy" ADD CONSTRAINT "privacy_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mods" ADD CONSTRAINT "mods_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blocks" ADD CONSTRAINT "blocks_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blocks" ADD CONSTRAINT "blocks_blocked_id_fkey" FOREIGN KEY ("blocked_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "suggestions" ADD CONSTRAINT "suggestions_suggested_by_fkey" FOREIGN KEY ("suggested_by") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stars" ADD CONSTRAINT "stars_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stars" ADD CONSTRAINT "stars_thought_id_fkey" FOREIGN KEY ("thought_id") REFERENCES "thoughts"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stars" ADD CONSTRAINT "stars_suggestion_id_fkey" FOREIGN KEY ("suggestion_id") REFERENCES "suggestions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stars" ADD CONSTRAINT "stars_message_id_fkey" FOREIGN KEY ("message_id") REFERENCES "messages"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shares" ADD CONSTRAINT "shares_day_id_fkey" FOREIGN KEY ("day_id") REFERENCES "days"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shares" ADD CONSTRAINT "shares_thought_id_fkey" FOREIGN KEY ("thought_id") REFERENCES "thoughts"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shares" ADD CONSTRAINT "shares_field_id_fkey" FOREIGN KEY ("field_id") REFERENCES "fields"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shares" ADD CONSTRAINT "shares_sharer_id_fkey" FOREIGN KEY ("sharer_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reactions" ADD CONSTRAINT "reactions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reactions" ADD CONSTRAINT "reactions_day_id_fkey" FOREIGN KEY ("day_id") REFERENCES "days"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reactions" ADD CONSTRAINT "reactions_feedgame_id_fkey" FOREIGN KEY ("feedgame_id") REFERENCES "feedgames"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reactions" ADD CONSTRAINT "reactions_message_id_fkey" FOREIGN KEY ("message_id") REFERENCES "messages"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payments" ADD CONSTRAINT "payments_from_user_id_fkey" FOREIGN KEY ("from_user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payments" ADD CONSTRAINT "payments_for_user_id_fkey" FOREIGN KEY ("for_user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payments" ADD CONSTRAINT "payments_day_id_fkey" FOREIGN KEY ("day_id") REFERENCES "days"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payments" ADD CONSTRAINT "payments_location_id_fkey" FOREIGN KEY ("location_id") REFERENCES "locations"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pranks" ADD CONSTRAINT "pranks_pranked_by_id_fkey" FOREIGN KEY ("pranked_by_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pranks" ADD CONSTRAINT "pranks_pranked_user_id_fkey" FOREIGN KEY ("pranked_user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pranks" ADD CONSTRAINT "pranks_day_id_fkey" FOREIGN KEY ("day_id") REFERENCES "days"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hashtags" ADD CONSTRAINT "hashtags_location_id_fkey" FOREIGN KEY ("location_id") REFERENCES "locations"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "messages" ADD CONSTRAINT "messages_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "messages" ADD CONSTRAINT "messages_from_id_fkey" FOREIGN KEY ("from_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ballots" ADD CONSTRAINT "ballots_feedgames_id_fkey" FOREIGN KEY ("feedgames_id") REFERENCES "feedgames"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ballots" ADD CONSTRAINT "ballots_day_id_fkey" FOREIGN KEY ("day_id") REFERENCES "days"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ballots" ADD CONSTRAINT "ballots_suggestion_id_fkey" FOREIGN KEY ("suggestion_id") REFERENCES "suggestions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ballots" ADD CONSTRAINT "ballots_ourconcern_id_fkey" FOREIGN KEY ("ourconcern_id") REFERENCES "ourconcerns"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ballots" ADD CONSTRAINT "ballots_ourquestion_id_fkey" FOREIGN KEY ("ourquestion_id") REFERENCES "ourquestions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ballots" ADD CONSTRAINT "ballots_ourcriticism_id_fkey" FOREIGN KEY ("ourcriticism_id") REFERENCES "ourcriticisms"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ballots" ADD CONSTRAINT "ballots_ourhabit_id_fkey" FOREIGN KEY ("ourhabit_id") REFERENCES "ourhabits"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ballots" ADD CONSTRAINT "ballots_ourvalue_id_fkey" FOREIGN KEY ("ourvalue_id") REFERENCES "ourvalues"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ballots" ADD CONSTRAINT "ballots_started_by_id_fkey" FOREIGN KEY ("started_by_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "votes" ADD CONSTRAINT "votes_ballot_id_fkey" FOREIGN KEY ("ballot_id") REFERENCES "ballots"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "algosettings" ADD CONSTRAINT "algosettings_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "algosettings" ADD CONSTRAINT "algosettings_hashtag_id_fkey" FOREIGN KEY ("hashtag_id") REFERENCES "hashtags"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "algosettings" ADD CONSTRAINT "algosettings_location_id_fkey" FOREIGN KEY ("location_id") REFERENCES "locations"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "algosettings" ADD CONSTRAINT "algosettings_concern_id_fkey" FOREIGN KEY ("concern_id") REFERENCES "myconcerns"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "algosettings" ADD CONSTRAINT "algosettings_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "myquestions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "algosettings" ADD CONSTRAINT "algosettings_criticism_id_fkey" FOREIGN KEY ("criticism_id") REFERENCES "mycriticisms"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "algosettings" ADD CONSTRAINT "algosettings_field_id_fkey" FOREIGN KEY ("field_id") REFERENCES "fields"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "algosettings" ADD CONSTRAINT "algosettings_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;
