import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './i18n'; // Importez ici votre fichier i18n.js pour initialiser i18next

// Import des composants de la page
import {
  HomeLayout,
  Landing,
  About,
  Experiences,
  Educations,
  Portfolios,
  Skills,
  Error
} from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      { index: Landing, element: <Landing /> },
      { path: 'about', element: <About /> },
      { path: 'experiences', element: <Experiences /> },
      { path: 'skills', element: <Skills /> },
      { path: 'educations', element: <Educations /> },
      { path: 'portfolios', element: <Portfolios /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
