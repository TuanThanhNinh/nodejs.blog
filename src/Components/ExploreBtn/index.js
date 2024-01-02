import styles from "./ExploreBtn.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function ExploreBtn() {
    return (
        <div className={cx("explore_btn")}>
            <div className={cx("text")}>Explore</div>
        </div>
    );
}

export default ExploreBtn;
