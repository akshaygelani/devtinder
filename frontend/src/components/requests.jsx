import axios from 'axios';
import Cookies from 'js-cookie';
import { API_BASE_URL } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../store/slices/user';
import { addRequests, removeRequest } from '../store/slices/requests';
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

  const reviewRequestHandler = async (action, requestId) => {
    try {
      await axios.post(
        API_BASE_URL + '/request/review/' + requestId,
        { action },
        { withCredentials: true }
      );
      dispatch(removeRequest(requestId));
    } catch (error) {
      console.error(error);
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
    return <div className='text-xl mt-5 text-base-300'>Loading requests...</div>;
  }

  if (requests.length === 0) {
    return <div className='text-xl mt-5 text-base-300'>No pending requests available</div>;
  }
  return (
    <div className='flex flex-col items-center gap-5 mx-3 md:mx-0'>
      <p className='text-xl mt-5 text-base-300'>Pending Requests</p>
      <div className='card bg-base-300 w-full shadow-xl'>
        <div className='p-5 pt-4 pb-4'>
          {requests.map((request, index) => {
            const { _id, firstName, lastName, photoUrl, age, gender, about } = request?.fromUserId;
            return (
              <div key={index}>
                {index !== 0 && <div className='divider my-1'></div>}
                <div className='flex flex-row flex-grow items-center justify-between gap-4'>
                  <img src={photoUrl} className='w-24 h-24 rounded-full object-cover' />
                  <div className='flex flex-col  justify-center items-start grow'>
                    <h3>{firstName + ' ' + lastName}</h3>
                    <p>{age + ', ' + gender}</p>
                    <p className='truncate text-ellipse max-w-56 md:max-w-72'>{about}</p>
                  </div>
                  <div className='flex flex-col gap-y-2'>
                    <button
                      className='btn btn-secondary btn-sm'
                      onClick={() => reviewRequestHandler('accepted', request._id)}
                    >
                      Accept
                    </button>

                    <button
                      onClick={() => reviewRequestHandler('rejected', request._id)}
                      className='btn btn-primary btn-sm'
                    >
                      Reject
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Requests;
