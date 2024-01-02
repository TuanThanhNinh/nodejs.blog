import Home from "../pages/Home";
import Destination from "../pages/Destination";
import Crew from "../pages/Crew";
import Technology from "../pages/Technology";

export const publicRoutes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "destination",
        component: Destination,
    },
    {
        path: "crew",
        component: Crew,
    },
    {
        path: "technology",
        component: Technology,
    },
];
