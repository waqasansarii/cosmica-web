import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Footer from "../Layout/Footer";
import Home from "../Pages/Home";


const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' component={Home} />
            </Switch>
            <Footer />
        </Router>
    )
}
export default AppRouter
