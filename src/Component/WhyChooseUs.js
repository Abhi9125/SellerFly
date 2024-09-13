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
    <section className="bg-gradient-to-r from-white to-gray-100 text-gray-800 py-12 px-8 rounded-lg shadow-xl">
      <div className="container mx-auto">
        <h2 className="text-3xl font-extrabold text-center text-red-600 mb-10">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: clients,
              title: "100+ Happy Clients",
              description: "Building and growing clients' businesses online.",
            },
            {
              icon: retention,
              title: "91% Client Retention",
              description: "Consistently achieved year on year basis.",
            },
            {
              icon: expert,
              title: "Registered Partner",
              description:
                "Sellerfly is a registered partner in major marketplaces like Amazon & Flipkart.",
            },
            {
              icon: saless,
              title: "Expert Managers",
              description:
                "Trained in e-commerce, account, inventory, SEO, and PPC.",
            },
            {
              icon: support,
              title: "Daily/Weekly Reporting",
              description:
                "Detailed reporting and tracking of your daily & weekly progress reports.",
            },
            {
              icon: account,
              title: "Tailored Solutions",
              description:
                "Meet your specific needs and goals with tailor-made strategies.",
            },
            {
              icon: market,
              title: "Performance Based Services",
              description: "We charge you based on performance.",
            },
            {
              icon: experience,
              title: "Whatsapp, Email, and Support",
              description:
                "Personalized WhatsApp group for faster communication.",
            },
            {
              icon: spn,
              title: "Dedicated Account Manager",
              description: "Helps to improve product ranking in the long term.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-start p-4 bg-white rounded-lg shadow-md hover:bg-red-50 hover:shadow-lg transition-shadow duration-300 ease-in-out"
            >
              <img
                src={item.icon}
                alt="service icon"
                className="w-16 h-16 mr-6 object-contain"
              />
              <div>
                <h3 className="font-semibold text-xl text-black mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
