import axios from 'axios';
import Cookies from 'js-cookie';
import UserCard from './userCard';
import { API_BASE_URL } from '../utils/constants';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFeed } from '../store/slices/feed';
import { useNavigate } from 'react-router';
import { removeUser } from '../store/slices/user';

function Feed() {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getFeed = async () => {
    if (feed) return;
    try {
      const res = await axios.get(API_BASE_URL + '/user/feed', { withCredentials: true });
      dispatch(addFeed(res.data?.data));
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
    getFeed();
  }, []);
  return (
    feed && (
      <div className='flex items-center m-auto'>
        <UserCard user={feed[0]} />
      </div>
    )
  );
}
export default Feed;
