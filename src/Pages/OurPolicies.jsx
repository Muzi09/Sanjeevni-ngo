import React from 'react'
import ShippingAndDelivery from '../Components/OurPolicies/ShippingAndDelivery'
import CancellationAndRefund from '../Components/OurPolicies/CancellationAndRefund'
import PrivacyAndPolicy from '../Components/OurPolicies/PrivacyAndPolicy'

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