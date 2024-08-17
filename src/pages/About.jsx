import React from 'react'

const About = () => {
    return (
        <>
            <div className='pt-20 bg-pink-200 pb-3'>
                <div className='shadow-lg my-3 mx-2 p-2 bg-white rounded-sm'>
                    <h2 className='text-center font-bold text-lg mt-2'>Introduction</h2>
                    <p className='my-2 mx-4'>"Our app transforms written text into natural-sounding speech using advanced AI technology. Whether you're looking to listen to articles, convert text to audio for accessibility, or create custom voice overs, our app has you covered."</p>
                </div>
                
                <div className='shadow-lg my-3 mx-2 p-2 bg-white rounded-sm'>
                    <h2 className='text-center font-bold text-lg t-2'>Purpose and Mission</h2>
                    <p className='my-2 mx-4'>"We created this app to make content more accessible and enjoyable for everyone. Whether you're visually impaired, learning a new language, or simply prefer listening over reading, our app is here to help."</p>
                </div>

                <div className='shadow-lg my-3 mx-2 p-2 bg-white rounded-sm'>
                    <h2 className='text-center font-bold text-lg mt-2'>Technology Behind the App</h2>
                    <p className='my-2 mx-4'>"Our app leverages state-of-the-art speech synthesis models to generate high-quality, natural-sounding speech. The underlying technology is based on MERN Stack including: React, MongoDB, Nodejs and Express Server and tailwind CSS for UI, which ensures accurate and expressive audio output."</p>
                </div>

                <div className='shadow-lg my-3 mx-2 p-2 bg-white rounded-sm'>
                    <h2 className='text-center font-bold text-lg mt-2'>Features</h2>
                    <p className='my-2 mx-4'>"With features like custom voice settings, multi-language support, and seamless audio download options, our app is designed to offer a personalized experience. Users can easily convert any text into audio and share or download the output as needed."</p>
                </div>

                <div className='shadow-lg my-3 mx-2 p-2 bg-white rounded-sm'>
                    <h2 className='text-center font-bold text-lg mt-2'>Data Security</h2>
                    <p className='my-2 mx-4'>"We take user privacy seriously. All text input is processed securely, and no personal data is stored or shared. Your content is your own, and we ensure it remains that way."</p>
                </div>

                <div className='shadow-lg my-3 mx-2 p-2 bg-white rounded-sm'>
                    <h2 className='text-center font-bold text-lg mt-2'>Future Plans</h2>
                    <p className='my-2 mx-4'>"We're constantly working to improve our app. Stay tuned for upcoming features like enhanced voice customization, additional language support, and more!"</p>
                </div>
            </div>
        
        </>
    )
}

export default About
