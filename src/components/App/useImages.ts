import { useEffect, useState } from "react";
import getPage, { Image, ImagesResponse } from "../../js/unsplash-api";
import toast from "react-hot-toast";

export type State = {
  query: string;
  page: number;
  maxPages: number;
};

export type Status = "loaded" | "loading" | "error";

export type UseImages = {
  items: Image[];
  error: string;
  status: Status;
  hasNext: boolean;
  loadNewQuery: (query: string) => void;
  loadPage: () => void;
};

function scrollDown(): void {
  window.scrollTo({
    top: document.documentElement.clientHeight / 2 + window.scrollY,
    left: 0,
    behavior: "smooth",
  });
}

export default function useImages(): UseImages {
  const [state, setState] = useState<State>({
    query: "",
    page: 1,
    maxPages: 1,
  });
  const [items, setItems] = useState<Image[]>([]);
  const [error, setError] = useState("");
  const [status, setStatus] = useState<Status>("loaded");

  async function addPage(query: string, page: number): Promise<void> {
    try {
      setStatus("loading");
      const data: ImagesResponse = await getPage(page, query);
      data.results.length == 0 && toast.error("Nothing found");

      setItems((i) => [...i, ...data.results]);
      setState({
        query,
        page,
        maxPages: data.total_pages,
      });
      setStatus("loaded");
    } catch (e: any) {
      setStatus("error");
      setError(e.message);
    }
  }

  useEffect(() => scrollDown, [items]);

  const hasNext = state.page < state.maxPages;

  function loadNewQuery(query: string): void {
    setItems([]);
    addPage(query, 1);
  }
  function loadPage(): void {
    setItems([...items]);
    if (hasNext) {
      addPage(state.query, state.page + 1);
    }
  }

  return { items, error, status, hasNext, loadNewQuery, loadPage };
}
