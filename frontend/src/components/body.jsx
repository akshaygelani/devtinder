import axios from 'axios';
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router';
import { API_BASE_URL } from '../utils/constants';
import { addUser } from '../store/slices/user';
import NavBar from './navbar';
import Footer from './footer';

function Body() {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validateToken = () => {
    const access_token = Cookies.get('access_token');
    if (!access_token) {
      navigate('/signin');
    }
  };

  const verifyProfile = async () => {
    if (!user) {
      try {
        const res = await axios.get(API_BASE_URL + '/profile', { withCredentials: true });
        dispatch(addUser(res?.data?.data[0]));
      } catch (error) {
        console.error(error);
      }
    }
  };

  // first time app opens
  useEffect(() => {
    validateToken();
    verifyProfile();
    navigate('/feed');

    const intervalId = setInterval(() => {
      validateToken();
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='font-akshay'>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}
export default Body;
