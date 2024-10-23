export default function UserEffect({ user }) {
  // console.log(user);
  const {
    id,
    name,
    email,
    address: { city },
    phone,
  } = user;
  // console.log(city);
  return (
    <div className="player-container">
      <h3>use effect related::</h3>
      <span>id: {id}</span>
      <h3>name: {name}</h3>
      <p>email: {email}</p>
      <p>city: {city}</p>
      <p>phone: {phone}</p>
    </div>
  );
}
