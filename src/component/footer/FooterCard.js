import React, { useState, useEffect } from 'react';
import '../../asserts/css/footer.css';


const FooterCard = ({ item, excep }) => {
    const [listItem, setListItem] = useState('');
    useEffect(() => {
        if (!excep) {
            let totalItem = item.map((link, idx) => {
                return (
                    <a href="./" className="footer-link" onClick={(e) => { e.preventDefault() }} key={idx}>{link}</a>
                );
            });
            setListItem(() => {
                return (
                    <div className="footer-card">
                        {totalItem}
                    </div>
                );
            });
        }
        if (excep) {
            let totalItem = item.map((link, idx) => {
                return (
                    <a href="./" className="footer-link-excep" onClick={(e) => { e.preventDefault() }} key={idx}>{link}</a>
                );
            });
            setListItem(() => {
                return (
                    <div className="footer-card-excep">
                        {totalItem}
                    </div>
                );
            });

        }
    }, [])
    return (
        <div className="col-lg-3">
            {listItem}
        </div>
    )
}

export default FooterCard;
