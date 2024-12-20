import { useSelector } from 'react-redux';

function NavBar() {
  const user = useSelector((store) => store.user);

  return (
    <div className='navbar bg-base-300'>
      <div className='flex-1'>
        <a className='btn btn-ghost text-xl'>DevTinder</a>
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
                <a>Profile</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
