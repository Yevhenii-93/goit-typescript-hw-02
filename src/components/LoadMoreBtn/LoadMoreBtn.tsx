import { MouseEventHandler } from "react";
import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export default function LoadMoreBtn({ onClick }: LoadMoreBtnProps) {
  return (
    <button className={css.btn} type="button" onClick={onClick}>
      Load More
    </button>
  );
}
