
import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import RootLayot from './components/RootLayot';
import Home from './components/Home';
import Reactjs from './components/Reactjs';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Technologies from './components/Technologies';
import Vue from './components/Vue';
import Angular from './components/Angular'


function App() {

  const router=createBrowserRouter([
    {
      path:"/",
      element:<RootLayot />,
      children:[
        {
          path:"/",
          element:<Home />
        },
        {
          path:"/Signup",
          element:<Signup />
        },
        {
          path:"/Signin",
          element:<Signin />
        },
        {
          path:"/Technologies",
          element:<Technologies />,
          children:[
            {
              path:"Reactjs",
              element:<Reactjs />
            },
            {
              path:"Angular",
              element:<Angular />
            },
            {
              path:"Vue",
              element:<Vue />
            }
          ]
        }
      ]
    }
  ])

  return (
    <div className="App">
      {/*provide browser router*/}
      <RouterProvider router={router} />

    </div>
  );
}

export default App;
