import axios from 'axios';
import Cookies from 'js-cookie';
import UserCard from './userCard';
import { API_BASE_URL } from '../utils/constants';
import { showLoading, hideLoading } from '../utils/helpers';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFeed } from '../store/slices/feed';
import { useNavigate } from 'react-router';
import { removeUser } from '../store/slices/user';

function Feed() {
  const [loading, setLoading] = useState(true);
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getFeed = async () => {
    showLoading();
    try {
      const res = await axios.get(API_BASE_URL + '/user/feed', { withCredentials: true });
      dispatch(addFeed(res.data?.data));
    } catch (error) {
      hideLoading();
      console.error(error);
    } finally {
      hideLoading();
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!Cookies.get('access_token')) {
      dispatch(removeUser());
      navigate('/signin');
      return;
    }
    getFeed();
  }, []);

  if (loading) {
    return <div className='text-xl mt-5 text-base-300'>Loading Feed...</div>;
  }

  if (feed.length === 0) return <p className='text-xl mt-5 text-base-300'>No user available!</p>;
  return (
    feed && (
      <div className='flex items-center h-5/6 mt-auto'>
        <UserCard user={feed[0]} />
      </div>
    )
  );
}
export default Feed;
