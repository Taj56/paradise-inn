import { useState } from 'react';
import './styles/navStyle.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleMenu = () => {
    if (isOpen) {
      closeMenu();
    } else {
      setIsOpen(true);
    }
  };

  const closeMenu = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsAnimating(false);
    }, 300); // Match the duration of the slide-out animation
  };

  return (
    <>
    <div className='w-full h-[80px] bg-white flex justify-center items-center py-5'>
        <img src="src\assets\logo.png" style={{width: '200px', height: '60px'}} alt="" />
    </div>
    <nav className="bg-gray-800 p-1">
      <div className="container mx-auto flex justify-between items-center">
        {/* <div className="text-white text-2xl">Brand</div> */}
        <div className="hidden md:flex space-x-4 justify-evenly items-center w-[100%] md:text-2xl font-mako">
          <Link to="#" className="text-white hover:bg-gray-700 p-2 rounded">Home</Link>
          <Link to="#" className="text-white hover:bg-gray-700 p-2 rounded">Luxury Rooms</Link>
          <Link to="#" className="text-white hover:bg-gray-700 p-2 rounded">Things to Do</Link>
          <Link to="#" className="text-white hover:bg-gray-700 p-2 rounded">About Us</Link>
          <Link to="#" className="text-white hover:bg-gray-700 p-2 rounded">Find Us</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div
          className={`fixed inset-0 bg-gray-800 bg-opacity-90 transform ${isAnimating ? 'slide-out' : 'slide-in'} md:hidden`}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-4 font-mako">
                <button onClick={closeMenu} className="absolute top-4 right-4 text-white focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                </button>
                <Link to="#" className="text-white text-3xl hover:bg-gray-700 p-2 rounded" onClick={closeMenu}>Home</Link>
                <Link to="#" className="text-white text-3xl hover:bg-gray-700 p-2 rounded" onClick={closeMenu}>Luxury Rooms</Link>
                <Link to="#" className="text-white text-3xl hover:bg-gray-700 p-2 rounded" onClick={closeMenu}>Things to Do</Link>
                <Link to="#" className="text-white text-3xl hover:bg-gray-700 p-2 rounded" onClick={closeMenu}>About Us</Link>
                <Link to="#" className="text-white text-3xl hover:bg-gray-700 p-2 rounded" onClick={closeMenu}>Find Us</Link>
            </div>
        </div>
      )}
    </nav>
    </>
  );
};

export default Navbar;
