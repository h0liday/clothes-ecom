import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_YpGpheI1p5BWVY8cPOS1Clj700K5ZPpAEw';

    const onToken = ( token ) => {
        console.log(token)
        alert('Payment Successful')
    }

    return (
        <StripeCheckout 
        label='Pay Now'
        name="Clothes Slav"
        billingAddress
        shippingAddress
        image='http://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton