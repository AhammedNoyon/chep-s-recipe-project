export default function DataDisplay({ post }) {
  // console.log(post);
  const { userId, id, title, body } = post;
  // console.log(userId);
  // console.log(id);
  // console.log(title);
  // console.log(body);
  return (
    <div className="state-container">
      <p>userId :{userId}</p>
      <p>id :{id}</p>
      <h3>title :{title}</h3>
      <p>body :{body}</p>
    </div>
  );
}
