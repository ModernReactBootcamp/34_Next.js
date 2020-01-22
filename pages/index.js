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

const Index = () => {
  return (
    <div>
      <h1>Our Index Page</h1>
    </div>
  );
};
export default Index;
Index.getInitialProps = async () => {
  return { res: console.log('fetching data inside getInitialProps') };
};

// equivalent

// const Index = () => (
//   <div>
//     <h1>Our Index Page</h1>
//   </div>
// );
