import Markdown from "markdown-to-jsx"
import { useEffect, useState } from "react"
import Code from "./../Code";
import cx from "classnames"
import css from "./style.module.scss"

const Article = (props: ArticleProps) => {
  const [postContent, setPostContent] = useState("");
  const { filename } = props;

  useEffect(() => {
    import(`./../../markdown/${filename}.md`)
      .then(res => {
        fetch(res.default)
          .then(response => response.text())
          .then(response => setPostContent(response))
          .catch(err => console.log(err))
      }).catch(err => console.log(err))
  }, [filename]);

  return (
    <article className={cx(css.article)}>
      <div className="container">
        <div className={cx(css.postWrapper)}>
          <Markdown options={{
            slugify: str => str,
            forceWrapper: true,
            overrides: {
              Code: {
                component: Code
              }
            }
          }}>
            {postContent}
          </Markdown>
        </div>
      </div>
    </article>
  )
}

export default Article