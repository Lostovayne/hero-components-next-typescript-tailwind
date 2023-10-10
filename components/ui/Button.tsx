import { cn } from "@/libs/utils";
import { FC } from "react";
import { RiArrowRightLine } from "react-icons/ri";

interface ButtonProps {
    label: string;
    className?: string;
}

export const Button: FC<ButtonProps> = ({ label, className }) => {
    return (
        <button
            type="button"
            className={cn(
                "flex items-center gap-x-4 text-white uppercase border-b-2 border-transparent py-3 hover:text-primary hover:border-primary transition-colors duration-300",
                className
            )}
        >
            {label}
            <RiArrowRightLine size={20} />
        </button>
    );
};
