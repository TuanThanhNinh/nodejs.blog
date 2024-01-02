import styles from "./Crew.module.scss";
import classNames from "classnames/bind";
import NavItem from "../../Components/NavItem";
import { useState } from "react";
import { crewData } from "../../data/crewData";

const cx = classNames.bind(styles);

function Crew() {
    const [currentMember, setCurrentMember] = useState(crewData[0]);
    const memberName = currentMember.name.split(" ");

    const navClickHandle = (id) => {
        setCurrentMember(crewData[id - 1]);
    };

    return (
        <div className={cx("crew_wrapper")}>
            <h5 className={cx("page_title")}>
                <span>02</span>meet your crew
            </h5>
            <div className={cx("main_content")}>
                <div className={cx("left_part")}>
                    <div className={cx("content")}>
                        <h3 className={cx("title")}>{currentMember.title}</h3>
                        <p className={cx("mem_name")}>{currentMember.name}</p>
                        <p className={cx("info")}>{currentMember.info}</p>

                        <ul className={cx("nav_list")}>
                            {crewData.map((mem) => (
                                <NavItem
                                    navOnClick={() => navClickHandle(mem.id)}
                                    key={mem.id}
                                    className={cx(
                                        "nav_btn",
                                        mem.id === currentMember.id
                                            ? "active"
                                            : ""
                                    )}
                                    rounded
                                />
                            ))}
                        </ul>
                    </div>
                </div>
                <div className={cx("right_part")}>
                    <div className={cx("img_wrapper")}>
                        <img
                            src={require(`../../assets/img/crew/image-${memberName[0].toLowerCase()}-${memberName[1].toLowerCase()}.webp`)}
                            alt="member_img"
                        ></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Crew;
