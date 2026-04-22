import React from "react";
import {createBrowserRouter} from "react-router";
import EmptyLayout from "../LayOut/EmptyLayout";
import HomePage from "../_Features/HomePage/HomePage.jsx";
import About from "../_Features/About/About.jsx";
import LangList from "../_Features/Language/LangList.jsx";

const router = createBrowserRouter([
    {
        element:<EmptyLayout />,
        children:[
            {path:"/",         element:<HomePage />,     },
            {path:"/About",     element:<About />,     },
            {path:"/Lang",     element:<LangList />,     },
        ]
    },
]);

// import HomeIcon from '@mui/icons-material/Home';
// export const navItems = [
//     { name: 'ראשי'    , path: '/'    , icon: <HomeIcon /> },
// ];

export default router;