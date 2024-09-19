import React from "react";

// Sample client logos (replace with your actual images)
import vkcPride from "../Images/Clients/Noname.jpg"; // Replace with actual path
import tcl from "../Images/Clients/Tiber.jpg";
import ramachandran from "../Images/Clients/WhatsApp Image 2024-09-18 at 12.47.38_d8df31f2.jpg";
import classicPolo from "../Images/Clients/wiebe-1.png";
import poomer from "../Images/Clients/zenix.jpg";
// import ess from "../Images/clients/ess.png";
// import emusa from "../Images/clients/emusa.png";
// import abaranji from "../Images/clients/abaranji.png";
// import dspGarments from "../Images/clients/dsp-garments.png";
// import sting from "../Images/clients/sting.png";
// import jdc from "../Images/clients/jdc.png";
// import kazo from "../Images/clients/kazo.png";

const clients = [
  { name: "VKC Pride", logo: vkcPride },
  { name: "TCL", logo: tcl },
  { name: "Ramachandran", logo: ramachandran },
  { name: "Classic Polo", logo: classicPolo },
  { name: "Poomer", logo: poomer },
  //   { name: "ESS", logo: ess },
  //   { name: "Emusa", logo: emusa },
  //   { name: "Abaranji", logo: abaranji },
  //   { name: "DSP Garments", logo: dspGarments },
  //   { name: "Sting", logo: sting },
  //   { name: "JDC", logo: jdc },
  //   { name: "Kazo", logo: kazo },
];

const OurClients = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-3xl font-bold text-red-600 mb-8">
          Our Clients
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex justify-center items-center p-4 bg-gray-100 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-200"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="w-24 h-24 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClients;
