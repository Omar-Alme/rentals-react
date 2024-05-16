import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

function Logo() {
  return (
    <Link to="/" className="hidden lg:flex justify-center items-center bg-primary p-2 rounded-lg text-white">

      <Home className='w-8 h-8' />
      <span className="ml-2 text-xl font-bold">Rento</span>
    </Link>
  )
}

export default Logo;
