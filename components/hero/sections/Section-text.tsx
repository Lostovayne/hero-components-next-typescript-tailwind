import { Button } from "@/components/ui/Button";

export const SectionText = () => {
    return (
        <div className="absolute z-30 top-1/2 -translate-y-1/2 left-[10%]">
            <h1 className="text-5xl text-white font-normal">Discover Natural Beauty</h1>
            <h1 className="text-5xl ml-28 text-white font-normal relative before:absolute before:content-[''] before:top-1/2 before:-translate-y-1/2  before:w-20 before:h-2 before:bg-white before:-left-[6.7rem] mb-10">
                Visit Carpathian Montains
            </h1>
            <p className="text-gray-300 max-w-md mb-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis rerum soluta ipsum
                quas iste, voluptas eos maxime aliquid harum sint provident odit quidem beatae
                pariatur optio vitae in similique a.
            </p>
            <Button label="Learn More" />
        </div>
    );
};
