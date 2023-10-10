import { Card } from "@/components/ui/Card";
import Image from "next/image";

export const SectionImages = () => {
    return (
        <section className="absolute z-20 right-0 bottom-0 w-[60%]">
            <div className="relative w-full h-[50vh] ">
                <Image
                    src="https://img.freepik.com/foto-gratis/escena-bosque-otonal-tranquilo-pico-montana-majestuosa-generada-ia_188544-18359.jpg?w=1380&t=st=1696811288~exp=1696811888~hmac=8b943f3f1d1f599417c22652b59ce03bee7e2d54d55c28f5e6b592362270ed8c"
                    alt="wallpaper"
                    fill
                    className="object-cover"
                />
            </div>
            <div>
                <Card
                    imageSrc="https://img.freepik.com/foto-gratis/camino-rural_1098-13180.jpg?w=1380&t=st=1696900257~exp=1696900857~hmac=4cc7e65521e3f6da2c81fb88cea3f2994d55df48e198319b198f884793f6494e"
                    number="02"
                    title="Path to the Montains"
                    buttonText="Explore"
                />
                <Card
                    imageSrc="https://img.freepik.com/foto-gratis/camino-rural_1098-13180.jpg?w=1380&t=st=1696900257~exp=1696900857~hmac=4cc7e65521e3f6da2c81fb88cea3f2994d55df48e198319b198f884793f6494e"
                    number="02"
                    title="Path to the Montains"
                    buttonText="Explore"
                />
            </div>
        </section>
    );
};
