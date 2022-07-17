import {ERROR_DISPLAYED} from "./types";

export const errorDisplayed = ()=> dispatch =>{
    dispatch({
        type:ERROR_DISPLAYED,
        payload: false
    })
}