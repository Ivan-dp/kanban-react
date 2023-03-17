import React from "react";
import { Routes, Route } from "react-router";
import "./MyRoutes.scss";

const MyRoutes = () => {
    return (
        <div className="MyRoutes">
            <Routes>
                <Route path="/">
                    <Route path="page1"></Route>
                    <Route path="page2"></Route>
                </Route>
            </Routes>
        </div>
    );
};

export { MyRoutes };
