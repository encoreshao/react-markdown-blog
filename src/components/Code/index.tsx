import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from './../../contexts/theme-context';
import CopyToClipboard from 'react-copy-to-clipboard';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark, materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyIcon, PasteIcon } from './../Icons';
import cx from "classnames"
import css from "./style.module.scss"

const Code = (props: CodeProps) => {
  const { children, language } = props
  const [copied, setCopied] = useState(false);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [copied])

  return (
    <div className={cx(css.code)}>
      <CopyToClipboard text={children} onCopy={() => setCopied(true)}>
        <button className={cx('icon', css.copyIcon)}>
          {copied ? <PasteIcon /> : <CopyIcon />}
        </button>
      </CopyToClipboard>

      <SyntaxHighlighter
        language={language}
        style={theme === 'dark' ? materialDark : materialLight}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  )
}

export default Code