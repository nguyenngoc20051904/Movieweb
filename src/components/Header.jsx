/* eslint-disable react/prop-types */
import  PropType  from "prop-types";
import  {useState} from 'react';
import logo from "../assets/logo.png"

function Header ({onSearch}) {
    const [textSearch,setSearch] = useState('');
    return ( 
    <div className="p-4 bg-black flex items-center justify-between">
        <div className="flex items-center space-x-4">
            <img src={logo} alt="" height="50" width="50"/>
            <h1 className="text -[40px]
            font-bold text-red-700 uppercase">Movie</h1>
            <nav className="flex items-center space-x-4">
                <a href="#" className="text-white">Home</a>
                <a href="#" className="text-white">About</a>
                <a href="#" className="text-white">Contact</a>
                <a href="#" className="text-white">Login</a>
            </nav>
        </div>
        <div className="flex item-center space-x-4">
            <input type="text" placeholder="Search"
            className="p-3 text-black" onChange={(e) =>
                setSearch(e.target.value) } value={textSearch}/>
            <button className="p-2 text-white bg-red-500"
            onClick={() => onSearch(textSearch)}>Search</button>
        </div>
    </div>
    );
};
Header.propType = {
    onSearch: PropType.func,
}
export default Header