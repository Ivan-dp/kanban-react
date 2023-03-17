import React from "react";
import "./NewColumnForm.scss";

const NewColumnForm = () => {
    return (
        <div className="NewColumnForm">
            <form>
                <input type="text" />
                <button
                    onClick={(e) => {
                        e.preventDefault();
                    }}
                >
                    Add
                </button>
            </form>
        </div>
    );
};

export { NewColumnForm };
