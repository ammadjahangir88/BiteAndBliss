import React from 'react';
import { Link } from 'react-router-dom';
import { FaChartBar, FaListAlt, FaUtensils, FaUsers, FaCog, FaFileInvoice, FaCalendarAlt, FaCommentAlt, FaFileAlt } from 'react-icons/fa';

const SideBar = () => {
  return (
    <div className="bg-white text-gray-800 w-64 flex-shrink-0 shadow-lg h-screen ">
      <div className="bg-white text-gray-800 w-64 flex-shrink-0">
        <div className="flex items-center font-serif font-bold justify-center h-20 border-b border-gray-700">
          BiteAndBliss
        </div>
        <nav className="mt-5">
          <Link to="/" className="block py-2 px-4 text-sm hover:bg-blue-500 flex items-center">
            <FaChartBar className="mr-2" />
            Dashboard
          </Link>
          <Link to="/orders" className="block py-2 px-4 text-sm hover:bg-blue-500 flex items-center">
            <FaListAlt className="mr-2" />
            Orders
          </Link>
          <Link to="/menu" className="block py-2 px-4 text-sm hover:bg-blue-500 flex items-center">
            <FaUtensils className="mr-2" />
            Menu Items
          </Link>
          <Link to="/staff" className="block py-2 px-4 text-sm hover:bg-blue-500 flex items-center">
            <FaUsers className="mr-2" />
            Staff
          </Link>
          <Link to="/customers" className="block py-2 px-4 text-sm hover:bg-blue-500 flex items-center">
            <FaUsers className="mr-2" />
            Customers
          </Link>
          <Link to="/invoices" className="block py-2 px-4 text-sm hover:bg-blue-500 flex items-center">
            <FaFileInvoice className="mr-2" />
            Invoices
          </Link>
          <Link to="/reservations" className="block py-2 px-4 text-sm hover:bg-blue-500 flex items-center">
            <FaCalendarAlt className="mr-2" />
            Table Reservations
          </Link>
          <Link to="/chats" className="block py-2 px-4 text-sm hover:bg-blue-500 flex items-center">
            <FaCommentAlt className="mr-2" />
            Chats
          </Link>
          <Link to="/reports" className="block py-2 px-4 text-sm hover:bg-blue-500 flex items-center">
            <FaFileAlt className="mr-2" />
            Reports
          </Link>
        </nav>
      </div>
      
    </div>
  );
};

export default SideBar;
