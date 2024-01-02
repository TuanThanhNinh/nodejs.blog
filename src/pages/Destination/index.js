import styles from "./Destination.module.scss";
import classNames from "classnames/bind";

import { useState } from "react";
import { destinationData } from "../../data/destinationData";
import NavItem from "../../Components/NavItem";

const cx = classNames.bind(styles);

function Destination() {
    const [destinationsData, setDestinationsData] = useState(destinationData);
    const [currentDes, setCurrentDes] = useState(destinationData[0]);

    const navClickHandle = (id) => {
        setCurrentDes(destinationsData[id - 1]);
    };

    return (
        <div className={cx("des_wrapper")}>
            <h5 className={cx("sub_heading")}>
                <span>01</span> PICK YOUR DESTINATION
            </h5>

            <div className={cx("main_content")}>
                <div className={cx("left_part")}>
                    <img
                        src={require(`../../assets/img/destination/image-${currentDes.name.toLowerCase()}.webp`)}
                        alt="mon_pic"
                    ></img>
                </div>
                <div className={cx("right_part")}>
                    <ul className={cx("nav_list")}>
                        {destinationData.map((item) => (
                            <NavItem
                                key={item.id}
                                navItem={item.name}
                                currentNav={currentDes.name}
                                navOnClick={() => navClickHandle(item.id)}
                            />
                        ))}
                    </ul>
                    <h1 className={cx("heading")}>{currentDes.name}</h1>
                    <p className={cx("text")}>{currentDes.info}</p>
                    <div className={cx("info")}>
                        <div className={cx("left")}>
                            <p className={cx("heading_sm")}>AVG. DISTANCE</p>
                            <p className={cx("nums")}>{currentDes.distance}</p>
                        </div>
                        <div className={cx("right")}>
                            <p className={cx("heading_sm")}>EST. TRAVEL TIME</p>
                            <p className={cx("nums")}>{currentDes.time}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Destination;
