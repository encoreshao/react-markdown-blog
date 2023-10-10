import { useEffect, useState } from 'react';
import Header from './components/Header';
import Article from './components/Article';
import Timeline from './components/Timeline';
import { ThemeContext } from './contexts/theme-context';
import cx from "classnames"

function App() {
  // Detecting the default theme
  const isBrowserDefaultDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;
  const getDefaultTheme = (): string => {
    const localStorageTheme = localStorage.getItem('theme');
    const browserDefault = isBrowserDefaultDark() ? 'dark' : 'light';
    return localStorageTheme || browserDefault;
  };
  const [theme, setTheme] = useState(getDefaultTheme());

  const myComponentStyle = { position: 'fixed', top: '70px', zIndex: 6 };
  const filename = window.location.pathname === '/' ? 'javascript' : window.location.pathname.slice(1)

  useEffect(() => {
     document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={cx('app-root')}>
        <Header />
        <Timeline customStyle={myComponentStyle}/>
        <Article filename={filename}/>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;