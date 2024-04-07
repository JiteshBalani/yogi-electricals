
const Services = () => {
    return (
        <div className='mx-auto max-w-screen-xl px-6 py-3 bg-black text-white mb-5'>
            <h1 className='text-2xl md:text-3xl lg:text-4xl text-center py-5 border-b-2 font-semibold'>Services</h1>
            <div className='p-10 flex-col space-y-10'>
                <div className='bg-white bg-opacity-10 p-5 rounded-xl  '>
                    <h2 className='text-lg md:text-xl lg:text-2xl font-semibold bg-gray-400 text-black mb-5 px-2 py-2 rounded-xl'>Residential Projects</h2>
                    <div className='md:flex lg:flex justify-between items-center'>
                        <img src="https://live.staticflickr.com/224/516111783_0bcc375c2b_b.jpg" alt='Residential Projects' className=' w-48 border-2 mr-5' />
                        <p className='text-lg md:text-xl lg:text-2xl my-5 text-wrap py-5'>We undertake electrification and MEP work of residential projects.</p>
                    </div>
                </div>
                <div className='bg-white bg-opacity-10 p-5 rounded-xl '>
                    <h2 className='text-lg md:text-xl lg:text-2xl font-semibold text-right bg-gray-400 text-black mb-5 px-2 py-2 rounded-xl'>Commercial Projects</h2>
                    <div className='flex justify-between items-center'>
                        <p className='text-lg md:text-xl lg:text-2xl my-5 text-wrap py-5'>We are specialized in HVAC, HT-LT panel, DG set commercial installations.</p>
                        <img src="https://upload.wikimedia.org/wikipedia/en/4/42/IL%26FS_-_Bandra_Kurla_Complex%2C_Mumbai.jpg" alt='Commercial Projects' className=' w-48 border-2 ' />
                    </div>
                </div>
                <div className='bg-white bg-opacity-10 p-5 rounded-xl '>
                    <h2 className='text-lg md:text-xl lg:text-2xl font-semibold text-left bg-gray-400 text-black mb-5 px-2 py-2 rounded-xl '>Industrial Projects</h2>
                    <div className='flex justify-between items-center'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTff32r_SogqXobO50L5vjQPdvPETJZuSgp3MinMLvdYA&s" alt='Industrial Projects' className=' w-48 border-2 mr-5 ' />
                        <p className='text-lg md:text-xl lg:text-2xl my-5 text-wrap py-5'>We provide turnkey industrial electrification solutions with maximum safety.</p>
                    </div>
                </div>
                <div className='bg-white bg-opacity-10 p-5 rounded-xl '>
                    <h2 className='text-lg md:text-xl lg:text-2xl font-semibold text-right bg-gray-400 text-black mb-5 px-2 py-2 rounded-xl'>Power Transmission & Distribution</h2>
                    <div className='flex justify-between items-center'>
                        <p className='text-lg md:text-xl lg:text-2xl my-5 text-wrap py-5'>We provide substation, power distribution and transmission services.</p>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFuHn_w77uIlOQrJQqj-apXtG0mzboH6iB2JzZWoVAUw&s" alt='Power Transmission & Distribution' className=' w-48 border-2 ' />
                    </div>
                </div>
                <div className='bg-white bg-opacity-10 p-5 rounded-xl '>
                    <h2 className='text-lg md:text-xl lg:text-2xl font-semibold text-left bg-gray-400 text-black mb-5 px-2 py-2 rounded-xl'>Solar Panel Installation</h2>
                    <div className='flex justify-between items-center'>
                        <img src="https://www.constructionworld.in/assets/uploads/53432dbe0bc73681d8588135da5a2a699b9.jpg" alt='Solar' className=' w-48 border-2 mr-5' />
                        <p className='text-lg md:text-xl lg:text-2xl my-5 text-wrap py-5'>We undertake electrification and MEP work of residential projects.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services