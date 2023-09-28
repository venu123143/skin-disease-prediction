import React, { useState } from "react";
import { AiFillCaretDown, AiFillCaretRight } from "react-icons/ai";
import Faq from "../../pages/Faq";

const Doughts = () => {
  const [activeTab, setActiveTab] = useState(0);
  const toggleTab = (tab) => {
    if (activeTab === tab) {
      setActiveTab(0);
    } else {
      setActiveTab(tab);
    }
  };
  return (
    <div className={`flex items-center my-8`}>
      <div className="space-y-4 w-full mx-10">
        <Faq
          toggleTab={toggleTab}
          num={1}
          activeTab={activeTab}
          title=" How do I track my order ?"
          desc="We typically process and ship orders within 1-2 business days.
              Depending on your location, it can take an additional 2-7 days for
              your order to arrive."
        />
        <Faq
          toggleTab={toggleTab}
          num={2}
          activeTab={activeTab}
          title=" How do I track my order ?"
          desc="We typically process and ship orders within 1-2 business days.
              Depending on your location, it can take an additional 2-7 days for
              your order to arrive."
        />
        <Faq
          toggleTab={toggleTab}
          num={3}
          activeTab={activeTab}
          title=" How do I track my order ?"
          desc="We typically process and ship orders within 1-2 business days.
              Depending on your location, it can take an additional 2-7 days for
              your order to arrive."
        />
        <Faq
          toggleTab={toggleTab}
          num={4}
          activeTab={activeTab}
          title=" How do I track my order ?"
          desc="We typically process and ship orders within 1-2 business days.
              Depending on your location, it can take an additional 2-7 days for
              your order to arrive."
        />
        <Faq
          toggleTab={toggleTab}
          num={5}
          activeTab={activeTab}
          title=" How do I track my order ?"
          desc="We typically process and ship orders within 1-2 business days.
              Depending on your location, it can take an additional 2-7 days for
              your order to arrive."
        />
        <Faq
          toggleTab={toggleTab}
          num={6}
          activeTab={activeTab}
          title=" How do I track my order ?"
          desc="We typically process and ship orders within 1-2 business days.
              Depending on your location, it can take an additional 2-7 days for
              your order to arrive."
        />
        <Faq
          toggleTab={toggleTab}
          num={7}
          activeTab={activeTab}
          title=" How do I track my order ?"
          desc="We typically process and ship orders within 1-2 business days.
              Depending on your location, it can take an additional 2-7 days for
              your order to arrive."
        />
      </div>
    </div>
  );
};

export default Doughts;
