import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DaySliceState {
  //                    NEED INTERFACES BEFORE PROCEEDING THROUGH THE APP & unit tests once reading post is fully done with locks & votes.

    // MOMENTS_BIN[]  SOUNDWAVE_BIN[]     ... or MEDIA_BIN[]
    //    CURRENT_MOMENT_MEDIA_TYPE:        if media type === image then the component will show image, if audio/video show those. 

    CURR_DAY: any;  // dayInterface
    CURR_DAY_ID: number;
    ARE_WE_FRIENDS: boolean;
    CURR_DAY_MOMENT: any 

    CURR_DAY_THOUGHTS: any;
    CURR_DAY_COMMENTS: any;
    THOUGHTS_BIN: any[];
    THOUGHTS_BIN_INDEX: number;

    MOMENTS_BIN: any[];
    MOMENTS_BIN_INDEX: number;
    CAPTIONS_BIN: any[];
    CAPTIONS_BIN_INDEX: number;
    PHOTOS_BIN: any[];
    PHOTOS_BIN_INDEX: number;
    CURR_DAY_FIELDS: any;
    CURR_DAY_GREATFULL: any;
    CURR_DAY_IS_3_WORDS: boolean;
    CURR_DAY_NON_ANONYMOUS_TO_ME: any;

    ALL_PHOTOS_SEEN: boolean;
    ALL_COMMENTS_SEEN: boolean;

    CURR_DAY_SELECTION: string;
    PREVIOUS_DAY_SELECTION: string;
    CURR_DAY_USER_PROFILE_IMG: string,
    // CURR_DAY being the posting-user's dayData... that the scrolling user would be currently looking at.
    // CURR_DAY_IS_PRIVATE: boolean;  // cuz algo will check for private, such posts would not make it to the feed but if so CURRENT_POST_ID + 1
    CURR_DAY_HAS_THOUGHTS: boolean;
    CURR_DAY_HAS_MOMENTS: boolean;
    CURR_DAY_HAS_FIELDS: boolean;
    CURR_DAY_HAS_GREATFULL: boolean;
    CURR_DAY_HAS_MEDIA: boolean;
    CURR_DAY_HAS_CATEGORY: boolean;
    CURR_DAY_HAS_BALLOT: boolean;

    CURR_DAY_HAS_LOCK: boolean;
    CURR_DAY_USERS_PASS_LOCKS: any[],  // number being ID 
    DOES_CURR_USER_PASS_LOCK: boolean;
    // might allow determinatino from posting-user as opposed to some algo that checks: [activity,other_factors] and allows yes|no trashing
    CURR_DAY_USER_PRIVACY: any;
    CURR_DAY_USERS_CAN_TRASH: string;
    DO_WE_FOLLOW_EACH_OTHER: {}
    DO_WE_BLOCK_EACH_OTHER: {}
    // DO_WE_FOLLOW_EACH_OTHER: 
    
    
    BOTTOM_BAR_SELECTION: string;
    CURR_DAY_IS_CHECKED: boolean;
    SCROLL_COUNT: number;     // if things work out & need ads lol. but if not then might do a similar recommended users system ever x scrolls.
    
    FIELDS_CONSTANTSEE_CLICK: boolean;
    FIELDS_CONSTANTSEE_TEXT: any;   // was going to be string with the creation of a new string array but using any instead.
    FIELDS_CONSTANTSEE_INDEX: number;
    
    GREATFULL_ZOOM_IN_OUT_CLICK: string;
    
    // ! commentSlice.ts, thought it through, admittedly downPatterning from true point of:       redux slices. 
    CURR_DAY_COMMENTING_USERS_PROFILE_ICON_BIN: any[];
// CURR_DAY_COMMENTING_USERS_PROFILE_ICON_BIN: usernameIdIconINTERFACE[];
    CURR_DAY_COMMMENTING_USERS_SHOW_CHILD_COMMENTS_BIN: boolean[];
    
    // make the interface as well:
    CURR_DAY_STARS: any[];
    // CURR_DAY_STARS: starsINTERFACE[];
    
    CURR_DAY_STAR_IS_CLICKED_BIN: boolean[];
    CURR_DAY_STAR_CLICKED_INDEX_BIN: boolean[];
    
    CURR_DAY_QUESTION_IS_CLICKED: boolean;
    CURR_DAY_COMMENTING_STARS_QUESTION_CLICK_BIN: boolean[];    
    CURR_DAY_CURR_PARENT_THOUGHT: any,
    CURR_DAY_CURR_COMMENT: any;
    
    
    // { CURR_DAY_COMMMENTING_USERS_SHOW_CHILD_COMMENTS_BIN[index] === true && 
    

    // CURR_DAY_HAS_THOUGHTS: boolean

}

