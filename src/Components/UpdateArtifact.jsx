import axios from "axios";
import { useContext, useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import { toast } from "react-toastify";

const UpdateArtifact = () => {
    const {user} = useContext(AuthContext);
    const { id } = useParams(); 
    const [artifact, setArtifact] = useState(null);
    const [loading, setLoading] = useState(true);
    

    const handleFormData = e =>{
        e.preventDefault();
        const formData = new FormData (e.target);
        const initialData = Object.fromEntries(formData.entries());
        initialData.addedBy = {
          name : user.displayName,
          email : user.email,
        }
        initialData.likedBy = [];
    
        
        axios.put(`http://localhost:5000/update/artifact/${artifact._id}` , initialData)
        .then((res) => {
            toast.success(res.data); 
            
            axios
                .get(`http://localhost:5000/artifacts/${artifact._id}`)
                .then((res) => {
                    setArtifact(res.data); 
                    e.target.reset(); 
                })
                .catch((err) => {
                    console.error("Error fetching updated artifact:", err);
                    toast.error("Error fetching updated artifact");
                });
        }).catch(error => {
          console.error("Error adding artifact:", error.response?.data || error.message);
        });
      }
    
      
    useEffect(() => {
        axios
            .get(`http://localhost:5000/artifacts/${id}`)
            .then((res) => {
                setArtifact(res.data);
                // console.log(artifact);
                setLoading(false);
                // console.log(artifact.likedBy.includes(user.email))
                               
                
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
                <p className="text-red-600 font-medium  text-sm">Artifact not found.</p>
            </div>
        );
    }

    return (
        <div className="flex justify-center items-center bg-gray-100 p-10">
        <div className="lg:min-w-7xl mx-auto p-6 lg:flex gap-4 ">
            <form onSubmit={handleFormData} className="bg-white shadow-md rounded-lg p-8 w-full max-w-2xl border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2 text-center">Update Artifact</h2>
        <section className="flex gap-2">
          <div className='w-full '>
            {/* Artifact Name */}
            <div className="mb-4">
              <label className="block text-gray-600   text-sm mb-2">Artifact Name</label>
              <input
                type="text"
                name="artifactName"
                defaultValue={artifact.artifactName}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Artifact Image */}
            <div className="mb-4">
              <label className="block text-gray-600   text-sm mb-2">Artifact Image URL</label>
              <input
                type="text"
                name="artifactImage"
                defaultValue={artifact.artifactImage}
                placeholder="Paste image link here"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* Discovered At */}
            <div className="mb-4">
              <label className="block text-gray-600   text-sm mb-2">Discovered At</label>
              <input
                type="text"
                name="discoveredAt"
                defaultValue={artifact.discoveredAt}
                placeholder="e.g., 1799"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            

            
            
          </div>
          

          <div className='w-full'>
            {/* Created At */}
            <div className="mb-4">
              <label className="block text-gray-600   text-sm mb-2">Created At</label>
              <input
                type="text"
                name="createdAt"
                defaultValue={artifact.createdAt}
                placeholder="e.g., 100 BC"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            

           

            {/* Present Location */}
            <div className="mb-4">
              <label className="block text-gray-600   text-sm mb-2">Present Location</label>
              <input
                type="text"
                name="presentLocation"
                defaultValue={artifact.presentLocation}
                placeholder="Enter current location"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

             {/* Discovered By */}
             <div className="mb-4">
              <label className="block text-gray-600   text-sm mb-2">Discovered By</label>
              <input
                type="text"
                name="discoveredBy"
                defaultValue={artifact.discoveredBy}
                placeholder="Enter discoverer’s name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </section>

            {/* Artifact Type */}

        <div className="mb-4">
              <label className="block text-gray-600   text-sm mb-2">Artifact Type</label>
              <select
                name="artifactType"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Tools">Tools</option>
                <option value="Weapons">Weapons</option>
                <option value="Documents">Documents</option>
                <option value="Writings">Writings</option>
              </select>
            </div>
            {/* Historical Context */}
        <div className="mb-4">
              <label className="block text-gray-600   text-sm mb-2">Historical Context</label>
              <textarea
                name="historicalContext"
                defaultValue={artifact.historicalContext}
                placeholder="Write a brief historical context"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
              ></textarea>
            </div>

        
        <div className="mb-4">
          
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-red-800 text-white py-2 rounded-full   text-sm hover:bg-blue-700 transition duration-300"
        >
          Update Artifact
        </button>
      </form>
           
        </div>
        </div>
    );
}

export default UpdateArtifact;
