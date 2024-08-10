import React from 'react'

function PrivacyAndPolicy() {
  return (
    <div className='container mt-4'>
        <div className='text-[#fff] px-2 py-1 rounded-md font-semibold text-lg' style={{ background: 'linear-gradient(90deg, rgba(255,99,0,1) 0%, rgba(255,194,103,1) 100%)' }}>Privacy Policy</div>
        <div className="py-3">
            <ul className="list-disc">
                <li className='pb-3'>
                    <span className="font-semibold">Introduction</span><br/>
                    <span>Welcome to Sanjeevani Foundation. We are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you visit our website [www.sanjeevanifoundation.org] and interact with our services.</span><br/>
                </li>
                <li className='pb-3'>
                    <span className="font-semibold">Information We Collect</span><br/>
                    <span><strong>(a) Personal Information:</strong> We may collect personal information that you provide directly, such as your name, email address, phone number, and any other information you provide through our forms, donations, or sign-ups.</span><br/>
                    <span><strong>(b) Non-Personal Information:</strong> We may collect non-personal information automatically, such as IP addresses, browser types, and usage data through cookies and similar technologies.</span><br/>
                </li>
                <li className='pb-3'>
                    <span className="font-semibold">How We Use Your Information</span><br/>
                    <span><strong>(a) Personal Information:</strong> We use your personal information to:</span><br/>
                    <ul className="list-disc pl-5">
                        <li>Process donations and manage fundraising efforts</li>
                        <li>Communicate with you regarding updates, events, and newsletters</li>
                        <li>Respond to your inquiries and provide support</li>
                        <li>Improve our services and website functionality</li>
                    </ul>
                    <span><strong>(b) Non-Personal Information:</strong> We use non-personal information to:</span><br/>
                    <ul className="list-disc pl-5">
                        <li>Analyze website usage and performance</li>
                        <li>Enhance user experience</li>
                        <li>Monitor and prevent fraud</li>
                    </ul>
                </li>
                <li className='pb-3'>
                    <span className="font-semibold">Sharing Your Information</span><br/>
                    <span>We do not sell or rent your personal information to third parties. We may share your information with:</span><br/>
                    <ul className="list-disc pl-5">
                        <li>Service providers who assist us in operating our website and managing donations</li>
                        <li>Legal authorities if required to comply with legal obligations or protect our rights</li>
                    </ul>
                </li>
                <li className='pb-3'>
                    <span className="font-semibold">Data Security</span><br/>
                    <span>We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.</span><br/>
                </li>
                <li className='pb-3'>
                    <span className="font-semibold">Your Rights</span><br/>
                    <span>You have the right to:</span><br/>
                    <ul className="list-disc pl-5">
                        <li>Access, correct, or delete your personal information</li>
                        <li>Opt out of receiving communications from us</li>
                        <li>Request information about the data we hold about you</li>
                    </ul>
                    <span>To exercise these rights, please contact us at [beingsanjeevanifoundation@gmail.com].</span><br/>
                </li>
                <li className='pb-3'>
                    <span className="font-semibold">Cookies</span><br/>
                    <span>Our website uses cookies to enhance your experience. You can set your browser to refuse cookies or alert you when cookies are being sent. However, disabling cookies may affect the functionality of our website.</span><br/>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default PrivacyAndPolicy
