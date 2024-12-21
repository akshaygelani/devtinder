import axios from 'axios';
import Cookies from 'js-cookie';
import { API_BASE_URL } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../store/slices/user';
import { addRequests } from '../store/slices/requests';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

function Requests() {
  const [loading, setLoading] = useState(true);
  const requests = useSelector((store) => store.requests);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getRequests = async () => {
    try {
      const res = await axios.get(API_BASE_URL + '/user/requests/pending', {
        withCredentials: true,
      });
      dispatch(addRequests(res.data?.data));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!Cookies.get('access_token')) {
      dispatch(removeUser());
      navigate('/signin');
      return;
    }
    getRequests();
  }, []);

  if (loading) {
    return <div>Loading requests...</div>;
  }

  if (requests.length === 0) {
    return <div>No pending requests available</div>;
  }
  return <>Requests</>;
}

export default Requests;
