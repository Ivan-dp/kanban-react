import React from "react";
import { NewColumnForm, Column } from "../../components";
import { useSelector } from "react-redux";
import "./KanbanPage.scss";

const KanbanPage = () => {
    let columns = useSelector((store) => store);
    console.log(columns);
    return (
        <div className="KanbanPage">
            {columns.map((column) => {
                return <Column key={column.id} column={column} />;
            })}
            <NewColumnForm />
        </div>
    );
};

export { KanbanPage };
