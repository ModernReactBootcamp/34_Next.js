import axios from 'axios';

// import React, { Component } from 'react';

// export default class Index extends Component {
//   constructor(props) {
//     super(props);

//     console.log('fetching your data in constructor');
//     this.state = {};
//   }
//   static async getInitialProps() {
//     return { res: console.log('fetching data inside getInitialProps') };
//   }
//   render() {
//     return (
//       <div>
//         <h1>Our Index Page</h1>
//       </div>
//     );
//   }
// }

const Index = ({ posts }) => {
  return (
    <div>
      <h1>Our Index Page</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};
export default Index;
Index.getInitialProps = async ctx => {
  // https://jsonplaceholder.typicode.com/posts
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  const { data } = res;
  return { posts: data };
};

// equivalent

// const Index = () => (
//   <div>
//     <h1>Our Index Page</h1>
//   </div>
// );
