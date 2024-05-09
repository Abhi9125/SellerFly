import React from "react";

const OurServies = () => {
  return (
    <div className="bg-white text-gray-800 p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Our Services</h2>
      <p>Personalized solutions and services to boost your online business.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* 300+ Happy Clients */}

        <div>
          <h3 className="font-semibold">
            E-COMMERCE SELLER ACCOUNT MANAGEMENT
          </h3>
          <p>
            End to End ecommerce seller account management with a focus on
            sustained sales growth.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">GLOBAL SELLER ACCOUNT MANAGEMENT</h3>
          <p>
            Optimize your global e-commerce presence. We manage your seller
            accounts for seamless international expansion and increased sales.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">WEBSITE DESIGN & DEVELOPMENT</h3>
          <p>
            We create websites that are entirely tailored to ensure excellent
            performance, adaptability, and an optimal user experience.
          </p>
        </div>
        <div>
          <h3 className="font-semibold">DIGITAL MARKETING</h3>
          <p>
            We aim to connect with the appropriate audience, boost brand
            recognition, establish a strong brand identity, and drive
            conversions.
          </p>
        </div>
        <div>
          <h3 className="font-semibold">SHOPIFY DEVELOPMENT AND MAINTENANCE</h3>
          <p>
            Build your online store with expert Shopify development and
            maintenance. Seamless, secure, and tailored for success.
          </p>
        </div>
        <div>
          <h3 className="font-semibold">PRODUCT PHOTOSHOOT</h3>
          <p>
            We provide top-tier photography services for your products, which
            include model photoshoots to cater to your business growth.
          </p>
        </div>
        <div>
          <h3 className="font-semibold">
            TRADEMART CERTIFICATE(BRAND REGISTRATION)
          </h3>
          <p>
            We provide trademark & brand registration services for your brand.
          </p>
        </div>
        <div>
          <h3 className="font-semibold">LEAD GENERATION</h3>
          <p>
            We design a branding strategy to enhance your brand’s recognition
            and identity by proficiently conveying its fundamental values
            through social media and digital marketing initiatives.
          </p>
        </div>
        <div>
          <h3 className="font-semibold">BRANDING</h3>
          <p>
            A branding strategy aims to develop an organization’s brand
            awareness and identity by effectively communicating its core values
            through social media and digital marketing campaigns.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurServies;
