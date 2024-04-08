import { Carousel, Typography } from "@material-tailwind/react";
import { carousel } from "../utils/carousel";

export function CarouselTransition() {
    return (
        <Carousel transition={{ duration: 2 }} 
        autoplay={true} 
        loop={true} 
        prevArrow={false} 
        nextArrow={false} 
        style={{height: '75vh', marginTop:'5rem'}}
        className="rounded-xl">

        {carousel.map((carousel, index) => (
            <div key={index} className="relative h-full w-full">
                <img
                    src={carousel.image}
                    alt={carousel.alt}
                    className="h-full w-full mx-auto object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                    <div className="w-3/4 text-center md:w-2/4 top-0 bottom-0 mx-auto my-auto">
                        <Typography
                            variant="h1"
                            color="white"
                            className="text-2xl md:text-3xl lg:text-4xl"
                        >
                            {carousel.displayName}
                        </Typography>
                    </div>
                </div>
            </div>
        ))};

       </Carousel>
    );
}