import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.jpg'
import img5 from '../images/img5.jpg'
import img6 from '../images/img6.jpg'
import img7 from '../images/img7.jpg'
import img8 from '../images/img8.jpg'
import img9 from '../images/img9.jpg'
import img10 from '../images/img10.jpg'
function About(){
    return (
        <div className="content-about">
            <p className="text-left">О нас</p>
            <p className="text-center">Это сборник рецептов, которые каждый может повторить. Не знаете, что приготовить и из каких ингридиентов? Мы вам обязательно поможем, быстро и легко решим проблему и наглядно объясним!</p>
            <div className='images'>
                <img className="d-block w-100" src={img1} alt="img1" width="255" height="279"/>
                <img className="d-block w-100" src={img2} alt="img2" width="255" height="279"/>
                <img className="d-block w-100" src={img3} alt="img3" width="255" height="279"/>
                <img className="d-block w-100" src={img4} alt="img4" width="255" height="279"/>
                <img className="d-block w-100" src={img5} alt="img5" width="255" height="279"/>
                <img className="d-block w-100" src={img6} alt="img6" width="255" height="279"/>
                <img className="d-block w-100" src={img7} alt="img7" width="255" height="279"/>
                <img className="d-block w-100" src={img8} alt="img8" width="255" height="279"/>
                <img className="d-block w-100" src={img9} alt="img9" width="255" height="279"/>
                <img className="d-block w-100" src={img10} alt="img10" width="255" height="279"/>
            </div>
            
        </div>
    );
}



export default About;