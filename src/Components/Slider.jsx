const Slider = () => {
    return (
        <div className="carousel w-full overflow-hidden">
            <div id="slide1" className="carousel-item relative w-full" style={{ height: "50vh" }}>
                <div
                    className="bg-cover bg-center w-full text-white"
                    style={{
                        backgroundImage: `url(https://images.pexels.com/photos/36006/renaissance-schallaburg-figures-facade.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
                    }}
                >
                    <div className="flex flex-col justify-center p-10 sm:p-20 md:p-32 lg:p-40 space-y-4 sm:space-y-6 md:space-y-8 bg-black/50 h-full">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                            Renaissance Masterpieces
                        </h1>
                        <p className="text-sm sm:text-base md:text-lg">
                            Explore the intricate artistry of the Renaissance era. Each figure and facade tells a story of cultural rebirth, innovation, and human creativity.
                        </p>
                    </div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide2" className="carousel-item relative w-full" style={{ height: "50vh" }}>
                <div
                    className="bg-cover bg-center w-full text-white"
                    style={{
                        backgroundImage: `url(https://images.pexels.com/photos/2422253/pexels-photo-2422253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
                    }}
                >
                    <div className="flex flex-col justify-center p-10 sm:p-20 md:p-32 lg:p-40 space-y-4 sm:space-y-6 md:space-y-8 bg-black/50 h-full">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                            Ancient Architecture
                        </h1>
                        <p className="text-sm sm:text-base md:text-lg">
                            Discover the enduring legacy of ancient architecture, where every structure reflects the ingenuity and vision of civilizations long past.
                        </p>
                    </div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide3" className="carousel-item relative w-full" style={{ height: "50vh" }}>
                <div
                    className="bg-cover bg-center w-full text-white"
                    style={{
                        backgroundImage: `url(https://images.pexels.com/photos/14708381/pexels-photo-14708381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
                    }}
                >
                    <div className="flex flex-col justify-center p-10 sm:p-20 md:p-32 lg:p-40 space-y-4 sm:space-y-6 md:space-y-8 bg-black/50 h-full">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                            Timeless Relics
                        </h1>
                        <p className="text-sm sm:text-base md:text-lg">
                            Uncover the stories behind timeless relics that have withstood the test of time, preserving the essence of human history and culture.
                        </p>
                    </div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide4" className="carousel-item relative w-full" style={{ height: "50vh" }}>
                <div
                    className="bg-cover bg-center w-full text-white"
                    style={{
                        backgroundImage: `url(https://images.pexels.com/photos/161863/edinburgh-carlton-hill-landscape-scotland-161863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
                    }}
                >
                    <div className="flex flex-col justify-center p-10 sm:p-20 md:p-32 lg:p-40 space-y-4 sm:space-y-6 md:space-y-8 bg-black/50 h-full">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                            Echoes of the Past
                        </h1>
                        <p className="text-sm sm:text-base md:text-lg">
                            Walk through landscapes rich with history, where every corner holds echoes of a distant past waiting to be explored.
                        </p>
                    </div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Slider;
