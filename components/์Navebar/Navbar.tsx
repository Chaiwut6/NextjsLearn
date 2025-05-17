import Link from "next/link";
import DropdownList from "./DropdownList";
const Navbar = () => {
  return (
    <nav className="flex flex-col sm:flex-row justify-between m-5">
      <div>
      <Link href="/Home">Logo</Link>
      </div>


      <div className="flex flex-col sm:flex-row gap-4 pb-4">
        <Link href="/Home">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/info">Info</Link>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 pb-4">
          <input type="text" placeholder="Seach"
          />
          <DropdownList />
      </div>

      {/* <div className="flex flex-col sm:flex-row gap-4 ">
        <Link href="/Login">Login</Link>
        <Link href="/Register">Register</Link>
      </div> */}
    </nav>
  );
};
export default Navbar;
