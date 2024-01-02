import { createContext, useContext, useState } from "react";

const NavDrawerContext = createContext();

export const NavDrawerContextProvide = ({ children }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const openDrawerHandle = () => setDrawerOpen(true);
    const closeDrawerHandle = () => setDrawerOpen(false);

    return (
        <NavDrawerContext.Provider
            value={{ drawerOpen, openDrawerHandle, closeDrawerHandle }}
        >
            {children}
        </NavDrawerContext.Provider>
    );
};

export const useNavDrawerContext = () => useContext(NavDrawerContext);
