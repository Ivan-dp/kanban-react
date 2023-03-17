import React from "react";
import { PropTypes } from "prop-types";
import "./Column.scss";
import { NewCardForm } from "../NewCardForm/NewCardForm";

const Column = (props) => {
    Column.propTypes = {
        column: PropTypes.object.isRequired,
    };
    return (
        <div className="Column">
            <div className="Column__header">
                <h3>{props.column.title}</h3>
            </div>
            <div className="Column__body">
                <NewCardForm column={props.column} />
                {props.column.cards.map((card) => {
                    return JSON.stringify(card.id);
                })}
            </div>
        </div>
    );
};

export { Column };
