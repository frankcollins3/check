// @reduxjs/toolkit
import {RootState} from "redux/store/rootReducer"
import {useSelector, useDispatch} from "react-redux"
import { SET_MM_INPUT_SIGNUP, SET_DD_INPUT_SIGNUP, SET_YYYY_INPUT_SIGNUP } from "redux/signup/signupSlice"

// components and styling
import Container from "react-bootstrap/Container"
import styles from "components/LoginSignup/LoginSignupForm/LoginSignupForm.module.scss"

// utility 
import { useIntroFunction } from "Contexts/IntroFunctions"
import { nothing } from "utility/utilityValues"

export default function SignupAgeMMDDYYYY(props:any) {
    return (
        <RENDER inputType={props.inputType}/>
    )
}

function RENDER(props:any) {
    const inputType = props.inputType
    const dispatch = useDispatch()

    const { clearValueOnFocus } = useIntroFunction()

    const MM_INPUT = useSelector( (state:RootState) => state.signup.MM_INPUT);
    const DD_INPUT = useSelector( (state:RootState) => state.signup.DD_INPUT);
    const YYYY_INPUT = useSelector( (state:RootState) => state.signup.YYYY_INPUT);

    const onChangeHandler = (event:any) => {
        console.log('event', event)
    // const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const id:string = event.target.id
        const value:string = event.target.value; 
        const keycode:string = event.keyCode

         // Validate input to allow only numbers
        const isNumeric = /^[0-9]*$/;
        if (!isNumeric.test(value)) {
            // If the input is not a number, prevent the change
            event.preventDefault();
            return;
        }

        if (inputType === "mmSignup") dispatch(SET_MM_INPUT_SIGNUP(keycode))       
        // if (inputType === "mmSignup") dispatch(SET_MM_INPUT_SIGNUP(value))       

        if (inputType === "ddSignup") dispatch(SET_DD_INPUT_SIGNUP(value))       
        if (inputType === "yyyySignup") dispatch(SET_YYYY_INPUT_SIGNUP(value))       
    }


    return (
        <>
            <input 
            maxLength={3}
            id={inputType}
            className={styles.mmddyyyyInput}
            value={inputType === "mmSignup" ? MM_INPUT : inputType === "ddSignup" ? DD_INPUT : inputType === "yyyySignup" ? YYYY_INPUT : ""}
            onChange={onChangeHandler}
            // onKeyDown={onChangeHandler}      // onChange={nothing}
            onFocus={() => clearValueOnFocus(inputType)}
            // style={{ maxWidth: 'fit-content' }}
            style={{ maxWidth: '25px' }}
            />


        {/* from non-dynamic UI attempt. but then signupAge clears all 3 birthdate inputs instead of 'mm', 'dd', 1 per time. */}
            {/* <input 
            id="dd"
            />

            <input 
            id="yyyy"
            className={styles.mmddyyyyInput}
            value={YYYY_INPUT}
            onChange={onChangeHandler}
            onFocus={() => clearValueOnFocus(inputType)}
            style={{ maxWidth: '50px' }}
            /> */}
        </>
    )
