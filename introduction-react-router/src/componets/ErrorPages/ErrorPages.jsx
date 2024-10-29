import { Link, useRouteError } from "react-router-dom";

const ErrorPages = () => {
    const error = useRouteError()
    console.log(error);
    return (
        <div>
            <h2>Opps</h2>
           <p> {
                error.statusText || error.massage
            }</p>
            {
                error.status === 404 && <div>
                    <h2>Not Found</h2>
                    <Link to='/'><button>Go back</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPages;