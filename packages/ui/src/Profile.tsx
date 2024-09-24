import { useState, useEffect, useRef } from "react";

interface UserData {
  profileImage: string;
  userName: string;
  userRole: string;
}

interface ProfileAction {
  label: string;
  action: () => void;
}

interface ProfileProps {
  userData: UserData;
  handleLogout: () => void;
  actions: ProfileAction[];
}

const Profile: React.FC<ProfileProps> = ({
  userData,
  handleLogout,
  actions,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleProfileDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);

    if (isDropdownOpen && buttonRef.current) {
      buttonRef.current.blur();
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative dropdown" ref={dropdownRef}>
      <button
        type="button"
        ref={buttonRef}
        onClick={toggleProfileDropdown}
        className="flex items-center cursor-pointer space-x-3 hover:bg-hover-color rounded-lg p-2 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-color"
      >
        <img
          src={userData.profileImage}
          alt="User profile"
          className="w-10 h-10 rounded-full"
        />
        <div className="flex flex-col">
          <p className="font-bold text-text-color">{userData.userName}</p>
          <p className="font-medium text-sm text-text-color">
            {userData.userRole}
          </p>
        </div>
      </button>

      {isDropdownOpen && (
        <ul className="absolute mt-2 w-48 bg-background-color border border-border-color shadow-lg rounded-md z-10">
          {actions.map((action, index) => (
            <li
              key={index}
              className="px-4 py-2 text-text-color hover:bg-hover-color cursor-pointer"
              onClick={action.action}
            >
              {action.label}
            </li>
          ))}
          <li
            onClick={handleLogout}
            className="px-4 py-2 text-text-color hover:bg-hover-color cursor-pointer"
          >
            Logout
          </li>
        </ul>
      )}
    </div>
  );
};

export default Profile;
