import styles from "./Nav.module.scss";
import classNames from "classnames/bind";

import NavItem from "../NavItem";
import useWindowSize from "../../customHooks/useWindowSize";

import { headerNavItems } from "../../assets/navItems";
import { useNavDrawerContext } from "../../context/NavDrawerContext";

const cx = classNames.bind(styles);

function Nav() {
    const { width } = useWindowSize();

    const { openDrawerHandle } = useNavDrawerContext();

    return (
        <div className={cx("nav_wrapper")}>
            {width < "768" ? (
                <i onClick={openDrawerHandle}>
                    <ion-icon name="menu-outline"></ion-icon>
                </i>
            ) : (
                <ul>
                    {headerNavItems.map((item, ind) => (
                        <NavItem
                            link={true}
                            key={ind}
                            navItem={item.navItem}
                            path={item.path}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Nav;
