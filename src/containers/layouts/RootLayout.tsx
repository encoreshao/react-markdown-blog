/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { LogoIcon, OpenBookIcon, HomeIcon, QuestionIcon } from "../../components/Icons";

import Header from "../../components/Header";
import Timeline from "../../components/Timeline";

import { ThemeContext } from "../../contexts/theme-context";

export default function RootLayout() {
  // Detecting the default theme
  const isBrowserDefaultDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;
  const getDefaultTheme = (): string => {
    const localStorageTheme = localStorage.getItem('theme');
    const browserDefault = isBrowserDefaultDark() ? 'dark' : 'light';
    return localStorageTheme || browserDefault;
  };
  const [theme, setTheme] = useState(getDefaultTheme());

  const myComponentStyle = { position: 'fixed', top: '70px', zIndex: 6 };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <>
        <Header />
        <Timeline customStyle={myComponentStyle}/>

        <nav id="navbar">
          <ul className="navbar-items flexbox-col">
            <li className="navbar-logo flexbox-left">
              <NavLink to="/" className="navbar-item-inner flexbox">
                <LogoIcon />
              </NavLink>
            </li>
            <li className="navbar-item flexbox-left">
              <NavLink to="" className="navbar-item-inner flexbox-left">
                <div className="navbar-item-inner-icon-wrapper flexbox">
                  <HomeIcon />
                </div>
                <span className="link-text">Home</span>
              </NavLink>
            </li>
            <li className="navbar-item flexbox-left">
              <NavLink to='articles' className="navbar-item-inner flexbox-left">
                <div className="navbar-item-inner-icon-wrapper flexbox">
                  <OpenBookIcon />
                </div>
                <span className="link-text">Search</span>
              </NavLink>
            </li>
            <li className="navbar-item flexbox-left">
              <NavLink to='/help' className="navbar-item-inner flexbox-left">
                <div className="navbar-item-inner-icon-wrapper flexbox">
                  <QuestionIcon />
                </div>
                <span className="link-text">Projects</span>
              </NavLink>
            </li>
          </ul>
        </nav>

        <main className="view-width">
          <Outlet />
        </main>
      </>
    </ThemeContext.Provider>
  )
}