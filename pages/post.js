import { withRouter } from 'next/router';

const Post = props => <h1>Post #{props.router.query.id}</h1>;

export default withRouter(Post);
// Post.getInitialProps = async ({ query }) => {
//   return { query };
//   //   return { res: console.log(query) };
// };
