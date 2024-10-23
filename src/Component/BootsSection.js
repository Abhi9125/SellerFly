import React, { useState } from "react";
import ModalComponent from "./ModalComponent"; // Import your ModalComponent

const BoostSection = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <section className="bg-gradient-to-r from-black to-red-600 mt-5 py-16 px-8 rounded-tl-[50px] rounded-tr-[50px]">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 animate-fade-in">
          Does your Online business need a boost?
        </h2>
        <p className="text-white mb-8 max-w-2xl mx-auto text-lg leading-relaxed animate-fade-in-delay">
          We pursue relationships based on transparency, persistence, mutual
          trust, and integrity with our employees, clients, and business
          partners.
        </p>
        <button
          onClick={openModal}
          className="bg-white text-red-600 font-bold py-3 px-10 rounded-full hover:bg-gray-100 transition duration-300 transform hover:scale-105 animate-bounce"
        >
          SPEAK TO AN EXPERT TODAY
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && <ModalComponent closeModal={closeModal} />}
    </section>
  );
};

export default BoostSection;
