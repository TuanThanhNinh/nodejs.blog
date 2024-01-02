import styles from "./NavDrawer.module.scss";
import classNames from "classnames/bind";
import NavItem from "../NavItem";
import { headerNavItems } from "../../assets/navItems";
import { useNavDrawerContext } from "../../context/NavDrawerContext";
import { useEffect } from "react";

const cx = classNames.bind(styles);

function NavDrawer() {
    const { drawerOpen, closeDrawerHandle } = useNavDrawerContext();
    useEffect(() => {
        const handleKeyPress = (event) => {
            // Check if the pressed key is Escape (key code 27)

            if (event.keyCode === 27 && drawerOpen) {
                closeDrawerHandle();
            }
        };

        // Add the event listener
        document.addEventListener("keydown", handleKeyPress);

        // Clean up the event listener when the component unmounts
        return () => {
            document.removeEventListener("keydown", handleKeyPress);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <div
                onClick={closeDrawerHandle}
                className={cx("overlay", { drawerOpen })}
            ></div>
            <div className={cx("content", { drawerOpen })}>
                <i className={cx("close_btn")} onClick={closeDrawerHandle}>
                    <ion-icon name="close-outline"></ion-icon>
                </i>
                <ul className={cx("nav_list")}>
                    {headerNavItems.map((item, ind) => (
                        <NavItem
                            link={true}
                            key={ind}
                            navItem={item.navItem}
                            path={item.path}
                        />
                    ))}
                </ul>
            </div>
        </>
    );
}

export default NavDrawer;
