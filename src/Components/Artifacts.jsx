import axios from "axios";
import { useEffect, useState } from "react";

const Artifacts = () => {
    const [loading, setLoading] = useState(true);
    const [artifacts, setArtifacts] = useState(null);

    useEffect(() => {
        axios
            .get("http://localhost:5000/artifacts/")
            .then((res) => {
                setArtifacts(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching artifacts:", err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <>
                <div className="flex justify-center min-h-screen">
                    <span className="loading loading-ring loading-lg"></span>
                </div>
            </>
        );
    }

    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 p-4 lg:px-20">
            {artifacts &&
                artifacts.map((artifact, index) => (
                    <div key={index} className="group block bg-white rounded-lg shadow hover:shadow-lg">
                        <img
                            src={artifact.artifactImage}
                            alt={artifact.artifactName}
                            className="w-full h-64 object-cover rounded-t-lg"
                        />
                        <div className="p-4">
                            <h3 className="text-gray-900 font-bold text-lg group-hover:underline group-hover:underline-offset-4">
                                {artifact.artifactName}
                            </h3>
                            <p className="mt-2 text-sm text-gray-700">
                                Present Location: <span className="font-medium">{artifact.presentLocation}</span>
                            </p>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default Artifacts;
