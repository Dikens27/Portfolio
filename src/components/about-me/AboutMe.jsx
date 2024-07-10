import css from './AboutMe.module.css';

export default function AboutMe() {
  return (
    <div className={css.container}>
      <h2 className={css.title}>About me</h2>

      <div className={css.aboutContainer}>
        <p className={css.text}>
          As a web developer, I possess a broad range of skills and knowledge
          required for building websites and applications. My expertise spans
          from HTML, CSS, and JavaScript to working with frameworks like React.
          I have experience with server-side technologies such as Node.js. I
          enjoy experimenting with new technologies and tools to stay up-to-date
          with modern web development standards and practices. I am proficient
          in independent and collaborative work, effectively communicating with
          designers and developers. ls include continually improving my skills
          and creating web solutions that impress and inspire.
        </p>

        <img src="/public/me2.jpg" width={500} height={600} alt="Me" />
      </div>
    </div>
  );
}
