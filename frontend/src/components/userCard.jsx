function UserCard({ user }) {
  const { firstName, lastName, age, gender, photoUrl, about, skills } = user;
  return (
    <div className='card bg-base-100 w-96 shadow-xl'>
      <figure>
        <img src={photoUrl} alt='Profile Photo' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{firstName + ' ' + lastName}</h2>
        <p>{age + ' ' + gender}</p>
        <p>{about}</p>
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

        <div className='card-actions justify-end flex flex-row mt-5'>
          <button className='btn btn-primary grow'>Ignore</button>

          <button className='btn btn-secondary grow'>Interested</button>
        </div>
      </div>
    </div>
  );
}
export default UserCard;
