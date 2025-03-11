const Hero = () => {
    return (
        <section className="py-20 pb-[max(200px,20%)]">
            <div className="container mx-auto text-center">
                <h1 className="text-5xl font-bold text-gray-100 leading-tight mb-6">
                    Welcome to Our Website
                </h1>
                <p className="text-xl text-gray-100 mb-10">
                    Your friendly neighborhood resource for all things related to... (Your website's description)
                </p>
                <div className="flex justify-center"> {/* Center the buttons */}
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg mr-4">
                        Get Started
                    </button>
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-6 rounded-lg">
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;