import { useEffect, useState, CSSProperties } from "react";
import { FadeLoader } from "react-spinners";
import css from "./App.module.css";
import { fetchImagesApi } from "./services/api";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

import type { ImageData } from "./types";

export default function App() {
  const [result, setResult] = useState<ImageData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const [topik, setTopik] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [img, setImg] = useState<ImageData | null>(null);

  function openModal(image: ImageData) {
    setImg(image);
    setIsOpen(true);
  }

  function closeModal() {
    setImg(null);
    setIsOpen(false);
  }

  const handleSearch = async (newImages: string) => {
    setTopik(newImages);
    setCurrentPage(1);
    setResult([]);
  };

  const addPage = () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    if (topik === "") {
      return;
    }

    async function fetchImages(): Promise<void> {
      try {
        setError(false);
        setLoading(true);
        const newTopik: ImageData[] = await fetchImagesApi(topik, currentPage);
        setResult((prevTopik) => [...prevTopik, ...newTopik]);
        setHasMore(newTopik.length > 0);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchImages();
  }, [currentPage, topik]);

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {result.length > 0 && (
        <ImageGallery data={result} onOpenModal={openModal} />
      )}
      {loading && <FadeLoader className={css.loader} />}
      {error && <ErrorMessage />}
      {!loading && hasMore && result.length > 0 && (
        <LoadMoreBtn onClick={addPage} />
      )}

      <ImageModal isOpen={modalIsOpen} onRequestClose={closeModal} img={img} />
    </>
  );
}
