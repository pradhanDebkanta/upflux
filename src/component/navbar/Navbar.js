import React, { useState, useEffect, useLayoutEffect, } from 'react';
import DeskNav from './DeskNav';
import MobNav from './MobNav';
import brand from '../../asserts/image/logo.png';
import '../../asserts/css/navbar.css';


const Navbar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [size, setSize] = useState();
    const [styleChange, setStyleChange] = useState(false);
    const [inputClass, setInputClass] = useState('');
    const [searchIcon, setSearchIcon] = useState('');
    const [rightItem, setRightItem] = useState('');
    const [toggleOpen, setToggleOpen] = useState(false);
    const [mobileItem, setMobileItem] = useState('');


    useLayoutEffect(() => {
        function newWidth() {
            setSize(window.innerWidth);
        };
        window.addEventListener('resize', () => {
            newWidth();
        });
        newWidth();
        return () => {
            window.removeEventListener('resize', () => {
                newWidth();
            });
        };
    }, []);

    useEffect(() => {
        if (size < 991) {
            setInputClass(() => {
                return `input-box  ex_style  ${styleChange ? "show-box" : "hidden-box"}`
            });
            setSearchIcon(() => {
                return (
                    <div className="search-button" onClick={() => setStyleChange(!styleChange)}>
                        <i className="fas fa-search"></i>  {/* className: search-btn-img */}
                    </div>
                );
            });

            setRightItem(() => {
                return (
                    <div className="toggleBox">
                        {toggleOpen ? <i className="fas fa-times" onClick={() => setToggleOpen(false)}></i>
                            : <i className="fas fa-bars" onClick={() => setToggleOpen(true)}></i>}
                    </div>
                );
            });

            if (toggleOpen) {
                // open
                setMobileItem(() => {
                    return <MobNav />
                })
            } else {
                setMobileItem('');
            }

        } else {
            setInputClass('input-box all_show');
            setSearchIcon(() => {
                return (
                    <div className="search-button" type="submit" onClick={(e) => onClickHandeler(e)}>
                        <i className="fas fa-search"></i>  {/* className: search-btn-img */}
                    </div>
                );
            });
            setRightItem(() => {
                return <DeskNav />
            });

            setMobileItem('');

        }

    }, [size, styleChange, toggleOpen]);


    const onClickHandeler = (e) => {
        e.preventDefault();
        console.log('button submit')


    }
    const onHandleSubmit = (e) => {
        e.preventDefault();
        console.log('form submit')
    }

    // console.log(size)

    return (
        <>
            <div className="navBarContainer">
                <div className="navbarBox">
                    <a className="navbar-brand" href="./" onClick={(e) => e.preventDefault()}>
                        {size > 690 ? <div className="brand-img-box" >
                            <img src={brand} alt="brand logo" className="brand-img" />
                        </div> : <></>}
                        <h5 className="brand-name">UpFlux</h5>
                    </a>

                    <form className="form" onSubmit={(e) => onHandleSubmit(e)}>
                        <div className={inputClass}>
                            <input className="search-input" type="text" value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder='Try "Physics Career Advice"'
                            />
                            {searchTerm.length ?
                                <i className="fas fa-times resetInput" onClick={() => setSearchTerm('')}></i>
                                : <></>
                            }
                        </div>
                        {searchIcon}
                    </form>
                    {rightItem}
                </div>
            </div>
            {mobileItem}
        </>
    )
}

export default Navbar;
