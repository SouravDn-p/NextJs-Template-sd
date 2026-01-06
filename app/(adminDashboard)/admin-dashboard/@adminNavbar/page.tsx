import React from "react";

export default function AdminNavbar() {
  return (
    <div className="flex items-center justify-between px-4 py-3">
      <div className="flex items-center">
        <h1 className="text-xl font-semibold text-gray-800 md:hidden">
          Admin Panel
        </h1>
        <h1 className="text-xl font-semibold text-gray-800 hidden md:block">
          Admin Dashboard
        </h1>
      </div>

      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full hover:bg-gray-100 relative">
          <svg
            className="w-5 h-5 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
            <span className="text-gray-700 font-medium">U</span>
          </div>
          <span className="hidden md:inline text-gray-700 font-medium">
            Admin User
          </span>
        </div>
      </div>
    </div>
  );
}
