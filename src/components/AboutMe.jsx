import {Element} from "react-scroll"
import Element3D from "./Element3D.jsx";
import {certificates} from "../Constants/Constants";

const AboutMe = () => {
    return (

        <Element name="aboutme">
            <div className="bg-primary md:bg-gradient-to-r from-primary to-stone-50 text-slate-800 flex justify-between item gap-10">
                <div  className=" p-5 md:p-10 lg:p-15 flex flex-col gap-10 text-lg md:text-2xl lg:text-4xl w-full md:w-3/5"> 
                    <div className="flex flex-col gap-5 text-lg md:text-2xl lg:text-4xl items-start">
                            <h1 className="font-bold">John Doe</h1>
                            <p className="text-lg md:text-2xl lg:text-3xl font-semibold">Dentist</p>
                    </div>
                    <div>
                        <p className="text-justify">
                            John Doe, DDS
                            I am a graduate of the University of London, Faculty of Dentistry. During my studies, I was an active member of the British Dental Association and participated in scientific research at the Department of General Dentistry. In 2017-2018, I completed an internship at a renowned Dental Clinic in Manchester.     
                            In 2019, I began my specialization in Oral and Maxillofacial Surgery at the Royal Dental Institute in London, and I am currently continuing my training at St. Thomas’ Hospital in the Department of Oral Surgery.    
                            For several years, I have worked as a lecturer, teaching dental assisting and hygiene programs.    
                            I have participated in numerous courses and training sessions in oral surgery, restorative dentistry, and prosthodontics, constantly improving my skills to provide the highest level of care.
                        </p>
                    </div>
                </div>


                <div className="hidden mt-16 md:block w-2/5">
                    <Element3D/>
                </div>
            </div>
        </Element>
    )
}

export default AboutMe