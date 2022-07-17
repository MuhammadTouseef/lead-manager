import axios from "axios";
import {ADD_LEADS, DELETE_LEADS, ERROR_DISPLAYED, GET_ERRORS, GET_LEADS} from "./types";
import {type} from "@testing-library/user-event/dist/type";


export const getLeads = () => dispatch => {
    axios.get("/api/leads/").then(
        res => {
            dispatch({
                type: GET_LEADS,
                payload: res.data
            })
        }
    ).catch(err => {
        console.log(err)
    })
}


export const delLeads = (id) => dispatch => {
    axios.delete(`/api/leads/${id}`).then(
        res => {
            dispatch({
                type: DELETE_LEADS,
                payload: id
            })
        }
    ).catch(error => {
        console.log(error)
    })
}


export const addLeads = (lead) => dispatch => {
    axios.post("/api/leads/", lead).then(
        res => {
            dispatch({
                type: ADD_LEADS,
                payload: res.data
            })
        }
    ).catch(err => {
        const error = {
            msg: err.response.data,
            status: err.response.status,
            display: true
        }
        dispatch({
            type:GET_ERRORS,
            payload:error
        }
    )

    })
}


