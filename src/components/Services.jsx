import { services } from "../utils/services";
import ReadMore from "../utils/ReadMore";
import { useMediaQuery } from 'react-responsive';

const Services = () => {
    const isSmallScreen = useMediaQuery({ maxWidth: 768 });

    return (
        <div id="services" className='mx-auto max-w-screen-xl md:px-6 lg:px-6 py-3 bg-transparent text-white mb-5'>
            <h1 className='text-2xl md:text-3xl lg:text-4xl text-center py-5 border-b-2 font-semibold'>Services</h1>
            <div className='p-10 flex flex-wrap space-y-10'>

                {services.map((service, index) => (
                    <div key={index} className='bg-gray-500 bg-opacity-10 p-5 rounded-xl '>
                        <h2 className='text-lg md:text-xl lg:text-2xl font-semibold  mb-5 px-2 py-2 text-center w-full border-b-2 '>{service.title}</h2>
                        <div className='md:flex lg:flex justify-center md:justify-between lg:justify-between items-center'>
                            <img src={service.image} alt={service.title} className='w-full md:w-60 lg:w-60 h-60 border-2 mx-auto md:mr-5 lg:mr-5'></img>

                            <p className='text-lg md:text-xl lg:text-2xl my-5 text-wrap py-5 text-center md:text-left lg:text-left'>
                                {isSmallScreen ? <ReadMore>{service.description}</ReadMore> : service.description}
                            </p>

                        </div>
                    </div>
                ))}

                <p className="text-lg md:text-xl lg:text-2xl mt-2 mb-5 text-wrap py-5 text-center md:text-left lg:text-left italic text-purple-400 font-semibold">Have other needs or questions? Reach out to us - we're ready to assist!....</p>

            </div>
        </div>
    )
}

export default Services