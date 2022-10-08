import { useState, useEffect } from 'react';
// import axios from 'axios';
import {USER_MAIN_DATA,USER_ACTIVITY,USER_AVERAGE_SESSIONS,USER_PERFORMANCE} from '../data/mock.data';

function useFetchUserMockData(userId) {
  const [userProfil, setUser] = useState(null);
  const [activity, setActivity] = useState(null);
  const [averageSessions, setAverageSession] = useState(null);
  const [performance, setPerformance] = useState(null);
  const [IsLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

        setUser( USER_MAIN_DATA.filter(user =>  user.id==userId)[0]);
        setActivity( USER_ACTIVITY.filter(user =>  user.userId==userId)[0]);
        setAverageSession( USER_AVERAGE_SESSIONS.filter(user =>  user.userId==userId)[0]);
        setPerformance( USER_PERFORMANCE.filter(user =>  user.userId==userId)[0]);
        setIsLoading(false);
        setError(false);

    
  },[userId]);

  return [userProfil,activity,averageSessions,performance,IsLoading,error];
}

export default useFetchUserMockData;
