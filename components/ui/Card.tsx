import Image from "next/image";
import { FC } from "react";
import { Button } from "./Button";

interface CardProps {
    imageSrc: string;
    number: string;
    title: string;
    buttonText: string;
}

export const Card: FC<CardProps> = ({ imageSrc, number, title, buttonText }) => {
    return (
        <div className="relative w-full h-72">
            <Image src={imageSrc} alt={title} fill className="object-cover" />
            <h5
                className="absolute left-4 top-4 text-white
             font-semibold text-5xl  "
            >
                {number}
            </h5>
            <h3
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white
             font-semibold text-2xl max-w-[150px]"
            >
                {title}
            </h3>
            <Button label={buttonText} className="absolute left-4 bottom-4 border-white" />
        </div>
    );
};
