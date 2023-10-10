import { SectionImages, SectionText } from "./sections";
import { Wallpaper } from "../Wallpaper";

export const Hero = () => {
    return (
        <section id="home" className="relative w-full h-screen">
            <Wallpaper />
            <SectionText />
            <SectionImages />
            <div className="absolute z-30 top-1/2 -translate-y-1/2 -left-[8.5rem] ">
                <h3 className="text-white font-medium uppercase tracking-[8px] text-sm -rotate-90 relative before:absolute before:w-20 before:h-1 before:bg-white before:-right-28 before:top-1/2 before:-translate-y-1/2">
                    Romanian Mountains
                </h3>
            </div>
        </section>
    );
};
