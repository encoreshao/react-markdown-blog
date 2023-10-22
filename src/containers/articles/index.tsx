import cx from "classnames"
import css from "./style.module.scss"
import { NavLink } from "react-router-dom"

const ArticleIndex = () => {
  return (
    <aside className={cx(css.article)}>
      <div className="container">
        <div className={cx(css.postWrapper)}>
          <ul className={cx(css.list)}>
            <li>
              <NavLink to='rails5nvm'>
                <span>使用NVM正确的为您的Ruby On Rails项目安装 Yarn, Node</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='rubyonrails'>
                <span>Ruby On Rails - Snippets</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='javascript'>
                <span>Javascript - Snippets</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  )
}

export default ArticleIndex