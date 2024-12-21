import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../store/slices/user';
import { API_BASE_URL } from '../utils/constants';

function SignIn() {
  const [email, setEmail] = useState('akshay@gmail.com');
  const [password, setPassword] = useState('Akshay@123');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signInHandler = async () => {
    try {
      const result = await axios.post(
        API_BASE_URL + '/auth/signin',
        { email, password },
        { withCredentials: true }
      );
      dispatch(addUser(result.data?.data[0]));
      navigate('/feed');
    } catch (error) {
      console.error(error);
    }
  };

  const signUpHandler = () => {
    navigate('/signup');
  };

  useEffect(() => {
    if (Cookies.get('access_token')) navigate('/');
  }, []);

  return (
    <div className='flex justify-center my-3'>
      <div className='card  bg-base-300 w-96 shadow-xl'>
        <div className='card-body'>
          <h2 className='card-title justify-center'>Sign In</h2>
          <label className='form-control w-full max-w-xs'>
            <div className='label'>
              <span className='label-text'>Email</span>
            </div>
            <input
              type='text'
              placeholder='Enter Email'
              value={email}
              className='input input-bordered w-full max-w-xs'
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className='form-control w-full max-w-xs'>
            <div className='label'>
              <span className='label-text'>Password</span>
            </div>
            <input
              type='password'
              placeholder='Enter Password'
              value={password}
              className='input input-bordered w-full max-w-xs'
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <div className='card-actions justify-center mt-3 flex flex-row'>
            <button className='btn btn-success grow' onClick={signInHandler}>
              SignIn
            </button>
            <button className='btn btn-neutral  grow' onClick={signUpHandler}>
              Signup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
