import React from 'react'
import Avatar from 'components/Avatar'
import Card from 'components/Card'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Root from "./routes/root"


const router = createBrowserRouter([
  {
      path: "/",
      element: <Root />,
  },
]);

function App() {
  return (
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
  )
}

export default App
