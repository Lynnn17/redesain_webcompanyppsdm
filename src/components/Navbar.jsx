import { useState } from "react";
import LogoBlu from "../assets/blu.png";
import LogoEsdm from "../assets/esdm.png";
import LogoPpsdm from "../assets/ppsdm.png";

const Navbar = () => {
  const [sidebar, setSidebar] = useState({
    profil: false,
    layanan: false,
    sidebarVisible: false,
  });

  return (
    <>
      <nav className="flex justify-between bg-[#4D4E4E] h-18 text-white p-4 ">
        <div className="flex xl:pl-10 gap-1 items-center">
          <img
            className="w-9  mx-auto xl:hidden"
            src={LogoEsdm}
            alt="ppsdm migas"
          />
          <img
            className="hidden xl:block w-24  mx-auto"
            src={LogoPpsdm}
            alt="ppsdm migas"
          />
          <p className="text-2xl font-bold">|</p>
          <img className="w-9  mx-auto ml-1" src={LogoBlu} alt="blu" />
        </div>
        {/* Menu Hp & Tablet */}
        <div className=" xl:hidden z-20">
          <button
            onClick={() =>
              setSidebar({
                ...sidebar,
                sidebarVisible: !sidebar.sidebarVisible,
              })
            }
          >
            {sidebar.sidebarVisible ? (
              // Open SideBar
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="closeSidebar"
                  className="icon glyph w-8 h-8 "
                  width="2em"
                  height="2em"
                  viewBox="0 0 24 24"
                  role="button"
                  onClick={() =>
                    setSidebar({
                      ...sidebar,
                      sidebarVisible: false,
                    })
                  }
                >
                  <path
                    fill="#ffff"
                    d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                  />
                </svg>
              </div>
            ) : (
              // Close SideBar
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="menu"
                  className="icon glyph w-8 h-8"
                  width="2em"
                  height="2em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#ffff"
                    d="M21 19H9a1 1 0 0 1 0-2H21a1 1 0 0 1 0 2Z"
                  />
                  <path
                    fill="#000"
                    d="M21 13H3a1 1 0 0 1 0-2H21a1 1 0 0 1 0 2Z"
                  />
                  <path
                    fill="#ffff"
                    d="M15 7H3a1 1 0 0 1 0-2H15a1 1 0 0 1 0 2Z"
                  />
                </svg>
              </div>
            )}
          </button>

          {/* Sidebar HP */}
          {sidebar.sidebarVisible && (
            <aside className="fixed h-screen w-[50%] bg-[#4D4E4E] z-50 top-[4.2em] bottom-0 left-0">
              <ul className="mt-8 flex flex-col gap-5  font-inter font-medium text-lg pl-5 pr-8  items-start ">
                <li className="w-fit inline-block relative transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-blue-900 hover:before:w-full hover:before:opacity-100">
                  <a href="/">Home</a>
                </li>

                <li className="w-fit inline-block relative transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-blue-900 hover:before:w-full hover:before:opacity-100">
                  <a href="/">Berita</a>
                </li>

                <li>
                  <button className="flex items-center gap-[0.6rem] w-fit relative  transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-blue-900 hover:before:w-full hover:before:opacity-100">
                    Profil
                    <svg
                      className="w-5 h-5"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="icons/regular/chevron-up-s">
                        <path
                          id="Icon"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M14.4114 7.74408C14.7368 7.41864 15.2645 7.41864 15.5899 7.74408C15.9153 8.06951 15.9153 8.59715 15.5899 8.92259L10.5899 13.9226C10.2645 14.248 9.73683 14.248 9.4114 13.9226L4.4114 8.92259C4.08596 8.59715 4.08596 8.06951 4.4114 7.74408C4.73683 7.41864 5.26447 7.41864 5.58991 7.74408L10.0007 12.1548L14.4114 7.74408Z"
                          fill="currentColor"
                        />
                      </g>
                    </svg>
                  </button>
                </li>

                <li>
                  <button className="flex items-center gap-[0.6rem] w-fit relative  transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-blue-900 hover:before:w-full hover:before:opacity-100">
                    Layanan
                    <svg
                      className="w-5 h-5"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="icons/regular/chevron-up-s">
                        <path
                          id="Icon"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M14.4114 7.74408C14.7368 7.41864 15.2645 7.41864 15.5899 7.74408C15.9153 8.06951 15.9153 8.59715 15.5899 8.92259L10.5899 13.9226C10.2645 14.248 9.73683 14.248 9.4114 13.9226L4.4114 8.92259C4.08596 8.59715 4.08596 8.06951 4.4114 7.74408C4.73683 7.41864 5.26447 7.41864 5.58991 7.74408L10.0007 12.1548L14.4114 7.74408Z"
                          fill="currentColor"
                        />
                      </g>
                    </svg>
                  </button>
                </li>

                <li className="w-fit inline-block relative transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-blue-900 hover:before:w-full hover:before:opacity-100">
                  <a href="/">Kontak Kami</a>
                </li>
                <li className="w-fit inline-block relative transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-blue-900 hover:before:w-full hover:before:opacity-100">
                  <a href="/">Berita</a>
                </li>
                <li className="w-fit inline-block relative transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-blue-900 hover:before:w-full hover:before:opacity-100">
                  <a href="/">Daftar</a>
                </li>
                <li className="w-fit inline-block relative transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-blue-900 hover:before:w-full hover:before:opacity-100">
                  <a href="/">Cek Sertifikat</a>
                </li>
                <li className="w-fit inline-block relative transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-blue-900 hover:before:w-full hover:before:opacity-100">
                  <a href="/">Data Mitra Resmi</a>
                </li>
              </ul>
            </aside>
          )}
        </div>
        {/* end Menu Hp & Tablet */}

        {/* Menu Laptop */}
        <div className="hidden m-8 xl:flex  items-center justify-center gap-5 text-1xl">
          <a
            href="#"
            className="inline-block relative transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-blue-900 hover:before:w-full hover:before:opacity-100"
          >
            Home
          </a>
          <a
            href="#"
            className="inline-block relative transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-blue-900 hover:before:w-full hover:before:opacity-100"
          >
            Berita
          </a>

          <button className="inline-block relative transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-blue-900 hover:before:w-full hover:before:opacity-100 flex items-center ml-1">
            Profil
            <svg
              className="w-5 h-5"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <svg id="icons/regular/chevron-up-s">
                <path
                  id="Icon"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.4114 7.74408C14.7368 7.41864 15.2645 7.41864 15.5899 7.74408C15.9153 8.06951 15.9153 8.59715 15.5899 8.92259L10.5899 13.9226C10.2645 14.248 9.73683 14.248 9.4114 13.9226L4.4114 8.92259C4.08596 8.59715 4.08596 8.06951 4.4114 7.74408C4.73683 7.41864 5.26447 7.41864 5.58991 7.74408L10.0007 12.1548L14.4114 7.74408Z"
                  fill="currentColor"
                />
              </svg>
            </svg>
          </button>

          <button className="inline-block relative transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-blue-900 hover:before:w-full hover:before:opacity-100 flex items-center ml-1">
            Layanan
            <svg
              className="w-5 h-5"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <svg id="icons/regular/chevron-up-s">
                <path
                  id="Icon"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.4114 7.74408C14.7368 7.41864 15.2645 7.41864 15.5899 7.74408C15.9153 8.06951 15.9153 8.59715 15.5899 8.92259L10.5899 13.9226C10.2645 14.248 9.73683 14.248 9.4114 13.9226L4.4114 8.92259C4.08596 8.59715 4.08596 8.06951 4.4114 7.74408C4.73683 7.41864 5.26447 7.41864 5.58991 7.74408L10.0007 12.1548L14.4114 7.74408Z"
                  fill="currentColor"
                />
              </svg>
            </svg>
          </button>

          <a
            href="#"
            className="inline-block relative transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-blue-900 hover:before:w-full hover:before:opacity-100"
          >
            Kontak Kami
          </a>
          <a
            href="#"
            className="inline-block relative transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-blue-900 hover:before:w-full hover:before:opacity-100"
          >
            Pengumuman
          </a>

          <a
            href="#"
            className="inline-block relative transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-blue-900 hover:before:w-full hover:before:opacity-100"
          >
            Daftar
          </a>
          <a
            href="#"
            className="inline-block relative transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-blue-900 hover:before:w-full hover:before:opacity-100"
          >
            Cek Sertifikat
          </a>
          <a
            href="#"
            className="inline-block relative transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-blue-900 hover:before:w-full hover:before:opacity-100"
          >
            Data Mitra Resmi
          </a>
        </div>

        {/* end Menu Laptop */}
      </nav>
    </>
  );
};

export default Navbar;
