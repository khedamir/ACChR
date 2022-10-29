import classNames from "classnames/bind";
import React from "react";
import { useLoadContext } from "../../context/LoaderContext";
import styles from "./Loader.module.scss"

const cx = classNames.bind(styles)

const Loader: React.FC = () => {
    const LoadContext = useLoadContext()

    return (
        <div>
            {LoadContext.isLoad &&
                <div className={cx(styles.loaderContainer)}>
                    <span className={cx(styles.loader)}></span>
                </div>}
        </div>
    )
}

export default Loader