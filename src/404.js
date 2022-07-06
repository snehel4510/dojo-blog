import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <p>OOPS! 404 Not found</p>
            <h2>Sorry the requested page is not available</h2>
            <Link to='/'>Back to Home...</Link>
        </div>
    );
}
 
export default NotFound;