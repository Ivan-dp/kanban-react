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
            <div className="Column__body">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quisquam quam illum doloribus magnam ad accusantium consequuntur, vitae quasi doloremque et veritatis voluptate rerum
                    debitis obcaecati itaque odit. Sed, voluptatem. Fuga, beatae aut! Voluptatum praesentium quisquam minus tempora ad id officiis velit nisi quaerat harum quo cupiditate, dolorem rem
                    enim hic suscipit reiciendis placeat facere veritatis quos soluta? Vero, excepturi! Ex, adipisci. Ab labore et consequuntur saepe optio adipisci suscipit sunt qui quam fugit! Natus
                    harum esse blanditiis. Harum nobis ipsam aliquam iste a est iusto labore provident at excepturi! Officiis facere nisi veritatis soluta magni consequatur quibusdam nulla quo hic
                    vitae nesciunt voluptatem deleniti delectus, corporis eligendi doloremque! Sunt tempora iure quae consequatur dolore expedita eveniet, voluptatibus iusto corrupti? Praesentium nisi
                    repellendus velit dolorum fugit veniam optio reiciendis at eius autem harum rem aliquam, libero dicta corrupti. Debitis, fuga! Ad vel explicabo dolorem harum magnam cum vero
                    voluptate iusto! Dolor, fuga tempora placeat adipisci harum eaque magni! Repellat eius sed officia numquam ipsa sapiente necessitatibus, id, inventore accusantium commodi, deleniti
                    adipisci corrupti! Consequuntur expedita impedit assumenda temporibus, reprehenderit et! Ipsum reiciendis rerum nemo perferendis deserunt odit? Deleniti, optio molestias! Natus
                    harum dolorum nostrum distinctio? Accusamus, doloremque. Inventore culpa vel iure mollitia fuga dolorem dignissimos reprehenderit beatae, perspiciatis commodi suscipit! Nihil
                    numquam incidunt doloribus cupiditate alias voluptatem asperiores et, nisi sequi tempora optio culpa nesciunt accusamus repellat cumque quod enim. Quo fugit odit voluptates soluta
                    eius laborum dolor commodi culpa. Minus, quia accusamus ex perspiciatis labore minima dolore expedita odit sunt nulla temporibus necessitatibus tempore officiis asperiores
                    repellendus voluptatum inventore accusantium nemo vitae distinctio. Accusantium eos natus corrupti qui doloribus. Repellat amet pariatur architecto magni. Ratione doloribus facilis
                    iusto cumque est illum minima dolor voluptas, aliquid nihil blanditiis ducimus quae laboriosam officia provident, unde eaque dicta earum dolorum deserunt quos.
                </p>
            </div>
        </div>
    );
};

export { Column };
