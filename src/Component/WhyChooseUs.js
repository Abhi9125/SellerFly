import React from "react";
import clients from "../Images/WhyChooseUsImg/clients.gif";
import retention from "../Images/WhyChooseUsImg/retention.gif";
import expert from "../Images/WhyChooseUsImg/expert.gif";
import saless from "../Images/WhyChooseUsImg/saless.gif";
import support from "../Images/WhyChooseUsImg/support.gif";
import account from "../Images/WhyChooseUsImg/account.gif";
import market from "../Images/WhyChooseUsImg/market.gif";
import experience from "../Images/WhyChooseUsImg/experience.gif";
import spn from "../Images/WhyChooseUsImg/spn.gif";

const WhyChooseUs = () => {
  return (
    <div className="bg-white text-gray-800 p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Why Choose Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* 300+ Happy Clients */}
        <div className="flex items-center">
          <img src={clients} alt="clientIcon" className="w-10 h-10 mr-4" />
          <div>
            <h3 className="font-semibold">200+ Happy Clients</h3>
            <p>Building and growing clients' businesses online.</p>
          </div>
        </div>
        {/* 91% Client Retention */}
        <div className="flex items-center">
          <img src={retention} alt="RetentionIcon" className="w-10 h-10 mr-4" />
          <div>
            <h3 className="font-semibold">91% Client Retention</h3>
            <p>Consistently achieved year on year basis.</p>
          </div>
        </div>
        {/* Expert Managers */}
        <div className="flex items-center">
          <img src={expert} className="w-10 h-10 mr-4" />
          <div>
            <h3 className="font-semibold">Expert Managers</h3>
            <p>Trained in e-commerce, account, inventory, SEO, and PPC.</p>
          </div>
        </div>
        <div className="flex items-center">
          <img src={expert} className="w-10 h-10 mr-4" />
          <div>
            <h3 className="font-semibold">Expert Managers</h3>
            <p>Trained in e-commerce, account, inventory, SEO, and PPC.</p>
          </div>
        </div>
        <div className="flex items-center">
          <img src={expert} className="w-10 h-10 mr-4" />
          <div>
            <h3 className="font-semibold">Expert Managers</h3>
            <p>Trained in e-commerce, account, inventory, SEO, and PPC.</p>
          </div>
        </div>
        <div className="flex items-center">
          <img src={expert} className="w-10 h-10 mr-4" />
          <div>
            <h3 className="font-semibold">Expert Managers</h3>
            <p>Trained in e-commerce, account, inventory, SEO, and PPC.</p>
          </div>
        </div>
        {/* Sales Focused Services */}
        <div className="flex items-center">
          <img src={saless} className="w-10 h-10 mr-4" />
          <div>
            <h3 className="font-semibold">Sales Focused Services</h3>
            <p>Solutions & services focused on growing sales and reach.</p>
          </div>
        </div>
        {/* Whatsapp, Email, and Support */}
        <div className="flex items-center">
          <img src={support} className="w-10 h-10 mr-4" />
          <div>
            <h3 className="font-semibold">Whatsapp, Email, and Support</h3>
            <p>Personalized WhatsApp group for faster communication.</p>
          </div>
        </div>
        {/* Dedicated Account Manager */}
        <div className="flex items-center">
          <img src={account} className="w-10 h-10 mr-4" />
          <div>
            <h3 className="font-semibold">Dedicated Account Manager</h3>
            <p>Helps to improve product ranking in the long term.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
