import './App.css'
import Home from './Home/Home';
import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom'
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';
import Layout from './Layout/Layout';
import About from './About/About';

function App() {

const router = createBrowserRouter([
      {
path:"",
element:<Layout/>,
children:[
  {
index: true,
        element: <Home/>,
      },
      {
        path: 'about',
        element: <About/>,
      },
      {
        path: 'Portfolio',
        element: <Portfolio/>,
      },
      {
        path: 'Contact',
        element: <Contact/>,
      }
]
}
    ]);




  return (

<>
<RouterProvider router={router}/>
    </>
  );
}

export default App