import ReactDOM from "react-dom/client";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import { Home } from "../pages/Home";



export function MyRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/*" element={<Home />} />
            </Routes>
        </Router>
    )
}