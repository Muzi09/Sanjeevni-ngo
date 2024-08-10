import React from 'react'
import ShippingAndDelivery from '../Components/Home/ShippingAndDelivery'
import CancellationAndRefund from '../Components/Home/CancellationAndRefund'
import PrivacyAndPolicy from '../Components/Home/PrivacyAndPolicy'

function OurPolicies() {
    return (
        <>
            <PrivacyAndPolicy />
            <ShippingAndDelivery />
            <CancellationAndRefund />
        </>
    )
}

export default OurPolicies