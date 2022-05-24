import '../styles/Header.css';
import {LogoInstagram, LogoFacebook, LogoTwitter} from 'react-ionicons';
import logo from "../assets/logos/re/Sign1.jpg"


const Header = () => {
    return (
        <div className="Header">
            
            <div className="header-portion" id="header-1">
                <div className="header-portion-1">
                    Home
                </div>
                <div className="header-portion-1">
                    About
                </div>
                <div className="header-portion-1">
                    Feedback
                </div>
            </div>
            <div className="header-portion" id="header-2">
                <img src={logo} alt="LOGOS" id="logo"></img>
            </div>
            <div className="header-portion" id="header-3">
                <div className="header-portion-3">
                    <LogoFacebook 
                        width="16px"
                        heiht="auto"
                    ></LogoFacebook>
                </div>
                <div className="header-portion-3">
                    <LogoInstagram 
                        width="16px"
                        heiht="auto"
                    ></LogoInstagram>
                </div>
                <div className="header-portion-3">
                    <LogoTwitter 
                        width="16px"
                        heiht="auto"
                    ></LogoTwitter>
                </div>
            </div>
        </div>
    )
}

export default Header;