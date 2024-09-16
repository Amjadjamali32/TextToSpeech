import React, {useState} from 'react';
import Carousel from '../components/Carousel';
import axios from "axios"

const HomePage = () => {
    const [text, setText] = useState('');
    const [language, setLanguage] = useState('en'); // Default language is English
    const [audioUrl, setAudioUrl] = useState('https://gaana.com/song/tu-hai-ki-nahi');

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
    };

    const handleGenerateVoice = async () => {
        try {
            const response = await axios.post('http://your-backend-url/convert-text-to-speech', {
                text,
                language,
            });

            if (response.status === 200) {
                setAudioUrl(response.data.audioUrl); // Assuming your backend returns the URL of the generated audio
            } else {
                console.error('Failed to generate voice');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
            <div className="pt-16 min-h-screen relative w-full pb-3">
                <Carousel />

                <h2 className="text-slate-900 mx-auto text-xl md:text-lg font-bold text-center mt-6 md:mt-9">
                    Convert Your Text into AI Generated Speech.
                </h2>
                <p className="mx-auto text-lg md:text-xl font-bold text-red-500 text-center mt-3">
                    Generate Voice With AI
                </p>

                <div className="bg-gray-400 rounded-md mx-4 md:mx-8 my-4 p-4 shadow-md">
                    <textarea
                        name="user_input"
                        id="text"
                        placeholder="Write Your text to convert it into speech"
                        value={text}
                        onChange={handleTextChange}
                        className="bg-white border-2 rounded-md border-blue-600 w-full mt-5 px-4 py-3 focus:outline-none text-sm h-24 placeholder-gray-500"
                    />

                    <div className="my-4">
                        <label htmlFor="language" className="block text-gray-600 text-sm font-bold mb-2">
                            Select Language:
                        </label>
                        <select
                            id="language"
                            value={language}
                            onChange={handleLanguageChange}
                            className="bg-white border-2 rounded-md border-blue-600 w-full px-4 py-2 focus:outline-none text-sm"
                        >
                            <option value="en">English</option>
                            <option value="es">Spanish</option>
                            <option value="fr">French</option>
                            <option value="sv">Swedish</option>
                            <option value="nl">Dutch</option>
                            <option value="de">German</option>
                            <option value="it">Italian</option>
                            <option value="pt">Portuguese</option>
                            <option value="da">Danish</option>
                            <option value="hu">Hungarian</option>
                            <option value="cs">Czech</option>
                        </select>
                    </div>

                    <div className="text-center my-3">
                        <button
                            onClick={handleGenerateVoice}
                            className="bg-yellow-300 px-4 py-2 rounded-md w-full mx-auto mt-3 hover:opacity-85 font-bold text-sm md:text-base text-gray-900"
                        >
                            Generate Voice With AI
                        </button>
                    </div>
                </div>

                {audioUrl && (
                    <div className="py-2">
                        <div className="audio-player-container mx-4 md:mx-8">
                            <h2 className="text-slate-900 text-lg md:text-xl mb-4 font-medium title-font text-center">
                                Your Audio Speech
                            </h2>
                            <audio controls className="w-full">
                                <source src={audioUrl} type="audio/mp3" />
                                Your browser does not support the audio element.
                            </audio>
                            <div className="my-5 text-center">
                                <a
                                    href={audioUrl}
                                    download
                                    className="text-black bg-amber-400 border-0 py-2 px-5 focus:outline-none hover:bg-amber-500 rounded text-sm md:text-base"
                                >
                                    Download Audio
                                    <span className='mx-2'><i className="fa-solid fa-download text-slate-900"></i></span>
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default HomePage;
