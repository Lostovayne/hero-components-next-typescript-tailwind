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
            <div className="flex items-center">
                <Card
                    imageSrc="https://img.freepik.com/foto-gratis/impresionante-foto-montana-misurina-alpes-italianos-cielo-nublado_181624-17332.jpg?w=1380&t=st=1696912730~exp=1696913330~hmac=a3927fe2d3ccf7d00a481e9f23cbd777798f702e3c97b431283d7be54b2a01f5"
                    number="02"
                    title="Path to the Montains"
                    buttonText="Explore"
                />
                <Card
                    imageSrc="https://img.freepik.com/foto-gratis/fascinante-vista-montana-sassolungo-italia_181624-42103.jpg?w=1380&t=st=1696912426~exp=1696913026~hmac=dda65239461c05b70a68a7158687b9b95cdb01049e1bfea64d76374cccbaf851"
                    number="03"
                    title="Road Trip"
                    buttonText="See tour"
                />
                <Card
                    imageSrc="https://img.freepik.com/foto-gratis/hermosa-vista-silueta-montanas-cielo-nublado-puesta-sol_181624-33437.jpg?w=1380&t=st=1696912573~exp=1696913173~hmac=65093bf2b844769938603612d58fd7c183b41b1c8854b2ce6e842cf4aed0a8ca"
                    number="04"
                    title="Guide Trip to the forest"
                    buttonText="View"
                />
            </div>
        </section>
    );
};
