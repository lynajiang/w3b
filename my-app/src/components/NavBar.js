import React from 'react'
import {
    Outlet,
    NavLink,
    useLocation
} from "react-router-dom"

import {
    useColorModeValue,
} from "@chakra-ui/react"

import ThemeToggle from "./ThemeToggle"

function NavBar() {
    //Color Definitions
    const linkColor = useColorModeValue("black", "white")
    const hoverColor = useColorModeValue("white", "black")
    const hoverBackColor = useColorModeValue("black", "white");
    const activeColor = useColorModeValue("blue.700", "blue.100");

    const location = useLocation()
    const visiblePaths = ['/', '/about']
    return (
        <div className='navbar'>
            <header>
                <nav>
                    <h1>
                        <NavLink to="/">LJ</NavLink>
                    </h1>
                    <NavLink to="projects">Projects</NavLink>
                    <NavLink to="poloroid">Film</NavLink>
                    <NavLink to="film"> Movie</NavLink>
                    <NavLink to="blog">Blog</NavLink>
                    <NavLink to='art'>Art</NavLink>
                    <ThemeToggle />
                </nav>
            </header>

            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default NavBar
