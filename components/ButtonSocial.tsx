import { FC } from "react";

interface propsButton {
    children: React.ReactNode;
}

const ButtonSocial: FC<propsButton> = ({ children }) => {
    return (
        <button
            type="button"
            className="text-white hover:text-primary transition-colors duration-300"
        >
            {children}
        </button>
    );
};
export default ButtonSocial;
