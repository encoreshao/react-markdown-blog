import { useContext } from "react";
import { ThemeContext } from './../../contexts/theme-context';
import { LogoIcon, MoonIcon, SunIcon } from "./../Icons";
import cx from "classnames"
import css from "./style.module.scss"

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const handleThemeChange = () => {
    const isCurrentDark = theme === 'dark';
    const newTheme = isCurrentDark ? 'light' : 'dark'

    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <header className={cx('header', css.header)}>
      <div className='container'>
        <div className={cx(css.logoWrapper)}>
          <div className={cx(css.logo)}>
            <LogoIcon />
            <a href='/'className={cx(css.headerLink)}>
              <span className={cx(css.logoSpan)}>
                Snippets
              </span>
            </a>
          </div>
          <div
            className={cx(css.themeIconWrapper)}
            onClick={handleThemeChange}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;