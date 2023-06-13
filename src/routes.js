import Inicio from "pages/Inicio"
import { BrowserRouter, Route, Routes } from "react-router-dom"





export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Inicio></Inicio>}></Route>
            </Routes>
        </BrowserRouter>


    )
}