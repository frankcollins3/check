import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LoginSliceState {
  EMAIL_INPUT: string;         
  PASSWORD_INPUT: string;         

  EMAIL_INPUT_FOCUSED: boolean;
  PASSWORD_INPUT_FOCUSED: boolean;
  SHOW_PASSWORD_INPUT: boolean;
  LOGIN_MSG: string;
  INCORRECT_LOGIN_ATTEMPTS: number;

  ATTEMPTED_LOGIN_NOT_2F_AUTHED: boolean;
}

const initialState: LoginSliceState = {    
  EMAIL_INPUT: '@',         
  PASSWORD_INPUT: '* * *',         

  EMAIL_INPUT_FOCUSED: false,
  PASSWORD_INPUT_FOCUSED: false,
  SHOW_PASSWORD_INPUT: false,
  LOGIN_MSG: '',
  INCORRECT_LOGIN_ATTEMPTS: 0,  

  ATTEMPTED_LOGIN_NOT_2F_AUTHED: false
};

                                        
const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    SET_EMAIL_INPUT: (state, action) => { state.EMAIL_INPUT = action.payload; },
    SET_PASSWORD_INPUT: (state, action) => { state.PASSWORD_INPUT = action.payload; },    
    
    TOGGLE_EMAIL_INPUT_FOCUSED: (state) => { state.EMAIL_INPUT_FOCUSED = !state.EMAIL_INPUT_FOCUSED },    
    TOGGLE_PASSWORD_INPUT_FOCUSED: (state) => { state.PASSWORD_INPUT_FOCUSED = !state.PASSWORD_INPUT_FOCUSED },    
    TOGGLE_SHOW_PASSWORD_INPUT: (state) => { state.SHOW_PASSWORD_INPUT = !state.SHOW_PASSWORD_INPUT },    
    SET_LOGIN_MSG: (state, action) => { state.LOGIN_MSG = action.payload; }, 
    
    INCREMENT_INCORRECT_LOGIN_ATTEMPTS: (state) => { state.INCORRECT_LOGIN_ATTEMPTS = state.INCORRECT_LOGIN_ATTEMPTS + 1 },
    RESET_INCORRECT_LOGIN_ATTEMPTS: (state) => { state.INCORRECT_LOGIN_ATTEMPTS = 0 },
    TOGGLE_ATTEMPTED_LOGIN_NOT_2F_AUTHED: (state) => { state.ATTEMPTED_LOGIN_NOT_2F_AUTHED = !state.ATTEMPTED_LOGIN_NOT_2F_AUTHED },    
  },
});

export const 
{ 
    SET_EMAIL_INPUT, SET_PASSWORD_INPUT, TOGGLE_EMAIL_INPUT_FOCUSED, TOGGLE_PASSWORD_INPUT_FOCUSED, TOGGLE_SHOW_PASSWORD_INPUT, SET_LOGIN_MSG,
    INCREMENT_INCORRECT_LOGIN_ATTEMPTS, RESET_INCORRECT_LOGIN_ATTEMPTS, TOGGLE_ATTEMPTED_LOGIN_NOT_2F_AUTHED
} = loginSlice.actions;

export default loginSlice.reducer;
export type LoginState = LoginSliceState;
