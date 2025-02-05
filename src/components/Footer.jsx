import {FacebookIcon, InstagramIcon, Mail, MapPin, Phone, StarIcon} from "lucide-react";
import CTAButton from "./CTAButton.jsx";
import {Element} from "react-scroll";

const Footer = () => {
    return (
        <Element name="gdzie">
            <footer className="bg-primary text-white p-8">
                <div className="flex flex-col md:flex-row justify-around gap-10">
                    <div className="flex flex-col gap-5">
                        <h2 className="text-lg font-bold">Kontakt</h2>
                        <ContactInfo icon={<MapPin size="1.5em"/>} text="ul. Słowackiego 1, 82-300 Elbląg"/>
                        <ContactInfo icon={<Phone size="1.5em"/>} text="tel. 55 233 33 33"/>
                        <ContactInfo icon={<Mail size="1.5em"/>} text="e-mail: przykladowy@mail.com"/>
                        <CTAButton className="w-full md:w-[350px]" text={<p>Skontaktuj się</p>}/>
                    </div>

                    <div className="flex flex-col gap-5">
                        <h2 className="text-lg font-bold">Godziny otwarcia</h2>
                        <p>Pon-Pt: 08:00 - 18:00</p>
                        <p>Sobota: 09:00 - 14:00</p>
                        <p>Niedziela: Zamknięte</p>
                    </div>



                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1167.9269940086974!2d19.41325541193349!3d54.16495010000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd4dbb2aad1d29%3A0x685ec0fdbca25868!2sPerfekt%20Dent%20Centrum%20Stomatologiczne!5e0!3m2!1spl!2spl!4v1738767781776!5m2!1spl!2spl"
                        width="300" height="300" style={{border: 0}} allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>

                <div className="mt-6 border-t border-white/30 pt-4 text-sm text-center">
                    <p className="text-gray-300">&copy; 2025 Gabinet Stomatologiczny. Wszelkie prawa zastrzeżone.</p>
                </div>
            </footer>
        </Element>
    );
};

const ContactInfo = ({icon, text}) => (
    <div className="flex gap-2 items-center">
        {icon} <p className="text-sm">{text}</p>
    </div>
);

export default Footer;