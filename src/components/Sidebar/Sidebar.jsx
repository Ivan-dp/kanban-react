import React from "react";
import "./Sidebar.scss";

const Sidebar = () => {
    return (
        <aside className="Sidebar">
            <nav>
                <a href="/">Kanban</a>
                <a href="#">Link2</a>
                <a href="#">Link3</a>
            </nav>
        </aside>
    );
};

export { Sidebar };
