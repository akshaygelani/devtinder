import axios from 'axios';
import Cookies from 'js-cookie';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_BASE_URL } from '../utils/constants';
import { removeUser } from '../store/slices/user';
import { addConnections } from '../store/slices/connections';
import { useNavigate } from 'react-router';

function Connections() {
  const [loading, setLoading] = useState(true);
  const connections = useSelector((store) => store.connections);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getConnections = async () => {
    try {
      const res = await axios.get(API_BASE_URL + '/user/connections', { withCredentials: true });
      dispatch(addConnections(res.data?.data));
    } catch (error) {
      console.error(error);
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
    getConnections();
  }, []);
  if (loading) {
    return <div>Loading connections...</div>;
  }

  if (connections.length === 0) {
    return <div>No connections available</div>;
  }
  return (
    <div className='flex flex-col items-center gap-5'>
      <p className='text-xl mt-5'>Connections</p>
      <div className='card bg-base-300 w-full shadow-xl'>
        <div className='p-5'>
          {connections.map((connection, index) => {
            const { firstName, lastName, photoUrl, age, gender, about } = connection;
            return (
              <div className='flex flex-row flex-grow items-center gap-4' key={index}>
                <img src={photoUrl} className='w-24 h-24 rounded-full object-cover' />
                <div>
                  <h3>{firstName + ' ' + lastName}</h3>
                  <p>{age + ', ' + gender}</p>
                  <p className='truncate text-ellipse max-w-72'>{about}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Connections;
