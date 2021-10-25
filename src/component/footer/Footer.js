import React from 'react';
import FooterCard from './FooterCard';
import '../../asserts/css/footer.css';


const Footer = () => {
    const links = [
        ['Become a mentor', 'Find mentors', 'Blog', 'Community on Whatsapp'],
        ['About & Contact', 'Refer friends', 'FAQs', 'Community on Telegram'],
        ['Community Charter', 'Terms of Use', 'Privacy Policy', 'Sitemap']
    ]
    return (
        <div className="container footer-body">
            <div className="footer-header-container">
                <div className="brand-box">
                    <h3 className="footer-brand-name">UpFlux</h3>
                </div>
                <div className="social-box">
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-linkedin-in"></i>
                    <i className="fab fa-whatsapp"></i>
                    <i className="fab fa-telegram-plane"></i>
                </div>

            </div>
            <div className="footer-content">
                <div className="my-row">
                    <FooterCard item={links[0]} excep= {false}/>
                    <FooterCard item={links[1]} excep= {false}/>
                    <FooterCard item={links[2]} excep= {true}/>
                </div>

            </div>
        </div>
    )
}

export default Footer
