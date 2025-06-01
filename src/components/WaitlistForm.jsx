/* eslint-disable react/prop-types */
import { XMarkIcon } from "@heroicons/react/20/solid";

function WaitlistForm({ handleFormOpen }) {
  return (
    <div className="relative w-100 bg-[#33B9E7] rounded-xl shadow-xl p-2 mx-auto sm:p-6">
      <button
        onClick={() => handleFormOpen(false)}
        className="absolute top-3 right-3 text-white hover:text-black"
      >
        <XMarkIcon className="h-6 w-6" />
      </button>
      <h2 className="text-xl sm:text-2xl font-semibold text-center text-white mb-1">
        Join the Fashion <br /> <span className="font-bold">Revolution!</span>
      </h2>
      <p className="text-center text-sm text-white mb-6">
        Be a part of the revolution
        <br />
        fashion delivered in 60 minutes!
      </p>
      <form className="space-y-1">
        <div>
          <p className="text-start text-white">Name</p>
          <input
            type="text"
            placeholder="XYZ..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D8DB2]"
          />
        </div>
        <div>
          <p className="text-start text-white">Gender</p>
          <select className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1D8DB2]">
            <option>Select</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        <div>
          <p className="text-start text-white">Email</p>
          <input
            type="email"
            placeholder="xyz@gmail.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D8DB2]"
          />
        </div>
        <div>
          <p className="text-start text-white">Age</p>
          <input
            type="text"
            placeholder="22"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D8DB2]"
          />
        </div>
        <div>
          <p className="text-start text-white">Phone-number</p>
          <input
            type="text"
            placeholder="987xxx3210"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D8DB2]"
          />
        </div>
        <div className="pt-6">
          <button
            type="submit"
            className="w-fit px-20 py-2 text-slate-700 text-lg rounded-full bg-gradient-to-r from-white to-gray-300 hover:from-gray-300 hover:to-white transition-colors duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default WaitlistForm;
