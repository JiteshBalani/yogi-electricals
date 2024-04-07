import GoogleMapsIframe from './GoogleMapsIframe'
import AddIcCallTwoToneIcon from '@mui/icons-material/AddIcCallTwoTone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const Contact = () => {
    return (
        <div id='contact' className='mx-auto max-w-screen-xl px-6 py-3 bg-black text-white mb-5'>
            <h1 className='text-2xl md:text-3xl lg:text-4xl text-center py-5 border-b-2 font-semibold mb-5'>Contact</h1>

            <div className='flex flex-wrap justify-center md:justify-around lg:justify-around items-center'>
                <GoogleMapsIframe />
                <div className='flex-col items-center justify-between my-5'>

                    <div className='flex items-center justify-center space-x-2'>
                        <AddIcCallTwoToneIcon style={{ color: '#F4680E', fontSize: '4rem' }} />
                        <p className='text-lg md:text-xl lg:text-2xl text-center py-5'><a href={"tel:" + +918976516178}>Call us at +91-8976516178</a></p>
                    </div>
                    <div className='flex items-center justify-center space-x-2'>
                        <WhatsAppIcon style={{ color: '#F4680E', fontSize: '4rem' }} />
                        <p className='text-lg md:text-xl lg:text-2xl text-center py-5'><a href='https://wa.me/+918976516178' target='blank'>Text us at +91-8976516178</a></p>
                    </div>
                    <div className='flex items-center justify-center space-x-2'>
                        {/* <MarkEmailUnreadIcon style={{ color: '#F4680E', fontSize: '4rem' }} /> */}
                        <MarkEmailUnreadOutlinedIcon style={{ color: '#F4680E', fontSize: '4rem' }} />
                        <p className='text-lg md:text-xl lg:text-2xl text-center py-5'><a href="mailto:someone@example.com" target='blank'>someone@example.com</a></p>
                    </div>
                    <div className='flex items-center justify-center space-x-2'>
                        <LocationOnOutlinedIcon style={{ color: '#F4680E', fontSize: '4rem'}} />
                        <p className='text-lg md:text-xl lg:text-2xl text-center py-5'>Kalyan(W), Maharashtra</p>
                    </div> 

                </div>
            </div>
        </div>
    )
}

export default Contact