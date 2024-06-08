 import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SignupSliceState {
  USERNAME_INPUT: string;     
  EMAIL_INPUT: string;
  PASSWORD_INPUT: string;
  // AGE_INPUT: string;
  MM_INPUT: string;
  DD_INPUT: string;
  YYYY_INPUT: string;
  FULL_BDAY: string;

  USERNAME_INPUT_FOCUSED_SIGNUP: boolean;
  EMAIL_INPUT_FOCUSED_SIGNUP: boolean;
  PASSWORD_INPUT_FOCUSED_SIGNUP: boolean;
  AGE_INPUT_FOCUSED_SIGNUP: boolean;
  MM_INPUT_FOCUSED_SIGNUP: boolean;
  DD_INPUT_FOCUSED_SIGNUP: boolean;
  YYYY_INPUT_FOCUSED_SIGNUP: boolean;

  SHOW_PASSWORD_INPUT_SIGNUP: boolean;
  AGE_BDAY_TEXT_BOOL: boolean,

  SIGNUP_MSG: string;
  SIGNUP_STATUS : string;

}

const initialState: SignupSliceState = {    
  USERNAME_INPUT: 'u name',
  EMAIL_INPUT: '@',
  PASSWORD_INPUT: '* * *',
  MM_INPUT: 'mm',   // pink
  DD_INPUT: 'dd',   // blue frosting
  YYYY_INPUT: 'yyyy',  // maybe yellow
  FULL_BDAY: '',
  // AGE_INPUT: 'age',  // AGE_INPUT: '🎂🎂',    
  

  USERNAME_INPUT_FOCUSED_SIGNUP: false,
  EMAIL_INPUT_FOCUSED_SIGNUP: false,
  PASSWORD_INPUT_FOCUSED_SIGNUP: false,
  AGE_INPUT_FOCUSED_SIGNUP: false,
  MM_INPUT_FOCUSED_SIGNUP: false,
  DD_INPUT_FOCUSED_SIGNUP: false,
  YYYY_INPUT_FOCUSED_SIGNUP: false,

  SHOW_PASSWORD_INPUT_SIGNUP: false,
  AGE_BDAY_TEXT_BOOL: false,

  SIGNUP_MSG: '',
  SIGNUP_STATUS: 'not tried'
};

                                        
const signupSlice = createSlice({
  name: 'login',
  initialState,
  reducers: { 
    SET_USERNAME_INPUT_SIGNUP: (state, action) => { state.USERNAME_INPUT = action.payload },
    SET_EMAIL_INPUT_SIGNUP: (state, action) => { state.EMAIL_INPUT = action.payload },
    SET_PASSWORD_INPUT_SIGNUP: (state, action) => { state.PASSWORD_INPUT = action.payload },

    SET_MM_INPUT_SIGNUP: (state, action) => { state.MM_INPUT = action.payload },
    SET_DD_INPUT_SIGNUP: (state, action) => { state.DD_INPUT = action.payload },
    SET_YYYY_INPUT_SIGNUP: (state, action) => { state.YYYY_INPUT = action.payload },
    // SET_AGE_INPUT_SIGNUP: (state, action) => { state.AGE_INPUT = action.payload },
    
    TOGGLE_USERNAME_INPUT_FOCUSED_SIGNUP: (state) => { state.USERNAME_INPUT_FOCUSED_SIGNUP = !state.USERNAME_INPUT_FOCUSED_SIGNUP },
    TOGGLE_EMAIL_INPUT_FOCUSED_SIGNUP: (state) => { state.EMAIL_INPUT_FOCUSED_SIGNUP = !state.EMAIL_INPUT_FOCUSED_SIGNUP },
    TOGGLE_PASSWORD_INPUT_FOCUSED_SIGNUP: (state) => { state.PASSWORD_INPUT_FOCUSED_SIGNUP = !state.PASSWORD_INPUT_FOCUSED_SIGNUP },
    TOGGLE_AGE_INPUT_FOCUSED_SIGNUP: (state) => { state.AGE_INPUT_FOCUSED_SIGNUP = !state.AGE_INPUT_FOCUSED_SIGNUP },
    TOGGLE_MM_INPUT_FOCUSED_SIGNUP: (state) => { state.MM_INPUT_FOCUSED_SIGNUP = !state.MM_INPUT_FOCUSED_SIGNUP },
    TOGGLE_DD_INPUT_FOCUSED_SIGNUP: (state) => { state.DD_INPUT_FOCUSED_SIGNUP = !state.DD_INPUT_FOCUSED_SIGNUP },
    TOGGLE_YYYY_INPUT_FOCUSED_SIGNUP: (state) => { state.YYYY_INPUT_FOCUSED_SIGNUP = !state.YYYY_INPUT_FOCUSED_SIGNUP },
    SET_FULL_BDAY: (state, action) => { state.FULL_BDAY = action.payload },    

    SET_SIGNUP_MSG: (state, action) => { state.SIGNUP_MSG = action.payload },
    
    TOGGLE_SHOW_PASSWORD_INPUT_SIGNUP: (state) => { state.SHOW_PASSWORD_INPUT_SIGNUP = !state.SHOW_PASSWORD_INPUT_SIGNUP },
    TOGGLE_AGE_BDAY_TEXT_BOOL: (state) => { state.AGE_BDAY_TEXT_BOOL = !state.AGE_BDAY_TEXT_BOOL },

    SET_SIGNUP_STATUS: (state, action) => { state.SIGNUP_STATUS = action.payload },
  },
});

export const 
{ 
    SET_USERNAME_INPUT_SIGNUP, SET_EMAIL_INPUT_SIGNUP, SET_PASSWORD_INPUT_SIGNUP, 
    SET_MM_INPUT_SIGNUP, SET_DD_INPUT_SIGNUP, SET_YYYY_INPUT_SIGNUP, SET_FULL_BDAY, // SET_AGE_INPUT_SIGNUP,
    TOGGLE_USERNAME_INPUT_FOCUSED_SIGNUP, TOGGLE_EMAIL_INPUT_FOCUSED_SIGNUP, TOGGLE_PASSWORD_INPUT_FOCUSED_SIGNUP, 
    TOGGLE_AGE_INPUT_FOCUSED_SIGNUP, TOGGLE_MM_INPUT_FOCUSED_SIGNUP, TOGGLE_DD_INPUT_FOCUSED_SIGNUP, TOGGLE_YYYY_INPUT_FOCUSED_SIGNUP,
    TOGGLE_SHOW_PASSWORD_INPUT_SIGNUP, TOGGLE_AGE_BDAY_TEXT_BOOL,
    SET_SIGNUP_MSG, SET_SIGNUP_STATUS
} = signupSlice.actions;

export default signupSlice.reducer;
export type SignupState = SignupSliceState;
