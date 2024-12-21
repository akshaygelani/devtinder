import axios from 'axios';
import { API_BASE_URL } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addRequests } from '../store/slices/requests';
import { useState, useEffect } from 'react';

function Requests() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const requests = useSelector((store) => store.requests);

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
