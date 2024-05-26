import { useRouteError } from 'react-router-dom';


const ErrorElement = () => {
    const error = useRouteError();
    console.log(error);

    return <h6 className='font-bold text-4xl'>there was an error... </h6>;
};
export default ErrorElement;