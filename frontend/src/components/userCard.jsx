function UserCard({ user }) {
  const { firstName, lastName, age, gender, photoUrl, about, skills } = user;
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
          <button className='btn btn-primary grow'>Ignore</button>

          <button className='btn btn-secondary grow'>Interested</button>
        </div>
      </div>
    </div>
  );
}
export default UserCard;
