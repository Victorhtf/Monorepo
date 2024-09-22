import { useState } from "react";
import { IoMdNotifications } from "react-icons/io";

const Notifications = () => {
  const [activeDropdown, setActiveDropdown] = useState(false);

  const toggleNotificationsDropdown = () => {
    setActiveDropdown(!activeDropdown);
  };

  return (
    <div className="relative dropdown">
      <button
        onClick={toggleNotificationsDropdown}
        className="relative flex items-center justify-center h-10 w-10 rounded-full bg-background-color hover:bg-hover-color text-text-color transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-color"
      >
        <IoMdNotifications size={24} className="h-6 w-6 text-text-color" />
        <span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-error-color"></span>
      </button>

      {activeDropdown == true && (
        <ul className="absolute right-0 mt-2 w-64 bg-background-color border border-border-color shadow-lg rounded-md z-20">
          <li className="px-4 py-2 text-text-color hover:bg-hover-color cursor-pointer">
            New message
          </li>
          <li className="px-4 py-2 text-text-color hover:bg-hover-color cursor-pointer">
            Update available
          </li>
          <li className="px-4 py-2 text-text-color hover:bg-hover-color cursor-pointer">
            Action required
          </li>
        </ul>
      )}
    </div>
  );
};

export default Notifications;
