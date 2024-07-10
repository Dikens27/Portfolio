import css from './Skills.module.css';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { FaReact } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';

export default function Skills() {
  return (
    <div className={css.container}>
      <div className={css.hardContainer}>
        <h2 className={css.hard}>
          Hard <br /> Skills:
        </h2>

        <ul className={css.hardList}>
          <li className={css.hardItem}>
            <FaHtml5 className={css.hardIcon} />
            <p className={css.hardText}>HTML</p>
          </li>
          <li className={css.hardItem}>
            <FaCss3Alt className={css.hardIcon} />
            <p className={css.hardText}>CSS</p>
          </li>
          <li className={css.hardItem}>
            <IoLogoJavascript className={css.hardIcon} />
            <p className={css.hardText}>JavaScript</p>
          </li>
          <li className={css.hardItem}>
            li <FaReact className={css.hardIcon} />
            <p className={css.hardText}>React</p>
          </li>
          <li className={css.hardItem}>
            <FaNodeJs className={css.hardIcon} />
            <p className={css.hardText}>Node.js</p>
          </li>
        </ul>
      </div>

      <div className={css.softContainer}>
        <h2 className={css.soft}>
          Soft <br /> Skills:
        </h2>

        <ul className={css.softList}>
          <li className={css.softItem}>
            <p className={css.softText}>Communication</p>
          </li>
          <li className={css.softItem}>
            <p className={css.softText}>
              Stress <br /> Resistance
            </p>
          </li>
          <li className={css.softItem}>
            <p className={css.softText}>Teamwork</p>
          </li>
          <li className={css.softItem}>
            <p className={css.softText}>Ready To Learn</p>
          </li>
          <li className={css.softItem}>
            <p className={css.softText}>Responsibility</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
