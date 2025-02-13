import React, { useState } from "react";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const menuItems = [
    {
      title: "SASSA Status CHECK",
      subMenu: ["Check Online", "Appeal Process", "Reconsideration"],
    },
    { title: "Payment Dates", subMenu: null }, // No dropdown
    {
      title: "Sassa Application",
      subMenu: ["Apply Online", "Requirements", "FAQs"],
    },
    { title: "Grant Eligibility Criteria", subMenu: null }, // No dropdown
    {
      title: "SASSA GRANTS",
      subMenu: ["Social Relief", "Care Dependency", "Foster Child"],
    },
    {
      title: "More",
      subMenu: ["Contact Us", "Help Center"],
    },
  ];

  return (
    <nav className="bg-yellow-500 shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left - Logo */}
          <div className="flex items-center">
            <img
              src="/sassa-logo.png" // Replace with actual logo
              alt="SASSA Logo"
              className="h-12"
            />
          </div>

          {/* Center - Menu Items */}
          <div className="hidden md:flex space-x-6">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => item.subMenu && setOpenDropdown(index)}
                onMouseLeave={() => item.subMenu && setOpenDropdown(null)}
              >
                <button className="text-black font-medium hover:text-gray-800">
                  {item.title} {item.subMenu ? "▼" : ""}
                </button>

                {/* Dropdown (Only for items with subMenu) */}
                {item.subMenu && openDropdown === index && (
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md">
                    {item.subMenu.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href="#"
                        className="block px-4 py-2 text-black hover:bg-gray-200"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
