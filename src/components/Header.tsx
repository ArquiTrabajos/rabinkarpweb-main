import { CustomFlowbiteTheme, Navbar } from "flowbite-react";
import { Link, NavLink, useLocation } from "react-router-dom";

const theme: CustomFlowbiteTheme["navbar"] = {
    link: {
        "base": "block py-2 pl-3 pr-4 md:p-0",
        "active": {
            "on": "bg-orange text-orange dark:text-white md:bg-transparent md:text-orange",
            "off": `border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 
                    dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 
                    md:hover:bg-transparent md:hover:text-lightblue md:dark:hover:bg-transparent 
                    md:dark:hover:text-white`
        },
    }
}

const Header = () => {
    const location = useLocation();


    return (
        <>
            <Navbar fluid className="bg-darkblue py-5 text-white sticky top-0 left-0 w-full h-20" theme={theme} id="header">

                <Navbar.Brand>
                    <span className="self-center whitespace-nowrap text-3xl font-semibold dark:text-white">
                        Rabin-Karp App
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="bg-darkblue" >
                    <NavLink to={"/algoritmo"} >
                        <Navbar.Link as="div" className="text-white text-lg" active={location.pathname === "/algoritmo"} >
                            Simulador del Algoritmo
                        </Navbar.Link>
                    </NavLink>
                    <NavLink to={"/informacion"}>
                        <Navbar.Link as="div" className="text-white text-lg" active={location.pathname === "/informacion"}>
                            ¿Qué es el algoritmo de Rabin-Karp?
                        </Navbar.Link>
                    </NavLink>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Header;