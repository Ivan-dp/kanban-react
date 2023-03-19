import React, { useState } from "react";
import { PropTypes } from "prop-types";
import "./Card.scss";
import { NewTaskForm, Task, CardModal } from "../";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListUl, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";

const Card = (props) => {
    Card.propTypes = {
        card: PropTypes.object.isRequired,
        column: PropTypes.object.isRequired,
    };

    const columns = useSelector((store) => store);

    const [active, setActive] = useState(false);
    const [boards, setBoards] = useState(useSelector((store) => store));
    const [currentColumn, setCurrentColumn] = useState(props.column);
    const [currentCard, setCurrentCard] = useState(props.card);

    const dispatch = useDispatch();

    const deleteCard = (event) => {
        event.preventDefault();
        dispatch({
            type: "DELETE_CARD",
            colKey: columns.indexOf(props.column),
            id: props.card.id,
        });
    };

    function dragOverHandler(e) {
        e.preventDefault();
        if (e.target.parentNode.className === "Card" || e.target.className === "Card") {
            e.target.style.boxShadow = "9px 4px 3px white";
        }
    }
    function dragStartHandler(e) {
        setCurrentColumn(() => props.column);
        setCurrentCard(() => props.card);
        console.log("START DRAG");
        console.log(currentCard);
        console.log(currentColumn);
    }
    function dragEndHandler(e) {
        e.target.style.boxShadow = "none";
    }
    function dragLeaveHandler(e) {
        e.target.style.boxShadow = "none";
    }
    function dropHandler(e) {
        e.preventDefault();
        console.log(currentColumn);
        const currentIndex = currentColumn.cards.indexOf(currentCard);
        currentColumn.cards.splice(currentIndex, 1);
        const dropIndex = props.column.cards.indexOf(props.card);
        props.column.cards.splice(dropIndex + 1, 0, currentCard);
        setBoards(
            boards.map((b) => {
                if (b.id === props.column.id) {
                    return props.column;
                }
                if (b.id === currentColumn.id) {
                    return currentColumn;
                }
            })
        );
    }

    return (
        <div
            className="Card"
            draggable={true}
            onDragOver={(e) => dragOverHandler(e)}
            onDragStart={(e) => dragStartHandler(e)}
            onDragEnd={(e) => dragEndHandler(e)}
            onDragLeave={(e) => dragLeaveHandler(e)}
            onDrop={(e) => dropHandler(e)}
        >
            <div className="Card__header">
                <h3>{props.card.title}</h3>
                <button
                    className="Card__more"
                    onClick={() => {
                        setActive(!active);
                    }}
                >
                    <FontAwesomeIcon icon={faListUl} />
                </button>
                <button
                    className="Card__close"
                    onClick={(e) => {
                        deleteCard(e);
                    }}
                >
                    <FontAwesomeIcon icon={faTrashCan} />
                </button>
            </div>
            <div className="Card__body">
                <NewTaskForm column={props.column} card={props.card} />
                {props.card.tasks.map((task) => {
                    return <Task key={task.id} task={task} column={props.column} card={props.card} />;
                })}
            </div>
            <CardModal active={active} setActive={setActive} card={props.card} column={props.column} />
        </div>
    );
};

export { Card };
