import React from "react";

function Posting() {
    return (
        <div>
            <div>
                {props.data.price}
            </div>
            <img src={props.data.imageURL} alt={props.data.title} />

        </div>
    )
}

export default Posting