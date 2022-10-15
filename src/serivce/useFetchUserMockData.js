import { useState, useEffect } from 'react';
// import axios from 'axios';
import {USER_MAIN_DATA,USER_ACTIVITY,USER_AVERAGE_SESSIONS,USER_PERFORMANCE} from '../data/mock.data';




/**
 * @typedef {Object} UserData
 * @property {Object} userProfil user activity profil data
 * @property {Object} activity user activity
 * @property {Object} averageSessions user average sessions
 * @property {Object} performance user performance
 * @property {boolean} IsLoading if true,  the data is still loading. if false the data is loaded
 * @property {null|string} error if there is an error or not
 */

/**
 * Custom hook that get all user data from the server
 * @param {Number} userId id of current user
 * @returns {UserData} data of user
 */

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
