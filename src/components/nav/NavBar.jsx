import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import useMediaQuery from "../../hooks/useMediaQuery";
import { motion } from "framer-motion";
import { Menu, Transition, Popover } from "@headlessui/react";
import TopNav from "../TopNav";
import { MdAddShoppingCart } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreen = useMediaQuery("(min-width: 768px)");

  return (
    <>
      <TopNav />
      <nav
        className="fixed top-[74px] lg:mt-0 mt-[44px] w-full flex items-center justify-between md:py-8 py-3 md:px-28 
        px-7 text-black z-50 bg-white shadow-sm"
      >
        <Link to="/" className="w-40 h-6 hidden lg:block">
          <img src="./images/logo.png" className="w-full h-full" alt="" />
        </Link>

        {/**DESKTOP NAVIGATION */}
        {isAboveSmallScreen ? (
          <div className=" no-underline text-lg flex items-center justify-center gap-14">
            <Link to="#" className="hover:text-orange-500">
              {" "}
              Services
            </Link>
            <Link to="#" className="hover:text-orange-500">
              {" "}
              For Business
            </Link>
            <Link to="#" className="hover:text-orange-500">
              {" "}
              Our Clinics
            </Link>

            <Popover className="relative" onMouseLeave={() => setIsOpen(false)}>
              {({ open }) => (
                <Menu as="div" className="relative">
                  <Popover.Button
                    className={`${
                      open ? "text-black" : "text-black"
                    } group hover:text-orange-500 inline-flex items-center justify-center focus:outline-none`}
                    onMouseEnter={() => setIsOpen(true)}
                  >
                    Company
                  </Popover.Button>

                  <Transition
                    show={isOpen}
                    as={React.Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                    onMouseLeave={() => setIsOpen(false)}
                  >
                    <Popover.Panel
                      static
                      className="absolute z-10 w-screen max-w-xs px-4 mt-3 transform -translate-x-1/4 left-1/2 sm:px-0"
                    >
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <Menu.Items
                          className="w-40 rounded-md shadow-lg bg-white origin-top-right focus:outline-none absolute"
                          static
                          onMouseEnter={() => setIsOpen(true)}
                        >
                          <div className="p-2 flex flex-col text-sm items-start justify-center gap-1">
                            {" "}
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to="#"
                                  aria-hidden="true"
                                  className={` w-full rounded-md py-2 ${
                                    active
                                      ? "text-green-500 bg-green-100"
                                      : "text-black"
                                  } flex items-center justify-center`}
                                >
                                  {" "}
                                  About us
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to="#"
                                  aria-hidden="true"
                                  className={` w-full rounded-md py-2 ${
                                    active
                                      ? "text-green-500 bg-green-100"
                                      : "text-black"
                                  } flex items-center justify-center`}
                                >
                                  {" "}
                                  Careers
                                </Link>
                              )}
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </Menu>
              )}
            </Popover>
            <Link to="#" className="hover:text-orange-500">
              {" "}
              Contact us
            </Link>
            <Link to="#" className="text-orange-500">
              <MdAddShoppingCart size={30} />
            </Link>
            <Link to="#" className="text-orange-500">
              <CgProfile size={30} />
            </Link>
          </div>
        ) : (
          <motion.button
            alt="menu"
            className="text-black p-3 hover:text-black/70 transition duration-100 w-full flex items-center justify-between"
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
             {!isAboveSmallScreen && isMenuToggled ? (
                  <FaTimes size={24} />
                ) : (
                  <FaBars size={24} />
                )}
                <Link to="/" className="w-30 h-6">
                  <img
                    src="./images/logo.png"
                    className="w-full h-full"
                    alt=""
                  />
                </Link>
                <Link to="#" className="text-orange-500">
                  <MdAddShoppingCart size={30} />
                </Link>
          </motion.button>
        )}

        {/* MOILE MENU POUP */}
        {!isAboveSmallScreen && isMenuToggled && (
          <div className="fixed left-0 top-0 h-[85%] bg-white shadow-md w-full pt-16">
            <div className="flex justify-start px-7 py-2">
              {/**Close btn */}
              <motion.button
                alt="menu"
                className="text-black p-3 hover:text-black/70 transition duration-100 w-full flex items-center justify-between"
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                {!isAboveSmallScreen && isMenuToggled ? (
                  <FaTimes size={24} />
                ) : (
                  <FaBars size={24} />
                )}
                <Link to="/" className="w-30 h-6">
                  <img
                    src="./images/logo.png"
                    className="w-full h-full"
                    alt=""
                  />
                </Link>
                <Link to="#" className="text-orange-500">
                  <MdAddShoppingCart size={30} />
                </Link>
              </motion.button>
            </div>
            <motion.div
              className="flex flex-col items-centre justify-start gap-7 text-xl px-7 divide-y divide-gray-200"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 1 }}
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <Link to="#">
                {" "}
                Treatments
              </Link>
              <Link to="#">
                {" "}
                Collect a sample
              </Link>
              <Link to="#">
                {" "}
                Vaccation
              </Link>
              <Link to="#">
                {" "}
                For Business
              </Link>
              <Link to="#">
                {" "}
                Our Clinics
              </Link>
              <Link to="#">
                {" "}
                Membership
              </Link>
              <Link to="#">
                {" "}
                About Us
              </Link>
              <Link to="#">
                {" "}
                Careers
              </Link>
              <Link to="#">
                {" "}
                Contact Us
              </Link>
              <Link to="#">
                {" "}
                Sign In
              </Link>
              <Link to="#">
                {" "}
                Create Account
              </Link>
            </motion.div>
          </div>
        )}
      </nav>
    </>
  );
};
export default NavBar;
