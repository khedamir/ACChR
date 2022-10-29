import React from "react";
import styles from "./Pagination.module.scss";
import classNames from "classnames/bind";
import { ReactComponent as Arrow } from "../../assets/svg/145769.svg";

const cx = classNames.bind(styles);

interface PaginationProps {
  activaPage: number;
  countDisplayElements: number;
  totalCount: number;
  setPage(page: number): void;
}

const maxPageCount = 7;
const pagePos = Math.floor(maxPageCount / 2) - 2;

const Pagination: React.FC<PaginationProps> = ({
  activaPage,
  countDisplayElements,
  totalCount,
  setPage,
}) => {
  if (totalCount <= countDisplayElements) {
    return null;
  }

  const pageCount = Math.ceil(totalCount / countDisplayElements);
  const items: string[] = [];

  if (pageCount >= maxPageCount) {
    if (activaPage === 1) {
      for (let i = 1; i <= maxPageCount - 2; i++) {
        items.push(i.toString());
      }
      items.push("...", pageCount.toString());
    } else {
      if (activaPage >= maxPageCount - 2) {
        items.push("1", "...");
        if (activaPage + maxPageCount - 3 < pageCount) {
          for (let i = activaPage - pagePos; i <= activaPage + pagePos; i++) {
            items.push(i.toString());
          }
          items.push("...", pageCount.toString());
        } else {
          let arr: string[] = [];
          for (let i = pageCount; i >= pageCount - maxPageCount + 3; i--) {
            arr.push(i.toString());
          }
          items.push(...arr.reverse());
        }
      } else {
        for (let i = 1; i <= maxPageCount - 2; i++) {
          items.push(i.toString());
        }
        items.push("...", pageCount.toString());
      }
    }
  } else {
    for (let i = 1; i <= pageCount; i++) {
      items.push(i.toString());
    }
  }

  return (
    <div className={cx(styles.pagination)}>
      <span className={cx(styles.arrowLeft)}>
        <Arrow
          className={cx(activaPage > 1 ? styles.arrowActive : styles.arrow)}
          onClick={() => setPage(activaPage - 1)}
          width="10"
          height="15"
        />
      </span>
      {items.map((x, i) => {
        return (
          <p
            className={cx(
              activaPage.toString() === x
                ? styles.activePage
                : activaPage.toString() === "..."
                ? styles.notPage
                : styles.page
            )}
            key={i}
            onClick={() => x !== "..." && setPage(parseInt(x))}
          >
            {x}
          </p>
        );
      })}
      <span className={cx(styles.arrowRight)}>
        <Arrow
          className={cx(
            activaPage < pageCount ? styles.arrowActive : styles.arrow
          )}
          onClick={() => setPage(activaPage + 1)}
          width="10"
          height="15"
        />
      </span>
    </div>
  );
};

export default Pagination;
