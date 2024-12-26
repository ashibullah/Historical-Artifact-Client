const HistoricalArtifactTimeline = () => {
    return (
        <div className="p-6 bg-white rounded-lg shadow-lg flex flex-col items-center mt-6">
            <h2 className="text-2xl font-semibold mb-4 ">Historical Artifact Timeline</h2>
            <div className="space-y-6 ">
                <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/4 p-4">
                        <h3 className="font-semibold">3000 BCE</h3>
                        <p className="text-gray-700">The first known written language (Cuneiform) appears in Mesopotamia, leading to the creation of important historical documents and artifacts.</p>
                    </div>
                    <div className="w-full md:w-1/4 p-4">
                        <h3 className="font-semibold">2000 BCE</h3>
                        <p className="text-gray-700">Ancient Egyptian civilization flourishes with monumental structures such as the Great Pyramids of Giza, and the creation of Egyptian tomb artifacts.</p>
                    </div>
                    <div className="w-full md:w-1/4 p-4">
                        <h3 className="font-semibold">500 BCE</h3>
                        <p className="text-gray-700">Ancient Greek pottery becomes a significant form of historical artifact, providing insights into daily life, mythology, and artistic practices of ancient Greece.</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/4 p-4">
                        <h3 className="font-semibold">300 CE</h3>
                        <p className="text-gray-700">Roman military artifacts, such as weapons, coins, and armor, begin to provide evidence of the Roman Empire's vast influence.</p>
                    </div>
                    <div className="w-full md:w-1/4 p-4">
                        <h3 className="font-semibold">1000 CE</h3>
                        <p className="text-gray-700">Medieval artifacts, such as manuscripts and armor, offer a glimpse into the feudal system, knights, and the early European Renaissance period.</p>
                    </div>
                    <div className="w-full md:w-1/4 p-4">
                        <h3 className="font-semibold">1800s</h3>
                        <p className="text-gray-700">The Industrial Revolution brings about new forms of historical artifacts, such as machinery, tools, and art reflecting the changing world.</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/4 p-4">
                        <h3 className="font-semibold">1900s</h3>
                        <p className="text-gray-700">The 20th century sees the collection and preservation of historical artifacts from world wars, as well as the rise of modern museums and exhibitions.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HistoricalArtifactTimeline;
