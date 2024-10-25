import { IoSearch } from "react-icons/io5";

const Navbar = () => {
    return (
        <nav className='flex justify-between'>
            <h1>Recipe calories</h1>
            <div>
                <a href="#" className="m-2 bg-gray-100">home</a>
                <a href="#" className="m-2 bg-gray-100">recipy</a>
                <a href="#" className="m-2 bg-gray-100">about</a>
                <a href="#" className="m-2 bg-gray-100">search</a>
            </div>
            <div className="flex justify-start">
                <IoSearch/>
                <input type="text" className='bg-gray-200' />
            </div>
        </nav>
    );
};

export default Navbar;