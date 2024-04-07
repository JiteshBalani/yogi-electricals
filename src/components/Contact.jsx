import GoogleMapsIframe from './GoogleMapsIframe'
import AddIcCallTwoToneIcon from '@mui/icons-material/AddIcCallTwoTone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import ShareLocationIcon from '@mui/icons-material/ShareLocation';

const Contact = () => {
    return (
        <div className='mx-auto max-w-screen-xl px-6 py-3 bg-black text-white mb-5'>
            <h1 className='text-2xl md:text-3xl lg:text-4xl text-center py-5 border-b-2 font-semibold mb-5'>Contact</h1>

            <div className='flex flex-wrap justify-center md:justify-around lg:justify-around items-center'>
                <GoogleMapsIframe />
                <div className='flex-col items-center justify-between my-5'>

                    <div className='flex items-center justify-center space-x-2'>
                        <AddIcCallTwoToneIcon style={{ color: 'orange', fontSize: '4rem' }} />
                        <p className='text-lg md:text-xl lg:text-2xl text-center py-5'><a href={"tel:" + +918976516178}>Call us at +91-8976516178</a></p>
                    </div>
                    <div className='flex items-center justify-center space-x-2'>
                        <WhatsAppIcon style={{ color: 'green', fontSize: '4rem' }} />
                        <p className='text-lg md:text-xl lg:text-2xl text-center py-5'><a href='https://wa.me/+918976516178' target='blank'>Text us at +91-8976516178</a></p>
                    </div>
                    <div className='flex items-center justify-center space-x-2'>
                        <MarkEmailUnreadIcon style={{ color: 'blue', fontSize: '4rem' }} />
                        <p className='text-lg md:text-xl lg:text-2xl text-center py-5'>Email: abc@example.com</p>
                    </div>
                    <div className='flex items-center justify-center space-x-2'>
                        <ShareLocationIcon style={{ color: 'red', fontSize: '4rem' }} />
                        <p className='text-lg md:text-xl lg:text-2xl text-center py-5'>Kalyan(W), Maharashtra, IN</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contact