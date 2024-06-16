import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAppSelector, useAppDispatch } from '@/hooks';

import { logoutUser } from '../features/user/userSlice';
import { clearCart } from '../features/cart/cartSlice';
import { useToast } from './ui/use-toast';



const Header = () => {
    const dispatch = useAppDispatch();
    const { toast } = useToast();
    const navigate = useNavigate();
    const user = useAppSelector((state) => state.userState.user);


    const handleLogout = () => {
        dispatch(clearCart());
        dispatch(logoutUser());
        toast({ description: 'Logged out' });
        navigate('/');
    };

    return ( 
    <header>
        <div className='align-element flex justify-center sm:justify-end py-2'>
            {/* {USER} */}

            {user ? (
                <div className='flex gap-x-2 sm:gap-x-8 items-center'>
                    <p className='text-xs sm:text-sm'>Hello,  {user.username} </p>
                    <Button variant='link' onClick={handleLogout} size='sm'>
                        Logout
                    </Button>
                </div>
            ) : (
                <div className='flex gap-x-6 justify-center items-center -mr-4'>
                    <Button asChild variant='link' size='sm'>
                        <Link to='/login'>Login / Guest</Link>
                    </Button>

                    <Button asChild variant='link' size='sm'>
                        <Link to='/register'>Register</Link>
                    </Button>

                </div>
            )}
        </div>
    </header>
    )
}
export default Header;