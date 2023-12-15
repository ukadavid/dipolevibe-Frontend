import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { apiShareGet } from '../../../../Context/Api/Axios'
import MyVideos from '../MyVideos';

const Shared = () => {
  const [error, setError] = useState(null);
  const [ userEmail, setUserEmail ] = useState()
  const [ sharedList, setSharedList ] = useState([])

  useEffect(() => {
    setUserEmail(localStorage.getItem("email"));
    console.log("userEmail "+userEmail)

  },[userEmail])
  
  useEffect(() => {
    async function fetchVideos(){
      try{
        if(userEmail == undefined ) return
        const response = await apiShareGet(`/shared/search-by-email?email=${userEmail}`)
        setSharedList(response.data);
      }
      catch(error){
        setError(error);
      }
    }

    fetchVideos();
  },[userEmail])

  return (
<div className="w-full text-center">
   {sharedList.length === 0 ? (
     <>
       <h2 className="text-xl mt-16">😔 No new notifications available</h2>
       <p className="text-gray-500 mt-4">
         Videos that are shared with you will appear here.
       </p>
     </>
   ) : (
     <MyVideos videosData={sharedList} />
   )}
</div>
  );
};

export default Shared;
