import React from "react";

const ContactSupport: React.FC = () => {
  return (
    <div className="w-full flex justify-center items-center py-12 bg-transparent">
      <div className="bg-white shadow border-gray-200 rounded-lg px-8 py-10 w-full max-w-4xl text-center">
        <div className="flex justify-center mb-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/597/597177.png"
            alt="support"
            className="w-10 h-10"
          />
        </div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Customer Support
        </h2>
        <p className="text-base text-gray-700 mb-1">
          Call or Message us on:{" "}
          <span className="font-semibold text-gray-900">
            +91-8685020202
          </span>
        </p>
        <p className="text-sm text-gray-600 mt-2">
          We are here to help you 09:00 AM to 09:00 PM ! Do not hesitate to ask us anything.
        </p>
      </div>
    </div>
  );
};

export default ContactSupport;
