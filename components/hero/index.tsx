import { SectionImages, SectionText } from "./sections";
import { Wallpaper } from "../Wallpaper";

export const Hero = () => {
    return (
        <section id="home" className="relative w-full h-screen">
            <Wallpaper />
            <SectionText />
            <SectionImages />
        </section>
    );
};
