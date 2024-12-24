import axios from 'axios';
import { API_BASE_URL } from '../utils/constants';
import { showLoading, hideLoading } from '../utils/helpers';
import { useDispatch } from 'react-redux';
import { removeFeed } from '../store/slices/feed';

function UserCard({ user, isUsedInsideProfile = false }) {
  const dispatch = useDispatch();

  const handleSendConnectionRequests = async (action, userId) => {
    showLoading();
    try {
      await axios.post(
        API_BASE_URL + '/request/send/' + userId,
        { action },
        { withCredentials: true }
      );
      dispatch(removeFeed(userId));
    } catch (error) {
      hideLoading();
      console.error(error);
    } finally {
      hideLoading();
    }
  };

  const { _id, firstName, lastName, age, gender, photoUrl, about, skills } = user;
  return (
    <div className='card bg-base-100 w-96 h-full shadow-xl'>
      <figure>
        <img src={photoUrl} alt='Profile Photo' className='w-100 h-100 object-cover' />
      </figure>
      <div className='card-body p-5'>
        <h2 className='card-title text-2xl'>{firstName + ' ' + lastName}</h2>
        <p className='max-h-min'>{age + ', ' + gender}</p>
        <p className='max-h-min'>{about}</p>
        {skills && (
          <div>
            <p>Skills: </p>
            <div className='flex flex-row'>
              {skills &&
                skills.map((skill, index) => {
                  return <p key={index}>{skill}</p>;
                })}
            </div>
          </div>
        )}

        <div className='card-actions mt-auto flex flex-row'>
          <button
            className={
              isUsedInsideProfile
                ? 'btn btn-primary grow pointer-events-none'
                : 'btn btn-primary grow'
            }
            onClick={() => handleSendConnectionRequests('ignored', _id)}
          >
            Ignore
          </button>

          <button
            className={
              isUsedInsideProfile
                ? 'btn btn-secondary grow pointer-events-none'
                : 'btn btn-secondary grow'
            }
            onClick={() => handleSendConnectionRequests('interested', _id)}
          >
            Interested
          </button>
        </div>
      </div>
    </div>
  );
}
export default UserCard;
