import "./styles.css";
import Button from "../button/Button";
import email from "../../assets/email.svg";
import phone from "../../assets/phone.svg";
import linkedin from "../../assets/linkedin.svg";
import arrow from "../../assets/arrow.svg";

const Footer = () => {
    return (
        <footer>
            <div className="footer-wrapper">
                <div>
                    <h1>Lets's Create Easier<br /> World Together.</h1>
                </div>
                <div className="button-wrapper">
                    <Button>My GitHub <img className="icon" src={arrow} alt="icon"/></Button>
                </div>
            </div>
            <div className="social-container">
                <p>©2025 Alena Mikešová</p>
                <div className="social-wrapper">
                    <a href="/">  <img src={phone} alt="phone" />Phone</a>
                    <a href="/"> <img src={email} alt="email" /> Email</a>
                    <a href="/"><img src={linkedin} alt="linkedin" />LinkedIn</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;