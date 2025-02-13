import React, { useState } from "react";
import { MdArrowDropDown, MdMenu, MdClose } from "react-icons/md";//npm i react-icons

const Navbar = () => {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const menuItems = [
        {
            title: "SASSA Status CHECK",
            subMenu: ["Status Pending", "Status Failed", "Status Declined"],
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
        <>
            {/* Navbar */}
            <nav className="bg-[#fbc02d] shadow-md w-full fixed top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center py-2">
                    {/* Left - Logo */}
                    <div className="flex items-center">
                        <img
                            src="https://srdsassacheck.org.za/wp-content/uploads/2024/11/sassasrdstatuscheck.webp"
                            alt="SASSA Logo"
                            className="w-20"
                        />
                    </div>

                    {/* Center - Desktop Menu */}
                    <div className="hidden lg:flex space-x-6">
                        {menuItems.map((item, index) => (
                            <div
                                key={index}
                                className="relative group py-4"
                                onMouseEnter={() => item.subMenu && setOpenDropdown(index)}
                                onMouseLeave={() => item.subMenu && setOpenDropdown(null)}
                            >
                                <button className="text-black text-sm xl:text-lg font-medium hover:text-gray-800 flex items-center gap-1">
                                    {item.title} {item.subMenu && <MdArrowDropDown />}
                                </button>

                                {/* Dropdown (Only for items with subMenu) */}
                                {item.subMenu && openDropdown === index && (
                                    <div className="absolute left-0 mt-4 pt-4">
                                        <div className="w-48 bg-[#0c4e31] text-white text-xs shadow-lg">
                                            {item.subMenu.map((subItem, subIndex) => (
                                                <a
                                                    key={subIndex}
                                                    href="#"
                                                    className="block px-4 py-3 border-b border-slate-600 transition-all duration-300 hover:bg-[#cf2e2e]"
                                                >
                                                    {subItem}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-black"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <MdMenu size={32} />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 bg-black/50 z-50" onClick={() => setMobileMenuOpen(false)}></div>
            )}

            {/* Mobile Sidebar */}
            <div className={`fixed top-0 right-0 h-full w-full sm:w-2/3 bg-black text-white transform ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 z-50`}>
                {/* Close Button */}
                <div className="flex justify-end p-4">
                    <button onClick={() => setMobileMenuOpen(false)}>
                        <MdClose size={28} className="text-white" />
                    </button>
                </div>

                {/* Mobile Menu Items */}
                <div className="flex flex-col  p-4">
                    {menuItems.map((item, index) => (
                        <div key={index}>
                            <button
                                className="w-full flex justify-between py-3 px-4 text-left "
                                onClick={() => setOpenDropdown(openDropdown === index ? null : index)}
                            >
                                {item.title} {item.subMenu && <MdArrowDropDown className={`text-xl ${openDropdown==index?'rotate-180':''} transition-all duration-300`} />}
                            </button>
                            {item.subMenu && (
                                <div className={`pl-4 ${ openDropdown === index ?'h-auto':'h-0 overflow-hidden'} transition-all duration-300`}>
                                    {item.subMenu.map((subItem, subIndex) => (
                                        <a
                                            key={subIndex}
                                            href="#"
                                            className="block px-4 py-2 text-sm hover:bg-gray-700"
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
        </>
    );
};

export default Navbar;
