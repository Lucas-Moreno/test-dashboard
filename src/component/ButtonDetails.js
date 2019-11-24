import React from 'react';
import {Link} from "react-router-dom";

const ButtonDetails = () => {
    return(
        <Link to="/">
            <button className="return">
                Retour
            </button>
        </Link>
    )
}

export default ButtonDetails