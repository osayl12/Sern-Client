import React from "react";
import { createBrowserRouter } from "react-router";
import AppLayout from "../LayOut/AppLayout";
import EmptyLayout from "../LayOut/EmptyLayout";
import HomePage from "../_Features/HomePage/HomePage.jsx";
import About from "../_Features/About/About.jsx";
import LangList from "../_Features/Language/LangList.jsx";
import LevelList from "../_Features/Levels/LevelList.jsx";

import LanguageIcon from '@mui/icons-material/Language';
import InfoIcon from '@mui/icons-material/Info';
import HomeIcon from '@mui/icons-material/Home';
import StairsIcon from '@mui/icons-material/Stairs';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/",      element: <HomePage />, handle: { title: "דף ראשי" } },
      { path: "/About", element: <About />,    handle: { title: "אודות" } },
      { path: "/Lang",  element: <LangList />, handle: { title: "שפות" } },
      { path: "/lvl", element: <LevelList />, handle: { title: "רמות" } },
      { path: "*",      element: <EmptyLayout name="404 - דף לא נמצא" />, handle: { title: "404" } },
    ],
  },
]);


   export const navItems=[
    {path:'/',name:'דף הבית',icon: <HomeIcon />},
    {path:'/About',name:'אודות',icon: <InfoIcon />},
    {path:'/Lang',name:'שפות',icon: <LanguageIcon />},
    {path:'/lvl',name:'רמות',icon: <StairsIcon />},
   ]
export default router;
