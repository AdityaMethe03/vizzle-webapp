/* eslint-disable react/prop-types */
import { XMarkIcon } from "@heroicons/react/20/solid";
import emailjs from "emailjs-com";
import { useRef } from "react";

function WaitlistForm({ handleFormOpen }) {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7hb1blc", // ✅ Your service ID
        "template_c67pbwo", // ✅ Your template ID
        formRef.current,
        "XQT1wDVqgZOdacdtB" // ✅ Your public key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Sent successfully!");
          handleFormOpen(false);
        },
        (error) => {
          console.error(error.text);
          alert("Error sending email.");
        }
      );
  };

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
      <p className="text-center text-base text-white mb-6">
        Try AR outfits, shop smart & cut returns.
      </p>

      <form ref={formRef} onSubmit={sendEmail} className="space-y-1">
        <div>
          <p className="text-start text-white">Name</p>
          <input
            type="text"
            name="user_name"
            placeholder="John Doe"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D8DB2]"
          />
        </div>
        <div>
          <p className="text-start text-white">Gender</p>
          <select
            name="gender"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1D8DB2]"
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div>
          <p className="text-start text-white">Email</p>
          <input
            type="email"
            name="user_email" // ✅ Template variable must match EmailJS template
            placeholder="xyz@gmail.com"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D8DB2]"
          />
        </div>
        <div>
          <p className="text-start text-white">Age</p>
          <input
            type="text"
            name="age"
            placeholder="22"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D8DB2]"
          />
        </div>
        <div>
          <p className="text-start text-white">Phone Number</p>
          <input
            type="text"
            name="phone"
            placeholder="987xxx3210"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D8DB2]"
          />
        </div>
        <div className="pt-6 flex justify-center">
          <button
            type="submit"
            className="w-fit px-20 py-2 text-white text-base rounded-full bg-gradient-to-r from-[#1D8DB2] to-[#0C3C4C] transition-colors duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default WaitlistForm;
