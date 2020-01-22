import axios from 'axios';

const Post = ({ id, comments }) => (
  <div>
    <h1>Comments for Post #{id}</h1>
    {comments.map(comment => (
      <Comment {...comment} key={comment.id} />
    ))}
  </div>
);

const Comment = ({ email, body }) => {
  return (
    <div>
      <h5>{email}</h5>
      <p>{body}</p>
    </div>
  );
};

Post.getInitialProps = async ({ query }) => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/comments?postId=${query.id}`
  );
  const { data } = res;
  console.log(data[0]);
  return { ...query, comments: data };
  //   return { res: console.log(query) };
};

export default Post;
// https://jsonplaceholder.typicode.com/comments?postId=1
