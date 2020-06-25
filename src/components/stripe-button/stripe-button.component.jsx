import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51GxveQE8T3CaZ216xUnrg8RIkavUDeE4qYfNDYbk8MNspRBFCj6t3xnckLEq0MeaTSRbCdaArPuVCZZ3wrAMPoaC00Ecie3CNS'
    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }
    return(
        <StripeCheckout
        label='Pay Now'
        name='Clothing Store'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total cost is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey} ></StripeCheckout>

    )
}
export default StripeCheckoutButton