const initialState: DaySliceState = {
    CURR_DAY: {},
    CURR_DAY_ID: 0,
    ARE_WE_FRIENDS: false,
    CURR_DAY_MOMENT: {},
    CURR_DAY_THOUGHTS: {},
    CURR_DAY_COMMENTS: [],
    THOUGHTS_BIN: [],
    THOUGHTS_BIN_INDEX: 0,
    MOMENTS_BIN: [],
    MOMENTS_BIN_INDEX: 0,    
    PHOTOS_BIN: [],
    PHOTOS_BIN_INDEX: 0,
    CAPTIONS_BIN: [],     
    CAPTIONS_BIN_INDEX: 0,
    CURR_DAY_FIELDS: {},
    CURR_DAY_GREATFULL: {},     // has to have id 
    CURR_DAY_IS_3_WORDS: false,

    // ALL_POST_SEEN      probably needs:             POST_CONTENT: [thoughts,fields,greatful,moments] --> HAS_SEEN_CONTENT: [1 + 1] if HAS_SEEN_CONTENT == POST_CONTENT.length 
    ALL_PHOTOS_SEEN: false,
    ALL_COMMENTS_SEEN: false,

    CURR_DAY_SELECTION: '',
    PREVIOUS_DAY_SELECTION: '',    
    CURR_DAY_USER_PROFILE_IMG: '',
    // CURR_DAY_IS_PRIVATE: boolean;  // cuz algo will check for private, such posts would not make it to the feed but if so CURRENT_POST_ID + 1
    CURR_DAY_HAS_THOUGHTS: false,
    CURR_DAY_HAS_MOMENTS: false,
    CURR_DAY_HAS_FIELDS: false,
    CURR_DAY_HAS_GREATFULL: false,
    CURR_DAY_HAS_MEDIA: false,
    CURR_DAY_USERS_CAN_TRASH: '',
    CURR_DAY_HAS_BALLOT: false,
    CURR_DAY_HAS_CATEGORY: false,
    CURR_DAY_USER_PRIVACY: '',
    CURR_DAY_HAS_LOCK: false,
    CURR_DAY_USERS_PASS_LOCKS: [],
    DOES_CURR_USER_PASS_LOCK: false,

    DO_WE_FOLLOW_EACH_OTHER: { iFollowThem: false, theyFollowMe: false },
    DO_WE_BLOCK_EACH_OTHER: { iBlockThem: false, theyBlockMe: false },
    CURR_DAY_NON_ANONYMOUS_TO_ME: '',
    CURR_DAY_CURR_PARENT_THOUGHT: {},
    
    BOTTOM_BAR_SELECTION: '',
    CURR_DAY_IS_CHECKED: false,
    SCROLL_COUNT: 0,
    
    FIELDS_CONSTANTSEE_CLICK: false,
    FIELDS_CONSTANTSEE_TEXT: '',
    FIELDS_CONSTANTSEE_INDEX: 0,
    GREATFULL_ZOOM_IN_OUT_CLICK: '',

    CURR_DAY_STARS: [],
    CURR_DAY_STAR_IS_CLICKED_BIN: [],
    CURR_DAY_STAR_CLICKED_INDEX_BIN: [],
    
    CURR_DAY_COMMENTING_USERS_PROFILE_ICON_BIN: [],
    CURR_DAY_COMMMENTING_USERS_SHOW_CHILD_COMMENTS_BIN: [],

    CURR_DAY_QUESTION_IS_CLICKED: false,
    CURR_DAY_COMMENTING_STARS_QUESTION_CLICK_BIN: [],
    CURR_DAY_CURR_COMMENT: {
        id: 0, user_id: 0, username: '', user_profile_icon: '', 
        day_id: null, location_id: null, moment_id: null, greatfullagain_id: null, 
        suggestion_id: null, feedgame_id: null, meme_id: null, 
        title: null, thought: null, thoughts: null, date: '',
        non_anonymous: '', starrable: '', thoughts_ok: '', comment_icon: '',
        is_voice: false, is_video: false,
        stars_show_avg: false, stars_show_users: false,
        blank_thoughts_ok: false, blank_thoughts_username: null,
        downloadable: '', explicit: false, 
        is_reported: false, is_in_trash: false, trash_tally: 0, 
        on_profile: '',
        parent_thought_id: null, sus_content:  null, 
    }
};
                    
