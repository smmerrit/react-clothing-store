import React from 'react';
import './button.styles.scss';


const CustomButton = ({ children,isGoogleSignIn, inverted, ...otherProps}) => (
    <button className={`${isGoogleSignIn ? 'google-sign-in':''} custom-button`} {...otherProps}>
{children}
    </button>
)
export default CustomButton