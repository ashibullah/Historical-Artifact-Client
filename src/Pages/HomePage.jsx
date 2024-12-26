import FeaturedArtifact from "../Components/FeaturedArtifact";
import HistoricalArtifactTimeline from "../Components/HistoricalArtifactTimeline";
import MapComponent from "../Components/MapComponent";
import Slider from "../Components/Slider";


const HomePage = () => {
    return (
        <div  className="min-h-screen flex flex-col">
            <div className="flex-grow">
                <Slider/>
                <FeaturedArtifact/>
                <MapComponent/>
                <HistoricalArtifactTimeline/>

            </div>

        </div>
    );
};

export default HomePage;