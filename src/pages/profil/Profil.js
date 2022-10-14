import { useParams } from "react-router-dom";
import Dailyactivity from "../../component/dailyactivity/Dailyactivity";
import Recapbox from "../../component/recapbox/Recapbox";
import useFetchUserData from "../../serivce/useFetchUserData";
import useFetchUserMockData from "../../serivce/useFetchUserMockData";
import useDataFormatter from "../../utils/DataFromatter";
import fire from '../../assets/img/fire.svg';
import meet from '../../assets/img/meet.svg';
import burger from '../../assets/img/burger.svg';
import apple from '../../assets/img/apple.svg';

import './profil.css';
import AverageSession from "../../component/averagesession/AverageSession";
import RadarPerformance from "../../component/radarperformance/RadarPerformance";
import Score from "../../component/scpre/Score";
import Loading from "../../component/loading/Loading";
import ErrorHandler from "../../component/errorhandler/ErrorHandler";
// import { useEffect, useState } from "react";
const Profil = () => {

    let { id } = useParams();
  
     const [user,activity,averageSessions,performance,IsLoading,error] = useFetchUserData(id);
      const [userMock,activityMock,averageSessionsMock,performanceMock,IsLoadingMock,errorMock] = useFetchUserMockData(id);
      console.log(process.env.REACT_APP_MOCK_DATA );
      const dataFormatter = useDataFormatter(process.env.REACT_APP_MOCK_DATA==="true" ? [userMock,activityMock,averageSessionsMock,performanceMock,IsLoadingMock,errorMock] :[user,activity,averageSessions,performance,IsLoading,error]);
        console.log('dataformatter', dataFormatter)
//   useEffect(() => {
//    console.log(process.env.REACT_APP_MOCK_DATA) ;
   
//   },[])
  
         
     
        return (

            (error ?   <ErrorHandler message={error}/>  : (IsLoading && process.env.REACT_APP_MOCK_DATA==="false" ?  <Loading/> :   
            <section className="profil">
                <div className="profil__heading">
                    <h2 className="profil__heading__salutation">Bonjour <span>{dataFormatter?.getUserProfil()?.firstName}</span></h2>
                    <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                </div>
                <div className="profil__content">
                    <div className="profil__content__activity">
                        
                        <Dailyactivity data ={dataFormatter?.getUserActivity()}/>
                        <div className="profil__content__activity__details">
                            <AverageSession data={dataFormatter?.getUserAvgSession()} />
                           <RadarPerformance data={dataFormatter?.getPerformance()} />
                             <Score data={dataFormatter?.getScore()} />
                        </div>
                    </div>
                    <ul className="profil__content__summary">
                        <li><Recapbox icon={fire} type="fire" label="calories" data={dataFormatter?.getCalorieCount()} /></li>
                        <li><Recapbox icon={meet} type="meet" label="proteines" data={dataFormatter?.getProteinCount()} /></li>
                        <li><Recapbox icon={apple} type="apple" label="glucide" data={dataFormatter?.getCarbohydrateCount()}/></li>
                        <li><Recapbox icon={burger} type="burger" label="lipide" data={dataFormatter?.getLipidCount()}/></li>
                    </ul>
                </div>
            </section>) )
        );
}
 
export default Profil;





