import React from "react";
import { createBrowserRouter } from "react-router";
import EmptyLayout from "../LayOut/EmptyLayout";
import HomePage from "../_Features/HomePage/HomePage.jsx";
import About from "../_Features/About/About.jsx";
import LangList from "../_Features/Language/LangList.js";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import LanguageIcon from "@mui/icons-material/Language";

export const navItems = [
  { text: "דף ראשי", path: "/",      icon: <HomeIcon /> },
  { text: "אודות",   path: "/About", icon: <InfoIcon /> },
  { text: "שפות",    path: "/Lang",  icon: <LanguageIcon /> },
];

const router = createBrowserRouter([
  {
    element: <EmptyLayout />,
    children: [
      { path: "/",      element: <HomePage /> },
      { path: "/About", element: <About /> },
      { path: "/Lang",  element: <LangList /> },
    ],
  },
]);

export default router;
