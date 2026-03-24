import React from 'react';
import {Outlet} from "react-router-dom";

function EmptyLayout(props) {
    return (
        <>
            <h3>זה משהו שנראה בראש כל אחד מהעמודים
                {props.name}
            </h3>
            <Outlet />
        </>
    );
}

export default EmptyLayout;