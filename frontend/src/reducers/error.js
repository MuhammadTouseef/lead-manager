import {ERROR_DISPLAYED, GET_ERRORS} from "../actions/types";

const initialState = {
    msg: {},
    status: null,
    display: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case(GET_ERRORS):
            return {
                msg: action.payload.msg,
                status: action.payload.status,
                display: action.payload.display

            }
        case(ERROR_DISPLAYED):
            return {
                display: action.payload,

            }
        default:
            return {
                ...state
            }
    }

}