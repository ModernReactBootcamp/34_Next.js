import Link from 'next/link';

const Index = () => {
  return (
    <div>
      <Link href='/about'>
        <a>About</a>
      </Link>
      <h1>Our Index Page</h1>
    </div>
  );
};
export default Index;

// equivalent

// const Index = () => (
//   <div>
//     <h1>Our Index Page</h1>
//   </div>
// );
