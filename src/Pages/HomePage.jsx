import FeaturedArtifact from "../Components/FeaturedArtifact";
import Slider from "../Components/Slider";


const HomePage = () => {
    return (
        <div  className="min-h-screen flex flex-col">
            <div className="flex-grow ">
                <Slider/>
                <FeaturedArtifact/>
            </div>

        </div>
    );
};

export default HomePage;