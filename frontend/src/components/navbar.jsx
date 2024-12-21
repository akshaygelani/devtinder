import Cookies from 'js-cookie';
import { Link } from 'react-router';
import { removeUser } from '../store/slices/user';
import { useDispatch, useSelector } from 'react-redux';

function NavBar() {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    // we can use logout endpoint as well
    Cookies.remove('access_token');
    dispatch(removeUser());
  };
  return (
    <div className='navbar bg-base-300'>
      <div className='flex-1'>
        <Link to='/feed' className='btn btn-ghost text-xl'>
          DevTinder
        </Link>
      </div>
      {user && (
        <div className='flex-none gap-2'>
          <p>Welcome, {user.firstName}</p>
          <div className='dropdown dropdown-end mx-4'>
            <div tabIndex={0} role='button' className='btn btn-ghost btn-circle avatar'>
              <div className='w-10 rounded-full'>
                <img alt='Tailwind CSS Navbar component' src={user.photoUrl} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-md dropdown-content bg-base-300 rounded-box z-[1] mt-3 w-52 p-2 shadow'
            >
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/profile'>Profile</Link>
              </li>
              <li>
                <Link to='/connections'>Connections</Link>
              </li>
              <li>
                <Link to='/requests'>Requests</Link>
              </li>
              <li>
                <a onClick={logoutHandler}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
