import styles from "./Home.module.scss";
import classNames from "classnames/bind";
import ExploreBtn from "../../Components/ExploreBtn";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx("home_wrapper")}>
            <div className={cx("container")}>
                <div className={cx("content_wrapper")}>
                    <h5 className={cx("sub_heading")}>
                        SO, YOU WANT TO TRAVEL TO
                    </h5>
                    <h1 className={cx("heading")}>Space</h1>
                    <p className={cx("text")}>
                        Let’s face it; if you want to go to space, you might as
                        well genuinely go to outer space and not hover kind of
                        on the edge of it. Well sit back, and relax because
                        we’ll give you a truly out of this world experience!
                    </p>
                </div>
                <Link to="/destination">
                    <ExploreBtn />
                </Link>
            </div>
        </div>
    );
}

export default Home;
