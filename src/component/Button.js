import React from 'react';
import {Link} from "react-router-dom";

const Button = () => {
    return(
        <Link to="/details">
            <button className="button__dashboard">
                Voir le détail de l’entreprise
            </button>
        </Link>
    )
}

export default Button