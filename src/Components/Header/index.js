import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import { svgIcon } from "../../assets/img/shared";
import Nav from "../Nav";
import { useState } from "react";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Header() {
    return (
        <>
            <div className={cx("header")}>
                <Link to="/">{svgIcon.logo}</Link>
                <span className={cx("header_line")}></span>

                <Nav />
            </div>
        </>
    );
}

export default Header;
