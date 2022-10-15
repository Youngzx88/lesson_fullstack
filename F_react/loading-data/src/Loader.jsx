import React from "react";

const Loader = ({message}) =>{
    return (
        // fragment
        <div className="loader">
            < img src="" alt="loading..." />
            <h2>{message}</h2>
        </div>
    )
}
export default Loader