import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

import { ImageData } from "../../types";

interface ImageGalleryProps {
  data: ImageData[];
  onOpenModal: (image: ImageData) => void;
}

export default function ImageGallery({ data, onOpenModal }: ImageGalleryProps) {
  return (
    <ul className={css.list}>
      {data.map((data) => (
        <ImageCard key={data.id} data={data} onClick={onOpenModal} />
      ))}
    </ul>
  );
}
