import styles from "./NavItem.module.scss";
import classNames from "classnames/bind";
import { Link, useLocation } from "react-router-dom";
import { useNavDrawerContext } from "../../context/NavDrawerContext";

const cx = classNames.bind(styles);

function NavItem({
    path,
    navItem,
    link = false,
    rounded = false,
    navOnClick,
    currentNav,
    className,
}) {
    const { closeDrawerHandle } = useNavDrawerContext();
    const location = useLocation();

    if (link) {
        return (
            <Link onClick={closeDrawerHandle} to={path}>
                <li
                    className={cx(
                        "nav_link",
                        location.pathname === path ? "active" : ""
                    )}
                >
                    {navItem}
                </li>
            </Link>
        );
    }

    if (rounded) {
        return (
            <li
                className={cx({ [className]: className })}
                onClick={navOnClick}
            ></li>
        );
    }

    return (
        <li
            className={cx("nav_btn", currentNav === navItem ? "active" : "", {
                [className]: className,
            })}
            onClick={navOnClick}
        >
            {navItem}
        </li>
    );
}

export default NavItem;
