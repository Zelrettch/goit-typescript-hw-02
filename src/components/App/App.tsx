import css from "./App.module.css";

import { Toaster } from "react-hot-toast";
import SearchBar from "../SearchBar/SearchBar";
import useModal, { UseModal } from "./useModal";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import useImages, { UseImages } from "./useImages";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";

export default function App() {
  const { items, error, status, hasNext, loadNewQuery, loadPage }: UseImages =
    useImages();
  const { fullImage, openModal, closeModal }: UseModal = useModal();

  function enableModal(id: string): void {
    const image = items.find((e) => e.id === id);
    openModal(image ?? null);
  }

  const isEmpty: boolean = items.length == 0;

  return (
    <div className={css.app}>
      <SearchBar onSubmit={loadNewQuery} />
      {status == "error" ? (
        <ErrorMessage error={error} />
      ) : (
        <>
          {!isEmpty && <ImageGallery images={items} openModal={enableModal} />}
          {status == "loading" && <Loader />}
          {hasNext && status == "loaded" && <LoadMoreBtn onClick={loadPage} />}
        </>
      )}
      {fullImage && <ImageModal onCloseModal={closeModal} image={fullImage} />}
      <Toaster />
    </div>
  );
}
