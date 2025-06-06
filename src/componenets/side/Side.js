"use client";
import Image from "next/image";
import { useState } from "react";
export default function Side() {
  const [isOpen, setIsOpen] = useState(false);

  const menu = [
    { name: "HOME" },
    { name: "Tickets" },
    { name: "News" },
    { name: "Shareholders & Board" },
  ];

  const secondMenu = [
    { name: "Settings" },
    { name: "Contact Us" },
    { name: "Help" },
  ];

  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", search);
    // TODO: 實作實際送出邏輯
  };
  return (
    <>
      {/* 漢堡按鈕：小螢幕顯示 */}
      <div className="md:hidden px-4 py-2 fixed top-0 left-0 z-50 w-full flex justify-between items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="dm:hidden p-2 text-4xl text-white bg-transparent hover:bg-white/10 rounded-full transition"
        >
          ☰
        </button>
      </div>
      {/* Sidebar 主體 */}

      <div
        className={`fixed top-0 left-0 z-50 md:static
    flex flex-col justify-between items-start h-full px-6 py-2 bg-[#393939] text-[#D7C5B4]
    w-full md:w-[35%] lg:w-[25%] overflow-y-auto 
    transform transition-transform duration-300 ease-in-out
    ${isOpen ? "translate-x-0" : "-translate-x-full"}
    md:translate-x-0 md:flex`}
      >
        {/* 手機版關閉按鈕 */}
        <button
          onClick={() => setIsOpen(false)}
          className="md:hidden text-white text-2xl mt-4"
        >
          ✕
        </button>

        {/* title */}
        <div className="w-full flex justify-between items-center mt-4">
          <div className="flex items-center justify-between gap-2">
            <h2 className="font-extrabold text-5xl">Air</h2>
          </div>
          <Image
            src="/World.svg"
            alt="Logo"
            width={50}
            height={50}
            className="w-8"
          />
          {/* <div className="bg-white rounded-4xl p-5">1</div> */}
        </div>

        {/* Airplane */}
        <div
          className="w-full flex justify-between items-center text-size-md  font-extrabold text-lg"
          style={{ opacity: 0.6 }}
        >
          <div>Airplane</div>
          <div>17</div>
        </div>

        {/* Menu */}
        <div className="mt-10">
          <ul>
            {menu.map((item, index) => (
              <li
                key={index}
                className="text-[#D7C5B4] text-size-md hover:text-white cursor-pointer mb-10 text-lg"
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col justify-between items-start w-full">
          {/* Search */}
          <div className="w-full">
            <form onSubmit={handleSubmit} className="w-full">
              <div className="flex items-start border-b border-[#D7C5B4] focus-within:border-white transition">
                <input
                  type="search"
                  required
                  placeholder="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="flex-1 px-2 py-3 bg-transparent focus:outline-none text-[#D7C5B4]"
                />
                <button
                  type="submit"
                  className="w-10 h-10 rounded-full text-[#D7C5B4] flex items-center justify-center hover:bg-gray-800 transition"
                >
                  Sub
                </button>
              </div>
            </form>
          </div>
          {/* secondMenu */}
          <div className="mt-10">
            <ul>
              {secondMenu.map((item, index) => (
                <li
                  key={index}
                  className="text-[#D7C5B4] text-size-md hover:text-white cursor-pointer mb-4 text-lg"
                  style={{ opacity: 0.6 }}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
