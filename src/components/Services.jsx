
const Services = () => {
    return (
        <div id="services" className='mx-auto max-w-screen-xl md:px-6 lg:px-6 py-3 bg-black text-white mb-5'>
            <h1 className='text-2xl md:text-3xl lg:text-4xl text-center py-5 border-b-2 font-semibold'>Services</h1>
            <div className='p-10 flex flex-wrap space-y-10'>
                <div className='bg-white bg-opacity-10 p-5 rounded-xl  '>
                    <h2 className='text-lg md:text-xl lg:text-2xl font-semibold  mb-5 px-2 py-2 text-center w-full border-b-2 '>Residential Projects</h2>
                    <div className='md:flex lg:flex justify-center md:justify-between lg:justify-between items-center'>
                        <img src="https://live.staticflickr.com/224/516111783_0bcc375c2b_b.jpg" alt='Residential Projects' className='w-3/4 md:w-48 lg:w-48 border-2 mx-auto md:mr-5 lg:mr-5' />
                        <p className='text-lg md:text-xl lg:text-2xl my-5 text-wrap py-5 text-center md:text-left lg:text-left'>We undertake electrification and MEP work of residential projects.</p>
                    </div>
                </div>
                <div className='bg-white bg-opacity-10 p-5 rounded-xl '>
                    <h2 className='text-lg md:text-xl lg:text-2xl font-semibold text-center mb-5 px-2 py-2 border-b-2'>Commercial Projects</h2>
                    <div className='md:flex lg:flex justify-center md:justify-between lg:justify-between items-center'>
                        <img src="https://upload.wikimedia.org/wikipedia/en/4/42/IL%26FS_-_Bandra_Kurla_Complex%2C_Mumbai.jpg" alt='Commercial Projects' className='w-3/4 md:w-48 lg:w-48 border-2 mx-auto md:mr-5 lg:mr-5' />
                        <p className='text-lg md:text-xl lg:text-2xl my-5 text-wrap py-5 text-center md:text-left lg:text-left'>We are specialized in HVAC, HT-LT panel, DG set commercial installations.</p>
                    </div>
                </div>
                <div className='bg-white bg-opacity-10 p-5 rounded-xl '>
                    <h2 className='text-lg md:text-xl lg:text-2xl font-semibold text-center mb-5 px-2 py-2 border-b-2'>Industrial Projects</h2>
                    <div className='md:flex lg:flex justify-center md:justify-between lg:justify-between items-center'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTff32r_SogqXobO50L5vjQPdvPETJZuSgp3MinMLvdYA&s" alt='Industrial Projects' className='w-3/4 md:w-48 lg:w-48 border-2 mx-auto md:mr-5 lg:mr-5' />
                        <p className='text-lg md:text-xl lg:text-2xl my-5 text-wrap py-5 text-center md:text-left lg:text-left'>We provide turnkey industrial electrification solutions with maximum safety.</p>
                    </div>
                </div>
                <div className='bg-white bg-opacity-10 p-5 rounded-xl '>
                    <h2 className='text-lg md:text-xl lg:text-2xl font-semibold text-center mb-5 px-2 py-2 border-b-2'>Power Transmission & Distribution</h2>
                    <div className='md:flex lg:flex justify-center md:justify-between lg:justify-between items-center'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFuHn_w77uIlOQrJQqj-apXtG0mzboH6iB2JzZWoVAUw&s" alt='Power Transmission & Distribution' className='w-3/4 md:w-48 lg:w-48 border-2 mx-auto md:mr-5 lg:mr-5' />
                        <p className='text-lg md:text-xl lg:text-2xl my-5 text-wrap py-5 text-center md:text-left lg:text-left'>We provide substation, power distribution and transmission services.</p>
                    </div>
                </div>
                <div className='bg-white bg-opacity-10 p-5 rounded-xl '>
                    <h2 className='text-lg md:text-xl lg:text-2xl font-semibold text-center mb-5 px-2 py-2 border-b-2'>Solar Panel Installation</h2>
                    <div className='md:flex lg:flex justify-center md:justify-between lg:justify-between items-center'>
                        <img src="https://www.constructionworld.in/assets/uploads/53432dbe0bc73681d8588135da5a2a699b9.jpg" alt='Solar' className='w-3/4 md:w-48 lg:w-48 border-2 mx-auto md:mr-5 lg:mr-5' />
                        <p className='text-lg md:text-xl lg:text-2xl my-5 text-wrap py-5 text-center md:text-left lg:text-left'>We undertake electrification and MEP work of residential projects.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services