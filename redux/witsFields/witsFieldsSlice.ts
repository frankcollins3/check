import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { userINTERFACE, cookieTokenINTERFACE, dayINTERFACE, messageINTERFACE } from 'Interface/InterfaceTypes';

interface witsFieldsSliceState {
  CURR_USER_HAS_RECENT_POST: boolean;
  CURR_USER_RECENT_POST: any;

  CURR_USER_RECENT_POST_THOUGHTS_BIN: any[]
  CONT_HOVER: string;
  OLD_POST_REWRITE_CLICK_1: boolean;
  OLD_POST_REWRITE_CLICK_2: boolean;
  OLD_POST_FINAL_ARE_U_SURE: boolean;
  NEW_POST_CLICK: boolean,

  COPY_FIELDS_CONFIRMATION_MSG: messageINTERFACE;
}

const initialState: witsFieldsSliceState = {
  CURR_USER_HAS_RECENT_POST: false,

  CURR_USER_RECENT_POST: {
    id: 0, user_id: 0, location_id: 0, category_id: 0, 
    title: 'no title', caption: 'no caption', 
    non_anonymous: 'no', thoughts_ok: 'no', shareable: 'no', downloadable: 'no', 
    show_views_ok: false, show_time_ok: false, public_likes: false, rlly_like_ok: false, rlly_like_group: false,
    is_reported: false, feedface: 'error', is_in_trash: false, trash_tally: 0, date: 'dd-mm-yyyy', 
    lock: 'none', unlock: 'none', sus_content: 'none'
  },
  CURR_USER_RECENT_POST_THOUGHTS_BIN: [],
  CONT_HOVER: '',
  OLD_POST_REWRITE_CLICK_1: false,
  OLD_POST_REWRITE_CLICK_2: false,
  OLD_POST_FINAL_ARE_U_SURE: false,
  NEW_POST_CLICK: false,

  COPY_FIELDS_CONFIRMATION_MSG: { msg: '', error: false },
};
                    
const witsFieldsSlice = createSlice({
  name: 'witsFields',
  initialState,
  reducers: {
    // SET_VIEW_SELECTED_STRAIN: (state, action) => { state.VIEW_SELECTED_STRAIN = action.payload; },
    TOGGLE_CURR_USER_HAS_RECENT_POST: (state) => { state.CURR_USER_HAS_RECENT_POST = !state.CURR_USER_HAS_RECENT_POST },    
    SET_CURR_USER_RECENT_POST: (state, action) => { state.CURR_USER_RECENT_POST = action.payload },
    SET_CURR_USER_RECENT_POST_THOUGHTS_BIN: (state, action) => { state.CURR_USER_RECENT_POST_THOUGHTS_BIN = action.payload },
    
    SET_CONT_HOVER: (state, action) => { state.CONT_HOVER = action.payload },
    
    TOGGLE_OLD_POST_REWRITE_CLICK_1: (state) => { state.OLD_POST_REWRITE_CLICK_1 = !state.OLD_POST_REWRITE_CLICK_1 },    
    TOGGLE_OLD_POST_REWRITE_CLICK_2: (state) => { state.OLD_POST_REWRITE_CLICK_2 = !state.OLD_POST_REWRITE_CLICK_2 },    
    TOGGLE_OLD_POST_FINAL_ARE_U_SURE: (state) => { state.OLD_POST_FINAL_ARE_U_SURE = !state.OLD_POST_FINAL_ARE_U_SURE },    
    TOGGLE_NEW_POST_CLICK: (state) => { state.NEW_POST_CLICK = !state.NEW_POST_CLICK },    
    
    SET_COPY_FIELDS_CONFIRMATION_MSG: (state, action) => { state.COPY_FIELDS_CONFIRMATION_MSG = action.payload },    
  },
});

export const 
{ 
    TOGGLE_CURR_USER_HAS_RECENT_POST, SET_CURR_USER_RECENT_POST, SET_CURR_USER_RECENT_POST_THOUGHTS_BIN, SET_CONT_HOVER,
    TOGGLE_OLD_POST_REWRITE_CLICK_1, TOGGLE_OLD_POST_REWRITE_CLICK_2, TOGGLE_OLD_POST_FINAL_ARE_U_SURE,
    TOGGLE_NEW_POST_CLICK, SET_COPY_FIELDS_CONFIRMATION_MSG
} = witsFieldsSlice.actions;

export default witsFieldsSlice.reducer;
export type witsFieldsState = witsFieldsSliceState;
