import {Link as ScrollLink} from "react-scroll";

// eslint-disable-next-line react/prop-types
const Nav = ({ toggleNavbar, to, label }) => {
  return (
      <>
          <ScrollLink
              to={to}
              spy={true}
              smooth={true}
              offset={-250}
              duration={700}
              activeClass="font-bold"
              className="cursor-pointer hover:text-gray-950 transition-all sm:text-lg duration-200 group"
              onClick={toggleNavbar}
          >
              {label}
              <div className="bg-amber-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
          </ScrollLink>
      </>
  );
};


export default Nav;