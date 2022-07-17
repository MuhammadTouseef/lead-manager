import React from 'react';
import PropTypes from 'prop-types';
import Form from "./Form";
import Leads from "./Leads";

Dashboard.propTypes = {
    
};

function Dashboard(props) {
    return (
        <div>
            <Form/>
            <Leads/>
        </div>
    );
}

export default Dashboard;