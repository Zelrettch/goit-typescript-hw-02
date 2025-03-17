import { useState } from "react";
import { Image } from "../../js/unsplash-api";

export type UseModal = {
  fullImage: Image | null;
  openModal: (image: Image | null) => void;
  closeModal: () => void;
};

export default function useModal(): UseModal {
  const [fullImage, setFullImage] = useState<Image | null>(null);

  function openModal(image: Image | null): void {
    setFullImage(image);
  }
  function closeModal(): void {
    setFullImage(null);
  }

  return { fullImage, openModal, closeModal };
}
