import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
//import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.jsx'
import About from "./pages/About.jsx"
import Contact from "./pages/Contact.jsx"   
import Portfolio from './pages/Portfolio.jsx'
import Resume from './pages/Resume.jsx'

const newRoute = createBrowserRouter([
  {
    path: '/', //sets landing page and base url
    element: <App />,
    errorElement: <h1 className='display-2'>Wrong page!</h1>,
    children: [
      {
        index: true,
        element: <About />
      }, 
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/portfolio',
        element: <Portfolio />
      },
      {
        path: '/resume',
        element: <Resume />
      },

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={newRoute} />
)