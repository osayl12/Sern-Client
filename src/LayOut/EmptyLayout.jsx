import React from 'react';
import {Outlet} from "react-router";

function EmptyLayout(props) {
    return (
        <>
            <h3>{props.name}</h3>
            <Outlet />
        </>
    );
}

export default EmptyLayout;