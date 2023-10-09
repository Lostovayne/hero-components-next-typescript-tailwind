import { FC } from "react";
import { RiArrowRightLine } from "react-icons/ri";

interface ButtonProps {
    label: string;
}

export const Button: FC<ButtonProps> = ({ label }) => {
    return (
        <button
            type="button"
            className="flex items-center gap-x-4 text-white uppercase border-b-2 border-transparent py-3 hover:text-primary hover:border-primary transition-colors duration-300"
        >
            {label}
            <RiArrowRightLine size={20} />
        </button>
    );
};
