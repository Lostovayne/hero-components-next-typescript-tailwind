import Image from "next/image";

export const Wallpaper = () => {
    return (
        <>
            <div className="absolute w-[100vw] h-[100vh] -z-50">
                <Image
                    src="https://img.freepik.com/foto-gratis/escena-bosque-otonal-tranquilo-pico-montana-majestuosa-generada-ia_188544-18359.jpg?w=1380&t=st=1696811288~exp=1696811888~hmac=8b943f3f1d1f599417c22652b59ce03bee7e2d54d55c28f5e6b592362270ed8c"
                    alt="wallpaper"
                    fill
                    className="object-cover"
                />
            </div>

            <div className="absolute w-full h-full bg-[#3c434a]/80 z-10" />
        </>
    );
};
