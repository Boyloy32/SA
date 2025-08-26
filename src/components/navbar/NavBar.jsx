import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="bg-blue-500 p-4 sticky shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <Link href={"/"}>
            <div className="text-white font-bold">Computer Shop</div>
          </Link>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="text-white hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/cart" className="text-white hover:text-gray-300">
                Cart
              </Link>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
