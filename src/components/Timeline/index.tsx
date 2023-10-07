import cx from "classnames"
import css from "./style.module.scss"

const Timeline = (props: any) => {
  const { customStyle } = props;

  return (
    <div className={cx(css.line)} style={customStyle}/>
  )
}

export default Timeline