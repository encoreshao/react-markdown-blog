import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Pages
import Dashboard from './containers/dashboard';
import ArticleIndex from './containers/articles';
import ArticleShow from './containers/articles/show';
import Contact from './containers/help/Contact';

// Layout
import RootLayout from './containers/layouts/RootLayout';
import HelpLayout from './containers/layouts/HelpLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="articles">
        <Route index element={<ArticleIndex />} />
        <Route path=":filename" element={<ArticleShow />} />
      </Route>
      <Route path="help" element={<HelpLayout />}>
        <Route path="contact" element={<Contact />} />
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
