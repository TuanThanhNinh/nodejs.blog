import styles from "./Layout.module.scss";
import classNames from "classnames/bind";

import Header from "../Components/Header";

import { useLocation } from "react-router-dom";
import NavDrawer from "../Components/NavDrawer";

const cx = classNames.bind(styles);

//function to get the current pathname to set the corresponding bg
const getBackgroundClass = (pathname) => {
    switch (pathname) {
        case "destination":
            return "destination-bg";
        case "crew":
            return "crew-bg";
        case "technology":
            return "technology-bg";
        default:
            return "home-bg";
    }
};

function MainLayout({ children }) {
    const location = useLocation();

    const bgClass = getBackgroundClass(location.pathname.split("/")[1]);

    return (
        <div className={cx("main_layout", `${bgClass}`)}>
            <div className={cx("header")}>
                <Header />
            </div>
            <div className={cx("content")}>{children}</div>
            <NavDrawer />
        </div>
    );
}

export default MainLayout;
