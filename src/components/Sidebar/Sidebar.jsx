import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.scss";

const Sidebar = () => {
    return (
        <aside className="Sidebar">
            <nav>
                <Link to="/">Kanban</Link>
                <Link to="/page1">Egor</Link>
                <Link to="/page2">Link3</Link>
            </nav>
        </aside>
    );
};

export { Sidebar };
