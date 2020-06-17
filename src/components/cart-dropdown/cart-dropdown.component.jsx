import React from 'react'
import CustomButton from '../button/button.component'
import './cart-dropdown.styles.scss'

const CartDropdown = () =>(
    <div className='cart-dropdown'>
        <div className='cart-items'>
            <CustomButton>Go to Checkout</CustomButton>
        </div>
    </div>
)

export default CartDropdown;