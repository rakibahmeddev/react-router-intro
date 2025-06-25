import { Link, useRouteError } from "react-router-dom";



const ErrorPage = () => {
    const error = useRouteError();
    console.log(error)
    
    return (
        <div className="flex flex-col text-center justify-center pt-36">
            <h2 className="text-5xl">Oops!!! 404 Page Not Found !!!</h2>

            <div className="flex flex-col mt-6">
                <p>{error.statusText}</p>
           
            <p>{error.error.message}</p>
           
            </div>
             <Link to="/"><button className="bg-black text-white px-8 py-2 rounded-md mt-6">Home</button></Link>
            
        </div>
    );
};

export default ErrorPage;