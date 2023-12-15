import React from "react";

const Footer = () => {
  return (
    <footer className="bg-neutral-700 py-3 mt-auto">
      <div className="box">
        <div className="flex justify-between items-center text-white">
          <p>
            Copyright @ 2023
            <a href="https://www.mms-it.com" target="_blank">
              MMS-IT
            </a>
          </p>
          <button
            type="button"
            className="text-white-700 border border-white-700 hover:bg-white hover:text-neutral-700 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18"
              />
            </svg>
            <span className="sr-only">Scroll to top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
