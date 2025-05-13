import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between m-5">
      <div>

      </div>
      <div className="flex gap-4 ">
        <Link href="/Home">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/info">Info</Link>
      </div>

      <div className="flex gap-4 ">
        <Link href="/Login">Login</Link>
        <Link href="/Register">Register</Link>
      </div>
    </nav>
  );
};
export default Navbar;
