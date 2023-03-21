import React from "react"
import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import App from 'App'
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

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>)
