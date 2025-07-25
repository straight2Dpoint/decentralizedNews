import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Decentralized Marites (News). All rights reserved.</p>
                <p>Follow us on social media for the latest updates!</p>
            </div>
        </footer>
    );
};

export default Footer;