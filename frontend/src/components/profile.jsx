import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserCard from './userCard';
import axios from 'axios';
import { API_BASE_URL } from '../utils/constants';
import { addUser } from '../store/slices/user';

function Profile() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const [firstName, setFirstName] = useState(user?.firstName || '');
  const [lastName, setLastName] = useState(user?.lastName || '');
  const [age, setAge] = useState(user?.age || '');
  const [gender, setGender] = useState(user?.gender || '');
  const [photoUrl, setPhotoUrl] = useState(user?.photoUrl || '');
  const [about, setAbout] = useState(user?.about || '');
  const [error, setError] = useState('');
  const [showSuccessToast, setSuccessToast] = useState(false);
  const [showErrorToast, setErrorToast] = useState(false);

  const updateProfile = async () => {
    try {
      setError(false);
      const payload = { firstName, lastName, age: age, gender, photoUrl, about };
      await axios.patch(API_BASE_URL + '/profile', payload, { withCredentials: true });
      dispatch(addUser({ user, ...payload }));
      setSuccessToast(true);
      setTimeout(() => {
        setSuccessToast(false);
      }, 2000);
    } catch (error) {
      setError(error.response?.data?.message);
      setErrorToast(true);
      setTimeout(() => {
        setErrorToast(false);
      }, 3000);
    }
  };
  useEffect(() => {
    if (user) {
      setFirstName(user.firstName || '');
      setLastName(user.lastName || '');
      setAge(user.age || '');
      setGender(user.gender || '');
      setPhotoUrl(user.photoUrl || '');
      setAbout(user.about || '');
    }
  }, [user]);

  return (
    <>
      <div className='flex  flex-col md:flex-row justify-center my-3 gap-3'>
        <div className='card  bg-base-300 w-96 shadow-xl'>
          <div className='card-body'>
            <h2 className='card-title justify-center'>Update Profile</h2>
            <label className='form-control w-full max-w-xs'>
              <div className='label'>
                <span className='label-text'>First Name</span>
              </div>
              <input
                type='text'
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
                value={lastName}
                className='input input-bordered w-full max-w-xs'
                onChange={(e) => setLastName(e.target.value)}
              />
            </label>
            <label className='form-control w-full max-w-xs'>
              <div className='label'>
                <span className='label-text'>Age</span>
              </div>
              <input
                type='text'
                value={age}
                className='input input-bordered w-full max-w-xs'
                onChange={(e) => setAge(e.target.value)}
              />
            </label>
            <label className='form-control w-full max-w-xs'>
              <div className='label'>
                <span className='label-text'>Gender</span>
              </div>
              <select
                value={gender}
                className='select select-bordered w-full max-w-xs'
                onChange={(e) => setGender(e.target.value)}
              >
                <option value='male'>Male</option>
                <option value='female'>Female</option>
                <option value='other'>Other</option>
              </select>
            </label>
            <label className='form-control w-full max-w-xs'>
              <div className='label'>
                <span className='label-text'>PhotoURL</span>
              </div>
              <input
                type='text'
                value={photoUrl}
                className='input input-bordered w-full max-w-xs'
                onChange={(e) => setPhotoUrl(e.target.value)}
              />
            </label>

            <label className='form-control w-full max-w-xs'>
              <div className='label'>
                <span className='label-text'>About</span>
              </div>
              <textarea
                type='text'
                value={about}
                className='input input-bordered w-full max-w-xs'
                onChange={(e) => setAbout(e.target.value)}
              />
            </label>
            {error && <p className='text-red-500'>Error: {error}</p>}
            <div className='card-actions justify-center mt-3 flex flex-row'>
              <button className='btn btn-success grow' onClick={updateProfile}>
                Update Profile
              </button>
            </div>
          </div>
        </div>
        <UserCard user={{ firstName, lastName, age, gender, photoUrl, about }} />
      </div>
      <div className='toast toast-top toast-center'>
        {showErrorToast && (
          <div className='alert alert-error'>
            <span>Oops, Profile Update Failed</span>
          </div>
        )}

        {showSuccessToast && (
          <div className='alert alert-success'>
            <span>Profile Update Successful!</span>
          </div>
        )}
      </div>
    </>
  );
}
export default Profile;
