import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import clients from "../Images/WhyChooseUsImg/clients.gif";
import retention from "../Images/WhyChooseUsImg/retention.gif";
import expert from "../Images/WhyChooseUsImg/expert.gif";
import saless from "../Images/WhyChooseUsImg/saless.gif";
import support from "../Images/WhyChooseUsImg/support.gif";
import account from "../Images/WhyChooseUsImg/account.gif";
import market from "../Images/WhyChooseUsImg/market.gif";
import experience from "../Images/WhyChooseUsImg/experience.gif";
import spn from "../Images/WhyChooseUsImg/spn.gif";

const servicesData = [
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
    description: "Trained in e-commerce, account, inventory, SEO, and PPC.",
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
    title: "WhatsApp, Email, and Support",
    description: "Personalized WhatsApp group for faster communication.",
  },
  {
    icon: spn,
    title: "Dedicated Account Manager",
    description: "Helps to improve product ranking in the long term.",
  },
];

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <section className="bg-gradient-to-r from-white to-gray-100 text-gray-800 py-12 px-8 rounded-lg shadow-xl">
      <div className="container mx-auto">
        {/* Section Title */}
        <div className="text-center mb-10" data-aos="fade-up">
          <h2 className="text-3xl font-extrabold text-red-600 mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-gray-600">
            Discover the reasons why businesses trust SellerFly to elevate their
            online presence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="flex items-start p-6 bg-white rounded-lg shadow-md hover:bg-red-50 hover:shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={index * 100} // Staggered animation delay
            >
              <img
                src={service.icon}
                alt={`${service.title} Icon`}
                className="w-16 h-16 mr-6 object-contain transition-transform duration-300 hover:scale-110"
              />
              <div>
                <h3 className="font-semibold text-xl text-black mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
