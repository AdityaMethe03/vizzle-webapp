import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import { faqs } from "../../public/data/faqData.js";

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full h-fit px-2 py-24 bg-opacity-[10%] bg-[#0081FE] sm:px-4">
      <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-8">
        Frequently Asked Questions
      </h2>
      <div className="max-w-5xl mx-auto">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-500 ease-in-out bg-white"
            >
              <button
                onClick={() => handleClick(index)}
                className="w-full flex justify-between items-center p-4 text-lg font-medium text-left cursor-pointer"
              >
                {faq.question}
                {activeIndex === index ? (
                  <ChevronUpIcon className="h-5 w-5" />
                ) : (
                  <ChevronDownIcon className="h-5 w-5" />
                )}
              </button>

              {/* Smooth Expansion */}
              <div
                className={`grid transition-all duration-500 ease-in-out overflow-hidden ${
                  activeIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden px-4 pb-4 bg-gray-50 ">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
