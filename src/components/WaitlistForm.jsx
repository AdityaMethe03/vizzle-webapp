/* eslint-disable react/prop-types */
import { XMarkIcon } from "@heroicons/react/20/solid";

function WaitlistForm({ handleFormOpen }) {
  return (
    <div className="relative w-100 bg-[#fff7f3] rounded-xl shadow-xl p-2 mx-auto sm:p-6">
      <button
        onClick={() => handleFormOpen(false)}
        className="absolute top-3 right-3 text-red-500 hover:text-red-700"
      >
        <XMarkIcon className="h-6 w-6" />
      </button>
      <h2 className="text-xl sm:text-2xl font-semibold text-center text-[#ff4b5c] mb-1">
        Join the Fashion <br /> <span className="font-bold">Revolution!</span>
      </h2>
      <p className="text-center text-sm text-gray-700 mb-6">
        Be a part of the revolution
        <br />
        fashion delivered in 60 minutes!
      </p>
      <form className="space-y-1">
        <div>
          <p className="text-start text-[#ff4b5c]">Name</p>
          <input
            type="text"
            placeholder="XYZ..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff4b5c]"
          />
        </div>
        <div>
          <p className="text-start text-[#ff4b5c]">Gender</p>
          <select className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#ff4b5c]">
            <option>Select</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        <div>
          <p className="text-start text-[#ff4b5c]">Email</p>
          <input
            type="email"
            placeholder="xyz@gmail.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff4b5c]"
          />
        </div>
        <div>
          <p className="text-start text-[#ff4b5c]">Age</p>
          <input
            type="text"
            placeholder="22"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff4b5c]"
          />
        </div>
        <div>
          <p className="text-start text-[#ff4b5c]">Phone-number</p>
          <input
            type="text"
            placeholder="987xxx3210"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff4b5c]"
          />
        </div>
        <div className="pt-6">
          <button
            type="submit"
            className="w-fit px-20 py-2 text-white text-lg rounded-full bg-gradient-to-r from-[#ff4b5c] to-[#ff7b6a] hover:from-[#ff7b6a] hover:to-[#ff4b5c] transition-colors duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default WaitlistForm;
