import css from "./ImageCard.module.css";

import { ImageData } from "../../types";

interface ImageCardProps {
  data: ImageData;
  onClick: (image: ImageData) => void;
}

export default function ImageCard({ data, onClick }: ImageCardProps) {
  return (
    <li className={css.imageItem} onClick={() => onClick(data)}>
      <img
        className={css.imageThumb}
        src={data.urls.small}
        alt={data.description}
      ></img>
    </li>
  );
}
