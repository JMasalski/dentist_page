import {Element} from "react-scroll"
import Element3D from "./Element3D.jsx";

const AboutMe = () => {
    return (

        <Element name="aboutme">
            <div className="flex flex-col sm:flex-row w-full h-screen bg-slate-100 ">
                <div className="basis-3/4 m-10">
                    <h1 className="text-2xl font-bold ">Poznaj mnie</h1>
                    <div></div>
                </div>
                <div className="hidden md:block basis-1/4  mr-40 mt-12  z-10">
                    <Element3D/>
                </div>
            </div>
        </Element>
    )
}

export default AboutMe