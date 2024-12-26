import { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddArtifact = () => {
    const {user} = useContext(AuthContext);
    // console.log(user);
  const handleFormData = e =>{
    e.preventDefault();
    const formData = new FormData (e.target);
    const initialData = Object.fromEntries(formData.entries());
    initialData.addedBy = {
      name : user.displayName,
      email : user.email,
    }
    initialData.likedBy = [];

    
    axios.post('https://historical-artifacts-tracker-server-theta.vercel.app/artifacts/add' , initialData)
    .then(res =>{
      toast(res.data);
      e.target.reset();
      
    }).catch(error => {
      console.error("Error adding artifact:", error.response?.data || error.message);
    });
  }

  return (
    <div className="flex justify-center items-center bg-gray-100 p-10">
      <form onSubmit={handleFormData} className="bg-white shadow-md rounded-lg p-8 w-full max-w-2xl border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2 text-center">Add Artifact</h2>
        <section className="flex gap-2">
          <div className='w-full '>
            {/* Artifact Name */}
            <div className="mb-4">
              <label className="block text-gray-600 font-medium mb-2">Artifact Name</label>
              <input
                type="text"
                name="artifactName"
                placeholder="Enter artifact name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Artifact Image */}
            <div className="mb-4">
              <label className="block text-gray-600 font-medium mb-2">Artifact Image URL</label>
              <input
                type="text"
                name="artifactImage"
                placeholder="Paste image link here"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* Discovered At */}
            <div className="mb-4">
              <label className="block text-gray-600 font-medium mb-2">Discovered At</label>
              <input
                type="text"
                name="discoveredAt"
                placeholder="e.g., 1799"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            

            
            
          </div>
          

          <div className='w-full'>
            {/* Created At */}
            <div className="mb-4">
              <label className="block text-gray-600 font-medium mb-2">Created At</label>
              <input
                type="text"
                name="createdAt"
                placeholder="e.g., 100 BC"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            

           

            {/* Present Location */}
            <div className="mb-4">
              <label className="block text-gray-600 font-medium mb-2">Present Location</label>
              <input
                type="text"
                name="presentLocation"
                placeholder="Enter current location"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

             {/* Discovered By */}
             <div className="mb-4">
              <label className="block text-gray-600 font-medium mb-2">Discovered By</label>
              <input
                type="text"
                name="discoveredBy"
                placeholder="Enter discoverer’s name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </section>

            {/* Artifact Type */}

        <div className="mb-4">
              <label className="block text-gray-600 font-medium mb-2">Artifact Type</label>
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
              <label className="block text-gray-600 font-medium mb-2">Historical Context</label>
              <textarea
                name="historicalContext"
                placeholder="Write a brief historical context"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
              ></textarea>
            </div>

        {/* Artifact Adder Name and Email */}
        <div className="mb-4">
            <div>
               <label className="block text-gray-400 font-xs mb-2">Artifact Adder Name: {user.displayName}</label>
            </div>
         
         <div>
            <label className="block text-gray-400 font-xs mb-2">Artifact Adder Email: {user.email}</label>
          
         </div>
          
        </div>
        <div className="mb-4">
          
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-red-800 text-white py-2 rounded-full font-medium hover:bg-blue-700 transition duration-300"
        >
          Add Artifact
        </button>
      </form>
    </div>
  );
};

export default AddArtifact;
