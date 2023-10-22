import Markdown from "markdown-to-jsx"
import { useEffect, useState } from "react"

import cx from "classnames"
import css from "./style.module.scss"

import Code from "./../../components/Code";
import { useParams } from "react-router-dom";

const ArticleShow = () => {
  let { filename } = useParams();
  const [postContent, setPostContent] = useState("");

  useEffect(() => {
    if (filename) {
      import(`./../../markdown/${filename}.md`)
        .then(res => {
          fetch(res.default)
            .then(response => response.text())
            .then(response => setPostContent(response))
            .catch(err => console.log(err))
        }).catch(err => console.log(err))
    }
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

export default ArticleShow