import { Image } from "../../js/unsplash-api";
import css from "./ImageCard.module.css";

type Prop = {
  image: Image;
};

export default function ImageCard({ image }: Prop) {
  return (
    <div className={css.card}>
      <img
        width="360"
        height="200"
        src={image.urls.small}
        alt={image.description}
        data-id={image.id}
      ></img>
    </div>
  );
}
