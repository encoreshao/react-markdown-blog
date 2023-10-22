import cx from "classnames"
import css from "./style.module.scss"

export default function Contact() {
  return (
    <ul className={cx(css.contactList)}>
      <li>
        <span>Name</span>
        <strong>Encore Shao</strong>
      </li>

      <li>
        <span>Current Company</span>
        <strong>
          <a href="https://ekohe.com">Ekohe</a>
        </strong>
      </li>

      <li>
        <span>Position</span>
        <strong>
          <a href="https://ekohe.com/encore">Lead Software Engineer</a>
        </strong>
      </li>

      <li>
        <span>Address</span>
        <strong>ShangHai, China</strong>
      </li>

      <li>
        <span>Github</span>
        <strong>
          <a href="https://github.com/encoreshao">https://github.com/encoreshao</a>
        </strong>
      </li>
    </ul>
  )
}