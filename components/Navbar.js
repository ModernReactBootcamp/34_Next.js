import Link from 'next/link';

const Navbar = () => {
  const styles = {
    display: 'flex',
    background: 'gray',
    justifyContent: 'space-between',
    padding: '1rem'
  };
  return (
    <div style={styles}>
      <Link href='/'>
        <button>Home</button>
      </Link>
      <Link href='/about'>
        <button>About</button>
      </Link>
      <Link href='/contact'>
        <a>Contact</a>
      </Link>
    </div>
  );
};
export default Navbar;
