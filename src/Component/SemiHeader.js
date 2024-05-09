import React from "react";
import locationIcon from "../Images/Semi Header_Logo/location.png";
import telephoneIcon from "../Images/Semi Header_Logo/telephone.png";
import emailIcon from "../Images/Semi Header_Logo/email.png";
import instagram from "../Images/Semi Header_Logo/instagram.png";
import linkedIn from "../Images/Semi Header_Logo/linkedIn.png";

const SemiHeader = () => {
  return (
    <div className="bg-blue-50 p-3 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex space-x-6">
          <div className="flex items-center space-x-2">
            <img src={locationIcon} alt="Location" className="h-6" />
            <span className="text-sm text-gray-700">
              Delhi | Tirupur | Coimbatore
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <img src={telephoneIcon} alt="Telephone" className="h-6" />
            <span className="text-sm text-gray-700">+91-6381780309</span>
          </div>
          <div className="flex items-center space-x-2">
            <img src={emailIcon} alt="Email" className="h-6" />
            <span className="text-sm text-gray-700">
              sellerflyonline@gmail.com
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <a
            href="https://www.instagram.com/sellerfly1/"
            className="hover:opacity-75"
          >
            <img src={instagram} alt="Instagram" className="h-6" />
          </a>
          <a
            href="https://www.linkedin.com/company/99096996/admin/feed/posts/"
            className="hover:opacity-75"
          >
            <img src={linkedIn} alt="LinkedIn" className="h-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SemiHeader;
