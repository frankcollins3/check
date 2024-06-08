import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AllOrAnySliceState {
  CURRENT_PAGE: string;
  CURRENT_PAGE_WIDTH: number;
  CURRENT_PAGE_HEIGHT: number;

  TRANSLATABLE_MESSAGES: any;
  CURRENT_LOCALE: string;
  CURRENT_LANGUAGE: string;

  ALL_USERS: any
  ALL_USERNAMES: string[];
  ALL_EMAILS: string[];

  LOADING: boolean;

  // might have the app error (i) icon in the toolbar like a CRM
  APP_ERROR: any
  TODAY_IS_WEEKEND: boolean;
  LOCALE: string;
}

const initialState: AllOrAnySliceState = {
  CURRENT_PAGE: '',
  CURRENT_PAGE_WIDTH: 0,
  CURRENT_PAGE_HEIGHT: 0, 

  TRANSLATABLE_MESSAGES: {},
  CURRENT_LOCALE: '',
  CURRENT_LANGUAGE: '',

  ALL_USERS: { 
    id: 0,
     location_id: 0,
     username: 'not logged in', email: '', password: '', birthday: '11-21-1992', joinday: '', last_username_change: '',
     full_name: '', icon: '', cover_photo: '', gender: '', orientation: '', ethnicity: '', role: '', 
     no_ads: false, post_order: '', show_followers: true, 
     avg_likes: 0, avg_comments: 0, daily_scrolling: 0, avg_scrolling: 0, avg_shares: 0, total_posts: 0, total_followers: 0, total_following: 0,
     i_can_trash_u: 0, trash_u_today: 0, trash_me_today: 0, trash_u_30: 0, trash_me_30: 0, total_sessions: 0, sessions_this_year: 0,
     vibe_u_today: 0, last_vibe_gift: 'never', spam_percent: 0, 
     reported_posts_me: 0, sus_start_date: '', has_reported_u: 0, 
     explicit_posts: 0, has_marked_exp: 0, thought_limit: 0, comment_limit: 30, timestamp: '', token: ''
  },
  ALL_USERNAMES: [],
  ALL_EMAILS: [],

  LOADING: false,

  APP_ERROR: { has_error: false, msg: '' },
  TODAY_IS_WEEKEND: false,
  LOCALE: ''
};
                    
const allOrAnySlice = createSlice({
  name: 'allOrAny',
  initialState,
  reducers: {
    // SET_VIEW_SELECTED_STRAIN: (state, action) => { state.VIEW_SELECTED_STRAIN = action.payload; },
    SET_CURRENT_PAGE: (state, action) => { state.CURRENT_PAGE = action.payload; },
    SET_CURRENT_PAGE_WIDTH: (state, action) => { state.CURRENT_PAGE_WIDTH = action.payload; },
    SET_CURRENT_PAGE_HEIGHT: (state, action) => { state.CURRENT_PAGE_HEIGHT = action.payload; },

    SET_TRANSLATABLE_MESSAGES: (state, action) => { state.TRANSLATABLE_MESSAGES = action.payload; },
    SET_CURRENT_LOCALE: (state, action) => { state.CURRENT_LOCALE = action.payload; },
    SET_CURRENT_LANGUAGE: (state, action) => { state.CURRENT_LANGUAGE = action.payload; },

    SET_ALL_USERS: (state, action) => { state.ALL_USERS = action.payload; },
    SET_ALL_USERNAMES: (state, action) => { state.ALL_USERNAMES = action.payload; },
    SET_ALL_EMAILS: (state, action) => { state.ALL_EMAILS = action.payload; },    
  
    TOGGLE_LOADING: (state) => { state.LOADING = !state.LOADING },
    SET_APP_ERROR: (state, action) => { state.APP_ERROR = action.payload; },    
    TOGGLE_TODAY_IS_WEEKEND: (state, action) => { state.TODAY_IS_WEEKEND = !state.TODAY_IS_WEEKEND},
    SET_LOCALE: (state, action) => { state.LOCALE = action.payload; },    
  },
});

export const 
{ 
    SET_CURRENT_PAGE, SET_CURRENT_PAGE_HEIGHT, SET_CURRENT_PAGE_WIDTH, 
    SET_TRANSLATABLE_MESSAGES, SET_CURRENT_LOCALE, SET_CURRENT_LANGUAGE, 
    SET_ALL_USERS, SET_ALL_USERNAMES, SET_ALL_EMAILS,
    TOGGLE_LOADING, SET_APP_ERROR, TOGGLE_TODAY_IS_WEEKEND,
    SET_LOCALE
    
} = allOrAnySlice.actions;

export default allOrAnySlice.reducer;
export type AllOrAnyState = AllOrAnySliceState;
