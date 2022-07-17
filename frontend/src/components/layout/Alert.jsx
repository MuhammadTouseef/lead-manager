import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useAlert} from "@blaumaus/react-alert";
import {errorDisplayed} from "../../actions/error";

function Alert() {
    const alert = useAlert()
    const errors = useSelector((state) => state.error)
    const dispatch = useDispatch()
    if (errors.display) {
        if (errors.msg.name) {
            alert.show(`Name: ${errors.msg.name}`)

        }
        if (errors.msg.email) {
            alert.show(`Email: ${errors.msg.email}`)

        }
        if (errors.msg.message) {
            alert.show(`Message: ${errors.msg.message}`)

        }

        dispatch(errorDisplayed())

    }
    return (<>
    </>);
}

export default Alert;