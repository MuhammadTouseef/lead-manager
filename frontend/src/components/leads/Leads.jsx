import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from "react-redux";
import {delLeads, getLeads} from "../../actions/leads";

Leads.propTypes = {};

function Leads(props) {
    const leads = useSelector((state) => state.leads.leads)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getLeads())
    }, [])

    return (<>
            <h2>Leads</h2>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Message</th>
                    <th/>
                </tr>
                </thead>
                <tbody>
                {leads.map((lead) => (<tr key={lead.id}>
                        <td>{lead.id}</td>
                        <td>{lead.name}</td>
                        <td>{lead.email}</td>
                        <td>{lead.message}</td>
                        <td>
                            <button
                                // onClick={this.props.deleteLead.bind(this, lead.id)}
                                onClick={()=> dispatch(delLeads(lead.id))}
                                className="btn btn-danger btn-sm"
                            >
                                {' '}
                                Delete
                            </button>
                        </td>
                    </tr>))}
                </tbody>
            </table>
        </>);
}

export default Leads;