import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";


const MyArtifacts = () => {
    const {user} = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const [artifacts, setArtifacts] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`http://localhost:5000/artifacts/user/${user.email}`)
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

    const handleArtifactDetails = (id) => {
        navigate(`/artifacts/${id}`);
    }
    const handleUpdateDetails = (id) => {
        navigate(`/artifacts/update/${id}`);
    }

    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 p-4 lg:px-20">
            {artifacts &&
                artifacts.map((artifact,) => (
                    <div key={artifact._id} className="group  bg-white rounded-lg shadow hover:shadow-lg flex flex-col justify-around">
                        <img
                            src={artifact.artifactImage}
                            alt={artifact.artifactName}
                            className="w-full h-64 object-cover rounded-t-lg"
                        />
                        <div className="p-4 flex flex-col justify-end">
                            <h3 className="text-gray-900 font-bold text-lg group-hover:underline group-hover:underline-offset-4">
                                {artifact.artifactName}
                            </h3>
                            <p className="mt-2 text-sm text-gray-700">
                                Present Location: <span className="font-medium">{artifact.presentLocation}</span>
                            </p>
                            <div className="flex gap-2">
                              <button
                                onClick={()=> handleArtifactDetails(artifact._id)}
                                className="w-1/2 mt-3 bg-red-800 text-white py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition duration-300"
                            >
                                Details
                            </button>
                            <button
                                onClick={()=> handleUpdateDetails(artifact._id)}
                                className="w-1/2 mt-3 bg-red-800 text-white py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition duration-300"
                            >
                                Update
                            </button>  
                            </div>
                            
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default MyArtifacts;