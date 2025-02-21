import React from "react";

// Sample client logos (replace with your actual images)
import Noname from "../Images/Clients/Noname.jpg"; // Replace with actual path
import Tiber from "../Images/Clients/Tiber.jpg";
import PallavanOil from "../Images/Clients/PallavanOil.jpg";
import wiebe from "../Images/Clients/wiebe-1.png";
import zenix from "../Images/Clients/zenix.jpg";

const clients = [
  { name: "Noname", logo: Noname },
  { name: "Tiber", logo: Tiber },
  { name: "PallavanOil", logo: PallavanOil },
  { name: "wiebe", logo: wiebe },
  { name: "zenix", logo: zenix },
];

const OurClients = () => {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-3xl font-bold text-blue-950 mb-8">
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
