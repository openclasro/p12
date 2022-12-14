const { useState, useEffect } = require("react");


/**
 * @typedef {Object} DataFormatter
 * @property {DataFormatter} formatter an istance of the class DataFormatter
 */

/**
 * Custom hook that get all data and create a signal isntance of the class DataFormatter to formate the data for each specific component
 * @param {Object[]} data id of current user
 * @returns {DataFormatter} DataFormatter object
 */

function useDataFormatter(data) {
   

    const [formatter, setformatter] = useState(null);
     class DataFormatter{
        constructor(data) {
         this.data = {profil:data[0],activity:data[1],avgSessions:data[2],performance:data[3]};
        
        }
         getUserProfil(){
           
        console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$",this.data.profil.userInfos.firstName,this.data.profil.userInfos.lastName,this.data.profil.userInfos.age)
            return {firstName:this.data.profil.userInfos.firstName,lastName:this.data.profil.userInfos.lastName,age:this.data.profil.userInfos.age};
         }
    
        getCalorieCount(){
         console.log("bbbbbbbbbbbbbbbbbbbbbbbb",this.data.profil.keyData.calorieCount)
         return this.data.profil.keyData.calorieCount;
      
        }

        getProteinCount(){
         return this.data.profil.keyData.proteinCount;

        }
        getCarbohydrateCount(){
         return this.data.profil.keyData.carbohydrateCount;

        }

        getLipidCount(){
         return this.data.profil.keyData.lipidCount;

        }


         getUserActivity(){
            console.log("66666666666666666666666666",this.data.activity.sessions.map((session,index)=>({...session,index:index+1})))
            return this.data.activity.sessions.map((session,index)=>({...session,index:index+1}));
        }

        getUserAvgSession(){
        
         return this.data.avgSessions.sessions.map(session=> ({...session,day:["L","M","M","J","V","S","d"][session.day -1]})) 
      }
      
      trad = (kind) => {
       
         switch (kind) {
            case "energy":
               return "energie"
            case "strength":
                return "force"
            case "speed":
                return "vitesse"
            case "intensity":
                return "intensit??"
            default:
               // console.log(kind)
               return kind
                  }
               }
               
               getPerformance(){
                  
                  const updatePerformance = this.data.performance.data.map(element => ({
                     ...element,
                     kind: this.trad(this.data.performance.kind[element.kind])
                     
                  }))
                  // console.log(updatePerformance)
                  return updatePerformance;
               }
               
               getScore() {
                  let score = 0
                  if (this.data.profil?.score !== undefined) {
                     score = this.data.profil.score * 100
                  }
                  if (this.data.profil?.todayScore !== undefined) {
                     score = this.data.profil.todayScore * 100
                  }
                  // console.log(score)
                  
                  return score;
               }
               
               
            }
            
            useEffect(() => {
               if(!data[4])
               setformatter(new DataFormatter(data))
            }, [data[4]])
            
           

     return formatter;
     

   
}

export default useDataFormatter;