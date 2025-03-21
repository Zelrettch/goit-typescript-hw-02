import { Image } from "../../js/unsplash-api";
import css from "./ImageModal.module.css";
import Modal from "react-modal";
Modal.setAppElement("#root");

type Prop = {
  onCloseModal: () => void;
  image: Image;
};

export default function ImageModal({ onCloseModal, image }: Prop) {
  return (
    <Modal
      isOpen={true}
      onRequestClose={() => onCloseModal()}
      className={css.modalContent}
      style={{ overlay: { backgroundColor: "rgba(0, 0, 0, 0.7)" } }}
      preventScroll={true}
      onAfterOpen={() => (document.body.style.overflow = "hidden")}
      onAfterClose={() => (document.body.style.overflow = "unset")}
    >
      <img
        src={image.urls.full}
        alt={image.description}
        className={css.modalImage}
      />
    </Modal>
  );
}
