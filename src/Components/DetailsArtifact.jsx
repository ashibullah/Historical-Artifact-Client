import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { BiLike, BiSolidLike } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import { toast } from "react-toastify";

const DetailsArtifact = () => {
    const {user} = useContext(AuthContext);
    const { id } = useParams(); 
    const [artifact, setArtifact] = useState(null);
    const [loading, setLoading] = useState(true);
    const [liked, setLiked] = useState(null);
    const [likeCount, setLikeCount] = useState(null)
    const handleLike = () => {
        if(!liked){
            // this will like  
            axios.patch(`https://historical-artifacts-tracker-server-theta.vercel.app/like/${id}`, {email : user.email})
            .then(res => {
                console.log(res.data)
                toast.success("You've liked it");
                setLikeCount(likeCount+1);

            })    
        }
        else{
            //this will unlike 
            axios.patch(`https://historical-artifacts-tracker-server-theta.vercel.app/unlike/${id}`, {email : user.email})
            .then(res => {
                console.log(res.data)
                toast("You've unlike it")
                setLikeCount(likeCount-1);

            })
        }
        setLiked(!liked);
      };
    
      
    useEffect(() => {
        axios
            .get(`https://historical-artifacts-tracker-server-theta.vercel.app/artifacts/${id}`)
            .then((res) => {
                setArtifact(res.data);
                // console.log(artifact);
                setLoading(false);
                // console.log(artifact.likedBy.includes(user.email))
                if (res.data.likedBy && res.data.likedBy.includes(user.email)) {
                    setLiked(true);
                    setLikeCount(res.data.likedBy.length);
                } else {
                    setLiked(false);
                }
                
                
            })
            .catch((err) => {
                console.error("Error fetching artifact details:", err);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return (
            <div className="flex justify-center min-h-screen">
                <span className="loading loading-ring loading-lg"></span>
            </div>
        );
    }

    if (!artifact) {
        return (
            <div className="flex justify-center min-h-screen">
                <p className="text-red-600 font-medium">Artifact not found.</p>
            </div>
        );
    }

    return (
        <div className="lg:max-w-6xl mx-auto p-6 lg:flex gap-4 ">
            <img
                src={artifact.artifactImage}
                alt={artifact.artifactName}
                className="w-full h-96 object-cover rounded-lg mb-6"
            />
            <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{artifact.artifactName}</h1>
            <p className="text-gray-700 mb-2">
                <span className="font-semibold">Type:</span> {artifact.artifactType}
            </p>
            <p className="text-gray-700 mb-2">
                <span className="font-semibold">Historical Context:</span> {artifact.historicalContext}
            </p>
            <p className="text-gray-700 mb-2">
                <span className="font-semibold">Created At:</span> {artifact.createdAt}
            </p>
            <p className="text-gray-700 mb-2">
                <span className="font-semibold">Discovered At:</span> {artifact.discoveredAt}
            </p>
            <p className="text-gray-700 mb-2">
                <span className="font-semibold">Discovered By:</span> {artifact.discoveredBy}
            </p>
            <p className="text-gray-700 mb-2">
                <span className="font-semibold">Present Location:</span> {artifact.presentLocation}
            </p>
            <p className="text-gray-700">
                <span className="font-semibold">Added By:</span> {artifact.addedBy.name} ({artifact.addedBy.email})
            </p>
            <div className="flex items-center gap-3">
              <button onClick={handleLike} className="mt-4 text-3xl text-blue-500 ">
            {(liked) ? <BiSolidLike/> :<BiLike /> }
            </button>
            
            <p className="font-medium">{likeCount}</p>  
            </div>
            
            </div>
           
        </div>
    );
};

export default DetailsArtifact;