const daySlice = createSlice({
  name: 'day',
  initialState,
  reducers: {
    
      SET_CURR_DAY: (state, action) => { state.CURR_DAY = action.payload, state.CURR_DAY_ID = action?.payload?.id },

      // SET_CURR_DAY_ID: (state, action) => { state.CURR_DAY_ID = action.payload; },
      TOGGLE_ARE_WE_FRIENDS: (state) => { state.ARE_WE_FRIENDS = !state.ARE_WE_FRIENDS },
      SET_CURR_DAY_MOMENT: (state, action) => { state.CURR_DAY_MOMENT = action.payload; },
      SET_CURR_DAY_THOUGHTS: (state, action) => { state.CURR_DAY_THOUGHTS = action.payload; },
      SET_CURR_DAY_COMMENTS: (state, action) => { state.CURR_DAY_COMMENTS = action.payload; },
      SET_CURR_DAY_FIELDS: (state, action) => { state.CURR_DAY_FIELDS = action.payload; },
      UPDATE_FIELDS_CHECKBOX: (state, action) => { state.CURR_DAY_FIELDS.checkbox = action.payload; },
      SET_CURR_DAY_GREATFULL: (state, action) => { state.CURR_DAY_GREATFULL = action.payload; },
      TOGGLE_CURR_DAY_IS_3_WORDS: (state) => { state.CURR_DAY_IS_3_WORDS = !state.CURR_DAY_IS_3_WORDS },

      TOGGLE_ALL_PHOTOS_SEEN: (state) => { state.ALL_PHOTOS_SEEN = !state.ALL_PHOTOS_SEEN },
      TOGGLE_ALL_COMMENTS_SEEN: (state) => { state.ALL_COMMENTS_SEEN = !state.ALL_COMMENTS_SEEN },

      SET_CURR_DAY_SELECTION: (state, action) => { state.CURR_DAY_SELECTION = action.payload },
      SET_PREVIOUS_DAY_SELECTION: (state, action) => { state.PREVIOUS_DAY_SELECTION = action.payload },
      SET_CURR_DAY_USER_PROFILE_IMG: (state, action) => { state.CURR_DAY_USER_PROFILE_IMG = action.payload },

      TOGGLE_CURR_DAY_HAS_THOUGHTS: (state) => { state.CURR_DAY_HAS_THOUGHTS = !state.CURR_DAY_HAS_THOUGHTS },
      TOGGLE_CURR_DAY_HAS_MOMENTS: (state) => { state.CURR_DAY_HAS_MOMENTS = !state.CURR_DAY_HAS_MOMENTS },
      TOGGLE_CURR_DAY_HAS_FIELDS: (state) => { state.CURR_DAY_HAS_FIELDS = !state.CURR_DAY_HAS_FIELDS },
      TOGGLE_CURR_DAY_HAS_GREATFULL: (state) => { state.CURR_DAY_HAS_GREATFULL = !state.CURR_DAY_HAS_GREATFULL },
      TOGGLE_CURR_DAY_HAS_MEDIA: (state) => { state.CURR_DAY_HAS_MEDIA = !state.CURR_DAY_HAS_MEDIA },
      TOGGLE_CURR_DAY_HAS_LOCK: (state) => { state.CURR_DAY_HAS_LOCK = !state.CURR_DAY_HAS_LOCK },
      SET_CURR_DAY_USERS_PASS_LOCKS: (state, action) => { state.CURR_DAY_USERS_PASS_LOCKS = action.payload },
      SET_CURR_DAY_USERS_CAN_TRASH: (state, action) => { state.CURR_DAY_USERS_CAN_TRASH = action.payload },
      TOGGLE_DOES_CURR_USER_PASS_LOCK: (state) => { state.DOES_CURR_USER_PASS_LOCK = !state.DOES_CURR_USER_PASS_LOCK },      
      
      TOGGLE_CURR_DAY_HAS_BALLOT: (state) => { state.CURR_DAY_HAS_BALLOT = !state.CURR_DAY_HAS_BALLOT },
      SET_CURR_DAY_USER_PRIVACY: (state, action) => { state.CURR_DAY_USER_PRIVACY = action.payload },      
      SET_CURR_DAY_CURR_PARENT_THOUGHT: (state, action) => { state.CURR_DAY_CURR_PARENT_THOUGHT = action.payload },            
      SET_DO_WE_FOLLOW_EACH_OTHER: (state, action) => { state.DO_WE_FOLLOW_EACH_OTHER = action.payload },      
      SET_DO_WE_BLOCK_EACH_OTHER: (state, action) => { state.DO_WE_BLOCK_EACH_OTHER = action.payload },    
      SET_CURR_DAY_NON_ANONYMOUS_TO_ME: (state, action) => { state.CURR_DAY_NON_ANONYMOUS_TO_ME = action.payload },    
      
      SET_BOTTOM_BAR_SELECTION: (state, action) => { state.BOTTOM_BAR_SELECTION = action.payload },
      
      SET_THOUGHTS_BIN: (state, action) => { state.THOUGHTS_BIN = action.payload },
      INCREMENT_THOUGHTS_BIN_INDEX: (state) => { state.THOUGHTS_BIN_INDEX = state.THOUGHTS_BIN_INDEX + 1 },
      DECREMENT_THOUGHTS_BIN_INDEX: (state) => { state.THOUGHTS_BIN_INDEX = state.THOUGHTS_BIN_INDEX - 1 },
      DETERMINE_THOUGHTS_BIN_INDEX: (state, action) => { state.THOUGHTS_BIN_INDEX = action.payload },
      
      SET_CAPTIONS_BIN: (state, action) => { state.CAPTIONS_BIN = action.payload },
      INCREMENT_CAPTIONS_BIN_INDEX: (state) => { state.CAPTIONS_BIN_INDEX = state.CAPTIONS_BIN_INDEX + 1 },
      DECREMENT_CAPTIONS_BIN_INDEX: (state) => { state.CAPTIONS_BIN_INDEX = state.CAPTIONS_BIN_INDEX - 1 },
      DETERMINE_CAPTIONS_BIN_INDEX: (state, action) => { state.CAPTIONS_BIN_INDEX = action.payload },
      
      SET_MOMENTS_BIN: (state, action) => { state.MOMENTS_BIN = action.payload },
      INCREMENT_MOMENTS_BIN_INDEX: (state) => { state.MOMENTS_BIN_INDEX = state.MOMENTS_BIN_INDEX + 1 },
      DECREMENT_MOMENTS_BIN_INDEX: (state) => { state.MOMENTS_BIN_INDEX = state.MOMENTS_BIN_INDEX - 1 },
      DETERMINE_MOMENTS_BIN_INDEX: (state, action) => { state.MOMENTS_BIN_INDEX = action.payload },
      SET_PHOTOS_BIN: (state, action) => { state.PHOTOS_BIN = action.payload },
      INCREMENT_PHOTOS_BIN_INDEX: (state) => { state.PHOTOS_BIN_INDEX = state.PHOTOS_BIN_INDEX + 1 },
      DECREMENT_PHOTOS_BIN_INDEX: (state) => { state.PHOTOS_BIN_INDEX = state.PHOTOS_BIN_INDEX - 1 },
      DETERMINE_PHOTOS_BIN_INDEX: (state, action) => { state.PHOTOS_BIN_INDEX = action.payload },
      
      TOGGLE_CURR_DAY_IS_CHECKED: (state) => { state.CURR_DAY_IS_CHECKED = !state.CURR_DAY_IS_CHECKED },
      
      INCREMENT_SCROLL_COUNT: (state) => { state.SCROLL_COUNT = state.SCROLL_COUNT + 1 },
      DECREMENT_SCROLL_COUNT: (state) => { state.SCROLL_COUNT = state.SCROLL_COUNT - 1 },
      RESET_SCROLL_COUNT: (state) => { state.SCROLL_COUNT = 0 },
      
      TOGGLE_FIELDS_CONSTANTSEE_CLICK: (state) => { state.FIELDS_CONSTANTSEE_CLICK = !state.FIELDS_CONSTANTSEE_CLICK },
      SET_FIELDS_CONSTANTSEE_TEXT: (state, action) => { state.FIELDS_CONSTANTSEE_TEXT =  action.payload },
      SET_FIELDS_CONSTANTSEE_INDEX: (state, action) => { state.FIELDS_CONSTANTSEE_INDEX =  action.payload },
      
      SET_GREATFULL_ZOOM_IN_OUT_CLICK: (state, action) => { state.GREATFULL_ZOOM_IN_OUT_CLICK = action.payload },
      
      SET_CURR_DAY_COMMENTING_USERS_PROFILE_ICON_BIN: (state, action) => { state.CURR_DAY_COMMENTING_USERS_PROFILE_ICON_BIN = action.payload },      
      SET_CURR_DAY_COMMMENTING_USERS_SHOW_CHILD_COMMENTS_BIN: (state, action) => { state.CURR_DAY_COMMMENTING_USERS_SHOW_CHILD_COMMENTS_BIN = action.payload },      


      SET_CURR_DAY_STARS: (state, action) => { state.CURR_DAY_STARS = action.payload },
      SET_CURR_DAY_STAR_IS_CLICKED_BIN: (state, action) => { state.CURR_DAY_STAR_IS_CLICKED_BIN = action.payload },
      SET_CURR_DAY_STAR_CLICKED_INDEX_BIN: (state, action) => { state.CURR_DAY_STAR_CLICKED_INDEX_BIN = action.payload },      
      SET_CURR_DAY_CURR_COMMENT: (state, action) => { state.CURR_DAY_CURR_COMMENT = action.payload },      
      
      TOGGLE_CURR_DAY_QUESTION_IS_CLICKED: (state) => { state.CURR_DAY_QUESTION_IS_CLICKED = !state.CURR_DAY_QUESTION_IS_CLICKED },          
      SET_CURR_DAY_COMMENTING_STARS_QUESTION_CLICK_BIN: (state, action) => { state.CURR_DAY_COMMENTING_STARS_QUESTION_CLICK_BIN = action.payload },      
  },
});

