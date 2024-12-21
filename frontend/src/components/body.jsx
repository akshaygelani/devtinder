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

  useEffect(() => {
    if (!Cookies.get('access_token')) {
      navigate('/signin');
      return;
    }
    verifyProfile();
    navigate('/feed');

    const intervalId = setInterval(() => {
      if (!Cookies.get('access_token')) {
        navigate('/signin');
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [navigate]);

  return (
    <div className='font-akshay'>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}
export default Body;
