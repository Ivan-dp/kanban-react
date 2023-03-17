import React from "react";
import { PropTypes } from "prop-types";
import "./Card.scss";
import { NewTaskForm } from "../";

const Card = ({ card, column }) => {
    Card.propTypes = {
        card: PropTypes.object.isRequired,
        column: PropTypes.object.isRequired,
    };
    return (
        <div className="Card">
            <div className="Card__header">
                <h3>{card.title}</h3>
            </div>
            <div className="Card__body">{<NewTaskForm column={column} card={card} />}</div>
        </div>
    );
};

export { Card };
