import Nav from "./Nav.jsx";
import Logo from "./Logo.jsx";
import CTAButton from "./CTAButton.jsx";
import { motion, AnimatePresence } from "framer-motion";
import {useState} from "react";
import links from "../Constants/Constants.js";
const Header = () => {
    const [open, setOpen] = useState(false);

    const toggleNavbar = () => {
        setOpen(!open);
    };

    const menuMob = {
        initial: { opacity: 0,x: 200 },
        animate: { opacity: 1, x: 0, transition: { duration: 0.3 } },
        exit: { opacity: 0, x: 200, transition: { duration: 0.3 } },
    };

    return (
        <header className="sticky backdrop-blur-lg md:p-2 top-0 flex-wrap z-20 mx-auto flex w-full items-center justify-between p-4 overflow-hidden">
            <Logo />
            <div className="flex items-center space-x-2 lg:space-x-12 justify-between">
                <CTAButton />
                <nav className="w-1/3 flex justify-end">
                    <div
                        className="hidden md:flex md:items-center space-x-8 lg:space-x-16 md:mr-12 md:justify-between text-nowrap">
                        {links.map((link, index) => (
                            <Nav key={index} toggleNavbar={toggleNavbar} to={link.to} label={link.label}/>
                        ))}
                    </div>

                    <div className="flex items-center justify-between py-2 space-x-6 md:hidden">
                        <label className="btn btn-circle swap swap-rotate md:hidden">
                            <input
                                onClick={toggleNavbar}
                                checked={open}
                                type="checkbox"/>
                            <svg
                                className="swap-off fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 512 512">
                                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/>
                            </svg>

                            <svg
                                className="swap-on fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 512 512">
                                <polygon
                                    points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/>
                            </svg>
                        </label>
                    </div>
                </nav>
            </div>
            <AnimatePresence>
                {open && (
                    <motion.div
                        key="menu"
                        variants={menuMob}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="flex flex-col items-end gap-y-4 mt-4 basis-full md:hidden"
                    >
                        {links.map((link, index) => (
                            <Nav key={index} toggleNavbar={toggleNavbar} to={link.to} label={link.label}/>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;