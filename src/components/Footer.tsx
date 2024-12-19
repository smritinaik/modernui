import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="relative w-full bg-black-100 text-gray-100 py-20 px-6" id="contact">
            {/* <div className="relative z-10 flex flex-col items-center">
                
                my text
                <div className="flex flex-col gap-15 max-w-4xl mx-auto mc-10">
                    <h3 className='text-center mt-20 md:mt-0 text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-900'>Ready to take your digital presence to the next level?</h3>
                </div>


                <p className="mt-6 text-center text-gray-300 text-lg max-w-2xl">
                    Reach out to me today and let's discuss how I can help you achieve your goals.
                </p>

            </div> */}

            <div className="relative z-10 mt-16 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between">
                <p className="text-sm md:text-base text-gray-400 text-center md:text-left">
                    © 2024 Smriti Naik. All rights reserved.
                </p>
                <div className="mt-4 md:mt-0 flex space-x-4">
                    <a
                        href="https://github.com/smritinaik"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-300"
                    >
                        <FaGithub size={20} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/smritinaik15/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-300"
                    >
                        <FaLinkedin size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
