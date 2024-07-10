import css from './Portfolio.module.css';

export default function Portfolio() {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Latest works:</h2>

      <div className={css.scrollbar}>
        <div className={css.scrollbarContainer}>
          <ul className={css.cards}>
            <li className={css.card}>
              <img
                className={css.img}
                src="../../../public/taskPro.png"
                alt="taskPro"
                width={850}
                height={550}
              />
            </li>
            <li className={css.card}>
              <img
                className={css.img}
                src="../../../public/filmoteka.png"
                alt="filmoteka"
              />
            </li>
            <li className={css.card}>
              <img className={css.img} src="" alt="alt" />
            </li>
            <li className={css.card}>
              <img className={css.img} src="" alt="alt" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
