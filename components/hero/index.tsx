import { SectionImages, SectionText } from "./sections";
import { Wallpaper } from "../Wallpaper";
import VerticalText from "../VerticalText";
import SocialMedia from "../SocialMedia";

export const Hero = () => {
    return (
        <section id="home" className="relative w-full h-screen">
            <Wallpaper />
            <SectionText />
            <SectionImages />
            <VerticalText />
            <SocialMedia />
        </section>
    );
};
