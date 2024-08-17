import React from 'react';

const Contact = () => {
    return (
        <>
            <section className="text-gray-600 body-font relative bg-pink-200">
                <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 overflow-hidden sm:mr-10 flex items-end justify-start relative">
                        {/* Adjust parent div to ensure full height */}
                        <div className="w-full h-[450px]">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114514.27623939054!2d68.32046526759844!3d26.243121100326572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394a4cb563f028e5%3A0x93d25e06c0ec002d!2sNawabshah%2C%20Shaheed%20Benazirabad%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1723828131850!5m2!1sen!2s" 
                                width="100%" 
                                height="100%" 
                                style={{ border: "0" }} 
                                allowFullScreen="" 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
                        <p className="leading-relaxed mb-5 text-gray-600">Post a Feedback about our app and ask if you have any question related to the app.</p>
                        <div className="relative mb-4">
                            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                            <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-blue-700 focus:ring-2 focus:ring-blue-700 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Your name' />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-blue-700 focus:ring-2 focus:ring-blue-700 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="Your email address"/>
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                            <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-blue-700 focus:ring-2 focus:ring-blue-700 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" placeholder='Write a message...'></textarea>
                        </div>
                        <button className="text-black bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-sm">Submit</button>
                        <p className="text-xs text-gray-500 mt-3">Feel free to get in touch with us. We will respond you as soon as possible.</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
