import { Link } from "react-router-dom";

function Unauthorized() {

    return (

        <div className="h-screen flex flex-col justify-center items-center">

            <h1 className="text-5xl font-bold text-red-600">
                Access Denied
            </h1>

            <p className="mt-4 text-gray-600">
                You don't have permission to access this page.
            </p>

            <Link
                to="/dashboard"
                className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg"
            >
                Back to Dashboard
            </Link>

        </div>

    );

}

export default Unauthorized;