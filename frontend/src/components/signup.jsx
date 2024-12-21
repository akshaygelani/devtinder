import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { API_BASE_URL } from '../utils/constants';

function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const signUpHandler = async () => {
    try {
      const result = await axios.post(
        API_BASE_URL + '/auth/signup',
        { firstName, lastName, email, password },
        { withCredentials: true }
      );
      navigate('/signin');
    } catch (error) {
      console.error(error);
    }
  };

  const signInHandler = () => {
    navigate('/signin');
  };
  return (
    <div className='flex justify-center my-3'>
      <div className='card  bg-base-300 w-96 shadow-xl'>
        <div className='card-body'>
          <h2 className='card-title justify-center'>Create account</h2>
          <label className='form-control w-full max-w-xs'>
            <div className='label'>
              <span className='label-text'>First Name</span>
            </div>
            <input
              type='text'
              placeholder='Enter First Name'
              value={firstName}
              className='input input-bordered w-full max-w-xs'
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
          <label className='form-control w-full max-w-xs'>
            <div className='label'>
              <span className='label-text'>Last Name</span>
            </div>
            <input
              type='text'
              placeholder='Enter Last Name'
              value={lastName}
              className='input input-bordered w-full max-w-xs'
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
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
            <button className='btn btn-success grow' onClick={signUpHandler}>
              SignUp
            </button>
            <button className='btn btn-neutral  grow' onClick={signInHandler}>
              SignIn
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignUp;
