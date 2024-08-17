import React from 'react';
import Carousel from '../components/Carousel';

const Home = () => {
    const audioUrl = 'path/to/your/audiofile.mp3';

    return (
        <>
            <div className="pt-16 bg-pink-200 min-h-screen relative w-full">
                <Carousel />

                <h2 className="mx-auto text-lg md:text-xl font-bold text-center mt-6 md:mt-9">
                    Download Voice over Website templates.
                </h2>
                <p className="mx-auto text-lg md:text-xl font-bold text-center">
                    Generate With AI
                </p>

                <div className="bg-gray-400 rounded-md mx-4 md:mx-8 my-4 p-4 shadow-md">
                    <textarea
                        name="user_input"
                        id="text"
                        placeholder="Write Your text to convert it into speech"
                        className="bg-white border-2 rounded-md border-blue-600 w-full mt-5 px-4 py-3 focus:outline-none text-sm h-24"
                    />
                    <div className="text-center">
                        <button className="bg-yellow-300 px-4 py-2 rounded-md w-full mx-auto mt-3 hover:opacity-85 font-bold text-sm md:text-base">
                            Generate Voice With AI
                        </button>
                    </div>
                </div>

                <div className="py-2">
                    <div className="audio-player-container mx-4 md:mx-8">
                        <h2 className="text-gray-900 text-lg md:text-xl mb-4 font-medium title-font text-center">
                            Your Audio Speech
                        </h2>
                        <audio controls className="w-full">
                            <source src={audioUrl} type="audio/mp3" />
                            Your browser does not support the audio element.
                        </audio>
                        <div className="my-4 text-center">
                            <a
                                href={audioUrl}
                                download
                                className="text-black bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-sm md:text-base"
                            >
                                Download Audio
                                <span className='mx-2'><i className="fa-solid fa-download"></i></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