export const 
{ 
    SET_CURR_DAY, 
    TOGGLE_ARE_WE_FRIENDS,
    SET_CURR_DAY_MOMENT, SET_CURR_DAY_THOUGHTS, SET_CURR_DAY_FIELDS, UPDATE_FIELDS_CHECKBOX, SET_CURR_DAY_GREATFULL,
    SET_CURR_DAY_COMMENTS, TOGGLE_CURR_DAY_IS_3_WORDS,
    TOGGLE_ALL_PHOTOS_SEEN, TOGGLE_ALL_COMMENTS_SEEN,

    SET_CURR_DAY_SELECTION, SET_PREVIOUS_DAY_SELECTION, SET_CURR_DAY_USER_PROFILE_IMG,
    
    TOGGLE_CURR_DAY_HAS_THOUGHTS, TOGGLE_CURR_DAY_HAS_MOMENTS, TOGGLE_CURR_DAY_HAS_FIELDS, TOGGLE_CURR_DAY_HAS_GREATFULL,
    TOGGLE_CURR_DAY_HAS_MEDIA, TOGGLE_CURR_DAY_HAS_LOCK, SET_CURR_DAY_USERS_PASS_LOCKS, TOGGLE_DOES_CURR_USER_PASS_LOCK,
    SET_CURR_DAY_USERS_CAN_TRASH,
    TOGGLE_CURR_DAY_HAS_BALLOT, SET_CURR_DAY_USER_PRIVACY, 
    SET_DO_WE_FOLLOW_EACH_OTHER, SET_DO_WE_BLOCK_EACH_OTHER, SET_CURR_DAY_NON_ANONYMOUS_TO_ME,
    
    SET_BOTTOM_BAR_SELECTION,
    SET_THOUGHTS_BIN, INCREMENT_THOUGHTS_BIN_INDEX, DECREMENT_THOUGHTS_BIN_INDEX, DETERMINE_THOUGHTS_BIN_INDEX,
    
    SET_CAPTIONS_BIN, INCREMENT_CAPTIONS_BIN_INDEX, DECREMENT_CAPTIONS_BIN_INDEX, DETERMINE_CAPTIONS_BIN_INDEX,
    SET_PHOTOS_BIN, INCREMENT_PHOTOS_BIN_INDEX, DECREMENT_PHOTOS_BIN_INDEX, DETERMINE_PHOTOS_BIN_INDEX,
    TOGGLE_CURR_DAY_IS_CHECKED,
    SET_MOMENTS_BIN, INCREMENT_MOMENTS_BIN_INDEX, DECREMENT_MOMENTS_BIN_INDEX, DETERMINE_MOMENTS_BIN_INDEX,
    
    TOGGLE_FIELDS_CONSTANTSEE_CLICK, SET_FIELDS_CONSTANTSEE_TEXT, SET_FIELDS_CONSTANTSEE_INDEX,
    
    SET_GREATFULL_ZOOM_IN_OUT_CLICK,

    // COMMENTING state:
    SET_CURR_DAY_COMMENTING_USERS_PROFILE_ICON_BIN, SET_CURR_DAY_COMMMENTING_USERS_SHOW_CHILD_COMMENTS_BIN, 
    SET_CURR_DAY_CURR_PARENT_THOUGHT, 

    SET_CURR_DAY_STARS,
    SET_CURR_DAY_STAR_IS_CLICKED_BIN, SET_CURR_DAY_STAR_CLICKED_INDEX_BIN,
    
    TOGGLE_CURR_DAY_QUESTION_IS_CLICKED,
    SET_CURR_DAY_COMMENTING_STARS_QUESTION_CLICK_BIN, SET_CURR_DAY_CURR_COMMENT

} = daySlice.actions;

export default daySlice.reducer;
export type DayState = DaySliceState;
