import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LikedArtifacts = () => {
    const [artifacts, setArtifacts] = useState([]);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (user?.email) {
            axios.get(`https://historical-artifacts-tracker-server-theta.vercel.app/artifacts/likedBy/${user.email}`)
                .then(res => {
                    setArtifacts(res.data);
                    // console.log(res.data);
                })
                .catch(err => {
                    console.error("Error fetching artifacts:", err);
                });
        }
    }, [user]);
    const handleArtifactDetails = (id) => {
        navigate(`/artifacts/${id}`);
    }
    return (
        <div className="overflow-x-auto lg:max-w-6xl mx-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Discovered By</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Render rows */}
                    {artifacts.length > 0 ? (
                        artifacts.map(artifact => (
                            <tr key={artifact._id}>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={artifact.artifactImage || "https://via.placeholder.com/150"}
                                                    alt={artifact.artifactName || "Artifact Image"}
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{artifact.artifactName}</div>
                                            <div className="text-sm opacity-50">{artifact.presentLocation || "Unknown"}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {artifact.artifactType || "Unknown"}
                                    <br />
                              
                                </td>
                                <td>{artifact.discoveredBy || "Unknown"}</td>
                                <th>
                                    <button onClick={()=> handleArtifactDetails(artifact._id)} className="btn bg-red-800 rounded-full text-white  hover:bg-blue-700 btn-xs">Details</button>
                                </th>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="text-center">
                                No artifacts found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default LikedArtifacts;
