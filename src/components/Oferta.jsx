import {Element} from "react-scroll"
import SpotlightCard from "../utils/SpotlightCard"
import {skills} from "../Constants/Constants";
const Oferta = () => {
    return (
        <Element name="oferta">
            <div className="m-5">
                <h1 className="text-lg font-bold text-primary my-5">Czym się zajmuję ?</h1>
                <div className="flex flex-wrap lg:flex-row gap-5">
                    {skills.map(({ specialization, procedures }, index) => (
                        <SpotlightCard
                            key={index}
                            className="w-[390px] lg:w-[calc(25%-1rem)] custom-spotlight-card text-black bg-white "
                            spotlightColor="rgba(74, 0, 255, 0.2)"
                        >
                            <h3 className="text-xl font-bold">{specialization}</h3>
                            <ul className="list-disc">
                                {procedures.map((procedure, idx) => (
                                    <li key={idx}>{procedure}</li>
                                ))}
                            </ul>
                        </SpotlightCard>
                        ))}
                </div>
            </div>
        </Element>
    )
}

export default Oferta