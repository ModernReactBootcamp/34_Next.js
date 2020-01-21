import Link from 'next/link';
import Navbar from '../components/Navbar';

const Index = () => {
  return (
    <div>
      <Navbar />
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
