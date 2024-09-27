"use client";
import { useState, useEffect, useRef } from "react";
import { IoMdNotifications } from "react-icons/io";

interface NotificationItem {
  label: string;
  onClick: () => void;
}

interface NotificationsProps {
  notifications: NotificationItem[];
}

const Notifications: React.FC<NotificationsProps> = ({ notifications }) => {
  const [activeDropdown, setActiveDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleNotificationsDropdown = () => {
    setActiveDropdown(!activeDropdown);

    if (activeDropdown && buttonRef.current) {
      buttonRef.current.blur();
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setActiveDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative dropdown">
      <button
        ref={buttonRef}
        onClick={toggleNotificationsDropdown}
        aria-expanded={activeDropdown ? "true" : "false"}
        className="relative flex items-center justify-center h-10 w-10 rounded-full bg-background-color hover:bg-hover-color text-text-color transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-color"
      >
        <IoMdNotifications size={24} className="h-6 w-6 text-text-color" />
        <span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-error-color"></span>
      </button>

      {activeDropdown && (
        <ul className="absolute right-0 mt-2 w-64 bg-background-color border border-border-color shadow-lg rounded-md z-20">
          {notifications.map((notification, index) => (
            <li
              key={index}
              className="px-4 py-2 text-text-color hover:bg-hover-color cursor-pointer"
              onClick={notification.onClick}
            >
              {notification.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notifications;
