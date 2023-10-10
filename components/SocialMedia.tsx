import { RiInstagramLine, RiLinkedinLine, RiTwitchLine, RiYoutubeLine } from "react-icons/ri";
import ButtonSocial from "./ButtonSocial";

const SocialMedia = () => {
    return (
        <div className="absolute z-30 top-1/2 -translate-y-1/2 right-4  flex flex-col item-center gap-5 ">
            <ButtonSocial>
                <RiInstagramLine size={24} />
            </ButtonSocial>
            <ButtonSocial>
                <RiLinkedinLine size={24} />
            </ButtonSocial>
            <ButtonSocial>
                <RiYoutubeLine size={24} />
            </ButtonSocial>
            <ButtonSocial>
                <RiTwitchLine size={24} />
            </ButtonSocial>
        </div>
    );
};
export default SocialMedia;
