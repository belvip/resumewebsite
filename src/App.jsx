// Import necessary functions and components from react-router-dom
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// Import components from the pages directory
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

// Define the router configuration using createBrowserRouter
const router = createBrowserRouter([
  {
    // Root path ("/") for the application
    path: '/',
    // HomeLayout component will be rendered for the root path
    element: <HomeLayout />,
    // Error component will be rendered if an error occurs within this route or its children
    errorElement: <Error />,
    // Child routes for the root path
    children: [
      {
        // Index route: This will be rendered when the root path ("/") is accessed
        index: Landing,
        // About component will be rendered as the default child
        element: <Landing />,
      },
      {
        // Path for the "About" page
        path: 'about',
        // About component will be rendered when this path is accessed
        element: <About />,
      },
      {
        // Path for the "Experiences" page
        path: 'experiences',
        // Experiences component will be rendered when this path is accessed
        element: <Experiences />,
      },
      {
        // Path for the "Skills" page
        path: 'skills',
        // Experiences component will be rendered when this path is accessed
        element: <Skills />,
      },
      {
        // Path for the "Educations" page
        path: 'educations',
        // Educations component will be rendered when this path is accessed
        element: <Educations />,
      },
      {
        // Path for the "Portfolios" page
        path: 'portfolios',
        // Portfolios component will be rendered when this path is accessed
        element: <Portfolios />,
      },
    ],
  },
]);

// Main App component
const App = () => {
  // Provide the router configuration to the application using RouterProvider
  return <RouterProvider router={router} />;
};

// Export the App component as the default export
export default App;