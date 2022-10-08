import { useEffect } from "react";
import './errorhandler.css';
const ErrorHandler = ({message}) => {

    useEffect(() => {
      console.log(message)
    
    
    }, [message])
    
    return ( 
        <div className="error-handler">
            <h1 className="error-header" >There is an error in the server</h1>
            <h3 className="error-message">{message.message}</h3>
        </div>
     );
}
 
export default ErrorHandler;