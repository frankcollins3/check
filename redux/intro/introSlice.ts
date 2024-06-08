import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IntroSliceState {
  VIEW_SELECTED_STRAIN: any;   
  FORM_HOVER: boolean;
  FORGOT_PASSWORD_HOVER: boolean;
  ALL_OURS_JOURNALL_TEXT_TOGGLE: string;
  INTRO_ANIMATION_DONE: number; // changing from bool->num, since it depends on: 1: screen size, 2: 'all ours' animation SO: increment int !toggle
  INTRO_VIEW_FORM: string;
  FOOTER_IS_HOVERED: boolean;
}

const initialState: IntroSliceState = {
    VIEW_SELECTED_STRAIN: {},
    FORM_HOVER: false,
    FORGOT_PASSWORD_HOVER: false,
    ALL_OURS_JOURNALL_TEXT_TOGGLE: '',
    INTRO_ANIMATION_DONE: 0,
    INTRO_VIEW_FORM: 'login',
    FOOTER_IS_HOVERED: false,
};

                                        
const introSlice = createSlice({
  name: 'intro',
  initialState,
  reducers: {
    SET_VIEW_SELECTED_STRAIN: (state, action) => { state.VIEW_SELECTED_STRAIN = action.payload; },
    TOGGLE_FORM_HOVER: (state) => { state.FORM_HOVER = !state.FORM_HOVER },
    TOGGLE_FORGOT_PASSWORD_HOVER: (state) => { state.FORGOT_PASSWORD_HOVER = !state.FORGOT_PASSWORD_HOVER },
    TOGGLE_ALL_OURS_JOURNALL_TEXT_TOGGLE: (state, action) => { state.ALL_OURS_JOURNALL_TEXT_TOGGLE = action.payload },
    INCREMENT_INTRO_ANIMATION_DONE: (state) => { state.INTRO_ANIMATION_DONE = state.INTRO_ANIMATION_DONE + 1 },
    SET_INTRO_VIEW_FORM: (state, action) => { state.INTRO_VIEW_FORM = action.payload },
    
    TOGGLE_FOOTER_IS_HOVERED: (state) => { state.FOOTER_IS_HOVERED = !state.FOOTER_IS_HOVERED },

    // TOGGLE_ALL_OURS_JOURNALL_TEXT_TOGGLE: (state) => { state.ALL_OURS_JOURNALL_TEXT_TOGGLE = !state.ALL_OURS_JOURNALL_TEXT_TOGGLE }    
  },
});

export const 
{ 
  SET_VIEW_SELECTED_STRAIN,
  TOGGLE_FORM_HOVER, TOGGLE_FORGOT_PASSWORD_HOVER,
  TOGGLE_ALL_OURS_JOURNALL_TEXT_TOGGLE, INCREMENT_INTRO_ANIMATION_DONE,
  SET_INTRO_VIEW_FORM
} = introSlice.actions;

export default introSlice.reducer;
export type IntroState = IntroSliceState;
