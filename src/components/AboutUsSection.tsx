import about_us from '../assets/about_us2.jpg'

const AboutUs = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center">
                    {/* Text Content */}
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <h2 className="text-4xl font-bold text-gray-200 mb-4">About Us</h2>
                        <p className="text-lg text-gray-300 mb-4">
                            We are a passionate team dedicated to delivering innovative solutions that make a difference.
                            With years of experience and a commitment to excellence, we strive to exceed expectations and
                            create value for our clients.
                        </p>
                        <p className="text-lg text-gray-300">
                            Our mission is to empower businesses and individuals through technology, creativity, and collaboration.
                            Let’s build something amazing together!
                        </p>
                        <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                            Learn More
                        </button>
                    </div>
                    {/* Image */}
                    <div className="md:w-1/2">
                        <img
                            src={about_us}
                            alt="About Us"
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;