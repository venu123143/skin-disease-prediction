import { AiFillCaretDown, AiFillCaretRight } from "react-icons/ai";

const Faq = ({ toggleTab, num, activeTab,title,desc }) => {
  return (
    <div>
      {/* single faq */}
      <div className="border-b border-gray-200 pb-4 bg-[#e7e2e2] p-2 rounded-sm">
        <button
          className="flex items-center justify-between w-full"
          onClick={() => toggleTab(num)}>
          <span className="text-lg font-medium text-black">
           {title}
          </span>
          {activeTab === num ? (
            <AiFillCaretDown size={22} />
          ) : (
            <AiFillCaretRight size={22} />
          )}
        </button>
        {activeTab === num ? (
          <div className="mt-4">
            <p className="text-base text-gray-500">
             {desc}
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Faq;
