import React from "react";
import { PropTypes } from "prop-types";
import "./Column.scss";

const Column = (props) => {
    Column.propTypes = {
        column: PropTypes.object.isRequired,
    };
    return (
        <div className="Column">
            <h3>{props.column.title}</h3>
            <p>{props.column.id}</p>
        </div>
    );
};

export { Column };
