import css from './Hero.module.css';

export default function Hero() {
  return (
    <div className={css.container}>
      <div className={css.miniContainer}>
        <img src="/public/me.jpg" width={500} height={600} alt="Me" />

        <div className={css.titleContainer}>
          <h1 className={css.title}>
            Hello, <br /> I'm Roman,
          </h1>

          <h2 className={css.subtitle}>Web Developer</h2>
        </div>
      </div>
    </div>
  );
}
