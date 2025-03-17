import css from "./SearchBar.module.css";
import { FiSearch } from "react-icons/fi";
import toast from "react-hot-toast";
import { FormEvent } from "react";

type Props = {
  onSubmit: (query: string) => void;
};

export default function SearchBar({ onSubmit }: Props) {
  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.elements.namedItem("search") as HTMLInputElement;
    const query = input.value.trim();

    if (query) {
      onSubmit(query.toLowerCase());
      form.reset();
    } else {
      toast.error("Please enter some text");
    }
  }

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          className={css.search}
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit" className={css.button}>
          <FiSearch />
        </button>
      </form>
    </header>
  );
}
