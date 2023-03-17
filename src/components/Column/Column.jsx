import React from "react";
import { PropTypes } from "prop-types";
import "./Column.scss";

const Column = (props) => {
    Column.propTypes = {
        column: PropTypes.object.isRequired,
    };
    return (
        <div className="Column">
            <div className="Column__header">
                <h3>{props.column.title}</h3>
            </div>
            <div className="Column__body"></div>
        </div>
    );
};

export { Column };
