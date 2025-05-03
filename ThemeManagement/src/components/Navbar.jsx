import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeProviderBaby'
export default function Navbar() {

    const { dark, setDark } = useContext(ThemeContext)
    // console.log(dark);

    useEffect(() => {
        if (dark) {
            document.documentElement.setAttribute("date-theme", "dark")
        } else {
            document.documentElement.setAttribute("date-theme", "")
        }
    }, [dark ])



    return (
        <div className="nav_container">
            <div className='nav_links'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/blog">Blog</Link>
                <button onClick={() => setDark(!dark)}>Change-Theme</button>
            </div>
        </div>
    )
}
