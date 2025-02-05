import {Element} from "react-scroll"
import Element3D from "./Element3D.jsx";
import {certificates} from "../Constants/Constants";

const AboutMe = () => {
    return (

        <Element name="aboutme">
            <div className="flex flex-col sm:flex-row ">
                <div className="basis-3/4 mx-10 my-5">
                    <h1 className="text-lg md:text-3xl font-bold  ">
                        <span className="text-primary">Tomasz Wiśniewski</span> <br/>stomatolog
                    </h1>
                    <div className="flex flex-col text-sm md:text-xl ">
                        <div className="my-5">
                            <span className="font-bold text-primary">O mnie</span>
                            <p className="text-justify">Jestem absolwentem Uniwersytetu Medycznego w Gdańsku na Wydziale Lekarskim z oddziałem
                                Stomatologicznym. W trakcie studiów byłem aktywnym członkiem Polskiego Towarzystwa
                                Stomatologicznego oraz Koła Naukowego przy Katedrze Stomatologii Ogólnej. W latach
                                2015-2016 odbyłem staż w Klinice Stomatologicznej w Elblągu. W 2016 roku rozpocząłem
                                specjalizację z Chirurgii Stomatologicznej w Centrum Stomatologii w Warszawie, a obecnie
                                kontynuuję szkolenie specjalizacyjne w Wojewódzkim Szpitalu Zespolonym w Elblągu na
                                Oddziale Chirurgii Szczękowo-Twarzowej.
                                Przez kilka lat pracowałem jako wykładowca przedmiotów zawodowych dla przyszłych
                                Higienistek i Asystentek Stomatologicznych.
                                Brałem udział w licznych kursach i szkoleniach z zakresu Chirurgii Stomatologicznej,
                                Stomatologii Zachowawczej oraz Protetyki.
                                Moje główne obszary specjalizacji to chirurgia stomatologiczna, stomatologia zachowawcza
                                z endodoncją oraz protetyka.
                            </p>
                        </div>
                        <div>
                            <span className="font-bold text-primary">Certyfikaty</span>
                            <ul className="list-disc">
                                {certificates.map((certificate, index) => {
                                    return <li key={index}>{certificate}</li>
                                })}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="hidden lg:block basis-1/4  mr-40  z-10">
                    <Element3D/>
                </div>
            </div>
        </Element>
    )
}

export default AboutMe