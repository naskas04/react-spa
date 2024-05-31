import vk from '../icons/vk.png'
import tg from '../icons/tg.png'
import wht from '../icons/whtsapp.png'


function Contact(){
    return (
        <div className='contact-content'>
            <h5>Москва, ул. Тверская, 56</h5>
            <h5>Телефон: 8-800-355-75-75</h5>
            <div className='logoContent'>
                <img className="logo-block" src={vk} alt="img1" width="48" height="48"/>
                <img className="logo-block" src={tg} alt="img2" width="48" height="48"/>
                <img className="logo-block" src={wht} alt="img3" width="48" height="48"/>
            </div>
        </div>
        
    );
}



export default Contact;