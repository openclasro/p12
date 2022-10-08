import { useState, useEffect } from 'react';
import axios from 'axios';


function useFetchUserData(userId) {
  const [userProfil, setUser] = useState(null);
  const [activity, setActivity] = useState(null);
  const [averageSessions, setAverageSession] = useState(null);
  const [performance, setPerformance] = useState(null);
  const [IsLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // setIsLoading(true)
    const userProfil = `${process.env.REACT_APP_BACKEND_HOST}user/${userId}`;
    const userActivity = `${process.env.REACT_APP_BACKEND_HOST}user/${userId}/activity`;
    const userAverageSessions = `${process.env.REACT_APP_BACKEND_HOST}user/${userId}/average-sessions`;
    const userPerformance = `${process.env.REACT_APP_BACKEND_HOST}user/${userId}/performance`;

    const request1 = axios.get(userProfil);
    const request2 = axios.get(userActivity);
    const request3 = axios.get(userAverageSessions);
    const request4 = axios.get(userPerformance);


    axios
    .all([request1, request2, request3, request4])
    .then(
      axios.spread((...responses) => {
        
        setUser(responses[0].data.data)
        setActivity(responses[1].data.data)
        setAverageSession(responses[2].data.data)
        setPerformance(responses[3].data.data)
         setIsLoading(false)
      })
    )
    .catch(errors => {
    
      setError(errors)
    })
    .finally(() => {
      setIsLoading(false)
      
    })

    
  },[userId]);
  return [userProfil,activity,averageSessions,performance,IsLoading,error];
}


export default useFetchUserData;