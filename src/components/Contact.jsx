import Call from '../assets/Contact/call.svg'
import Whatsapp from '../assets/Contact/whatsapp.svg'
import Email from '../assets/Contact/email.svg'
import Location from '../assets/Contact/location.svg'
import GoogleMapsIframe from './GoogleMapsIframe'

const Contact = () => {
    return (
        <div className='mx-auto max-w-screen-xl px-6 py-3 bg-black text-white mb-5'>
            <h1 className='text-2xl md:text-3xl lg:text-4xl text-center py-5 border-b-2 font-semibold mb-5'>Contact</h1>

            <div className='flex flex-wrap justify-around items-center'>
                <GoogleMapsIframe />
                <div className='flex-col items-center justify-around my-5'>

                    <div className='flex items-center justify-center space-x-2'>
                        <img src={Call} alt='Call' className='w-20' />
                        <p className='text-lg md:text-xl lg:text-2xl text-center py-5'><a href={"tel:" + +918976516178}>Call us at +91-8976516178</a></p>
                    </div>
                    <div className='flex items-center justify-center space-x-2'>
                        <img src={Whatsapp} alt='Whatsapp' className=' w-16 ' />
                        <p className='text-lg md:text-xl lg:text-2xl text-center py-5'><a href='https://wa.me/+918976516178' target='blank'>Text us at +91-8976516178</a></p>
                    </div>
                    <div className='flex items-center justify-center space-x-2'>
                        <img src={Email} alt='Email' className=' w-16 ' />
                        <p className='text-lg md:text-xl lg:text-2xl text-center py-5'>Email: abc@example.com</p>
                    </div>
                    <div className='flex items-center justify-center space-x-2'>
                        <img src={Location} alt='Location' className=' w-16 ' />
                        <p className='text-lg md:text-xl lg:text-2xl text-center py-5'>Kalyan(W), Maharashtra, IN</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contact