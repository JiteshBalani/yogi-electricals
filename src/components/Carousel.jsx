import { Carousel, Typography } from "@material-tailwind/react";
import Residential from "../assets/Residential Projects.jpg"
import Commercial from "../assets/Commercial Projects.jpg"
import Industrial from "../assets/Industrial Projects.jpg"
import PowerTransmission from "../assets/Power Transmission.jpg"
import Solar from "../assets/Solar.jpg"


export function CarouselTransition() {
    return (
        <Carousel transition={{ duration: 2 }} 
        autoplay={true} 
        loop={true} 
        prevArrow={false} 
        nextArrow={false} 
        style={{height: '75vh', marginTop:'5rem'}}
        className="rounded-xl">
            <div className="relative h-full w-full">
                <img
                    src={Residential}
                    alt="Residential Projects"
                    className="h-full w-full mx-auto object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                    <div className="w-3/4 text-center md:w-2/4 top-0 bottom-0 mx-auto my-auto">
                        <Typography
                            variant="h1"
                            color="white"
                            className="text-2xl md:text-3xl lg:text-4xl"
                        >
                            Residential
                        </Typography>
                    </div>
                </div>
            </div>
            <div className="relative h-full w-full">
                <img
                    src={Commercial}
                    alt="Commercial Projects"
                    className="h-full w-full mx-auto object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                    <div className="w-3/4 text-center md:w-2/4 top-0 bottom-0 mx-auto my-auto">
                        <Typography
                            variant="h1"
                            color="white"
                            className="text-2xl md:text-3xl lg:text-4xl"
                        >
                            Commercial
                        </Typography>
                    </div>
                </div>
            </div>
            <div className="relative h-full w-full">
                <img
                    src={Industrial}
                    alt="Industrial Projects"
                    className="h-full w-full mx-auto object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                    <div className="w-3/4 text-center md:w-2/4 top-0 bottom-0 mx-auto my-auto">
                        <Typography
                            variant="h1"
                            color="white"
                            className="text-2xl md:text-3xl lg:text-4xl"
                        >
                            Industrial
                        </Typography>
                    </div>
                </div>
            </div>
            <div className="relative h-full w-full">
                <img
                    src={PowerTransmission}
                    alt="Power Transmission"
                    className="h-full w-full mx-auto object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                    <div className="w-3/4 text-center md:w-2/4 top-0 bottom-0 mx-auto my-auto">
                        <Typography
                            variant="h1"
                            color="white"
                            className="text-2xl md:text-3xl lg:text-4xl"
                        >
                            Power Transmission
                        </Typography>
                    </div>
                </div>
            </div>
            <div className="relative h-full w-full">
                <img
                    src={Solar}
                    alt="Solar"
                    className="h-full w-full mx-auto object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                    <div className="w-3/4 text-center md:w-2/4 top-0 bottom-0 mx-auto my-auto">
                        <Typography
                            variant="h1"
                            color="white"
                            className="text-2xl md:text-3xl lg:text-4xl"
                        >
                            Solar Energy
                        </Typography>
                    </div>
                </div>
            </div>

        </Carousel>
    );
}