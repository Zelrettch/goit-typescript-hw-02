import { Image } from "../../js/unsplash-api";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { MouseEvent } from "react";

type Props = {
  images: Image[];
  openModal: (id: string) => void;
};

export default function ImageGallery({ images, openModal }: Props) {
  function handleClick(e: MouseEvent<HTMLUListElement>) {
    const target = e.target as HTMLElement;
    if (target.tagName != "IMG") return;
    const id = target.getAttribute("data-id");
    if (id) openModal(id);
  }
  return (
    <ul onClick={handleClick} className={css.gallery}>
      {images.map((e) => (
        <li key={e.id}>
          <ImageCard image={e} />
        </li>
      ))}
    </ul>
  );
}
