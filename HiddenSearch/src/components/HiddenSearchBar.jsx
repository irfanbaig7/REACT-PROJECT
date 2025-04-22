import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function HiddenSearchBar() {
    const [showinput, setShowinput] = useState(false);
    const [bgcolor, setBgcolor] = useState("white");

    const handleClick = (e) => {
        setBgcolor("#1a1a1a");

        if (e.target.className === "container") {
            setShowinput(false);
            setBgcolor("#fff");
            console.log("Contanier was Clicked");
            
        }
    };

    return (
        <section
            className="container"
            style={{ backgroundColor: bgcolor }}
            onClick={handleClick}>
            {showinput ? (
                <input type="text" placeholder="Search..." />
            ) : (
                <FaSearch onClick={() => setShowinput(true)} />
            )}
        </section>
    );
}
