import styles from "./Technology.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Technology() {
    return (
        <div>
            <h5 className={cx("page_title")}>
                <span>03</span>space launch 101
            </h5>
            <div className={cx("content_container")}>
                <div className={cx("left_part")}>
                    <div className={cx("content")}>
                        <h5 className={cx("sub_heading")}>the terminology</h5>
                        <h2 className={cx("heading")}>Launch vehicle</h2>
                        <p className={cx("info")}>
                            A launch vehicle or carrier rocket is a
                            rocket-propelled vehicle used to carry a payload
                            from Earth's surface to space, usually to Earth
                            orbit or beyond. Our WEB-X carrier rocket is the
                            most powerful in operation. Standing 150 metres
                            tall, it's quite an awe-inspiring sight on the
                            launch pad!
                        </p>
                    </div>
                </div>
                <div className={cx("right_part")}>
                    <img
                        src={require("../../assets/img/technology/image-launch-vehicle-portrait.jpg")}
                        alt="spaceshipimg"
                    ></img>
                </div>
            </div>
        </div>
    );
}

export default Technology;
