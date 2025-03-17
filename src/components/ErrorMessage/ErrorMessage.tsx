import css from "./ErrorMessage.module.css";

type Props = {
  error: string;
};

export default function ErrorMessage({ error }: Props) {
  return (
    <div className={css.errorContainer}>
      <p>{error}</p>
    </div>
  );
}
