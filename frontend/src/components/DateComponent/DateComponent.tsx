import classNames from "classnames/bind";
import React from "react";
import styles from "./DateComponent.module.scss"

const cx = classNames.bind(styles)

interface DateProps {
    date: string
}

const months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
];

const DateComponent: React.FC<DateProps> = ({ date }) => {
    const DateObj = new Date(date)
    return (
        <p className={cx(styles.Date)}>{`${DateObj.getDate()} ${months[DateObj.getMonth()]} ${DateObj.getFullYear()}`}</p>
    )
}

export default DateComponent;