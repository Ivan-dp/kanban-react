import React from "react";
import { PropTypes } from "prop-types";
import "./Card.scss";

const Card = (props) => {
    Card.propTypes = {
        column: PropTypes.object.isRequired,
    };
    return (
        <div className="Card">
            <div className="Card__header">
                <h3>{props.card.title}</h3>
            </div>
            <div className="Card__body">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi aliquam neque beatae eveniet quisquam nostrum, magnam laudantium a voluptatem molestias optio quasi dolor soluta
                    commodi odio laborum esse dolorum repellendus?
                </p>
            </div>
        </div>
    );
};

export { Card };
