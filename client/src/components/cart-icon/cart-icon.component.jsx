import React from 'react'
import {connect } from 'react-redux'
import './cart-icon.styles.scss'
import { ReactComponent as ShoppingIcon} from '../../assets/Shopping_Cart.svg'
import {toggleCartHidden} from '../../redux/cart/cart.actions'
import { selectCartItemsCount }from '../../redux/cart/cart.selectors.js'
import { createStructuredSelector } from 'reselect'

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
       <ShoppingIcon className='shopping-icon' /> 
        <span className='item-count'>{itemCount}</span>
    </div>
)
const mapDispatchToProps = dispatch=> ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount })

export default connect(mapStateToProps, mapDispatchToProps) (CartIcon);