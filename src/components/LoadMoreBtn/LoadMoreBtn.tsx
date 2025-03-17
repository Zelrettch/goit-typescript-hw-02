import css from "./LoadMoreBtn.module.css";

type Prop = {
  onClick: () => void;
};

export default function LoadMoreBtn({ onClick }: Prop) {
  return (
    <button onClick={onClick} className={css.loadBtn}>
      Load more
    </button>
  );
}
