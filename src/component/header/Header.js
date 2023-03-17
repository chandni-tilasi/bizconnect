import React from 'react'
import "./Header.css"
import Button from '../button/Button';
function Header() {
    return (
        <div className='top-container'>
            <div className='headerContainer'>
                <div className='left'>
                    <img className='logo' src='https://download.logo.wine/logo/Monday.com/Monday.com-Logo.wine.png' />
                </div>
                <div className='right'>
                    <div className='contact'>Contact sales</div>
                    <Button
                        height={"40px"}
                        width={"150px"}
                        backgroundColor={"blue"}
                        borderRadius={"20px"}
                        border={"none"}
                        fontColor={"white"}
                        fontSize={"16px"}
                        hover={"0.7"}

                    >
                        Get Started
                    </Button>
                </div>
            </div>
        </div>
    )
}
export default Header;