import { useEffect } from "react";
import PropTypes from 'prop-types';
import './errorhandler.css';

/**
 * Component that display an error 
 * @param {string} props.message the error message
 * @returns {JSX.Element}  An ErrorHandler component
 */
const ErrorHandler = ({message}) => {


    return ( 
        <div className="error-handler">
            <h1 className="error-header" >There is an error in the server</h1>
            <h3 className="error-message">{message}</h3>
        </div>
     );
}
ErrorHandler.propTypes = {
  message:PropTypes.string
}
export default ErrorHandler;