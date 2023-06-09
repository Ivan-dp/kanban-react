import React from "react";
import { Routes, Route } from "react-router";
import { KanbanPage } from "../../pages";
import "./MyRoutes.scss";

const MyRoutes = () => {
    return (
        <div className="MyRoutes">
            <Routes>
                <Route path="/" element={<KanbanPage />}></Route>
                <Route path="/page1" element={<h1 style={{ color: "white", textTransform: "uppercase" }}>new page 1</h1>}></Route>
                <Route path="/page2" element={<h1 style={{ color: "white", textTransform: "uppercase" }}>new page 2</h1>}></Route>
            </Routes>
        </div>
    );
};

export { MyRoutes };
