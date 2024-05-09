import React from "react";
import locationIcon from "../Images/Semi Header_Logo/location.png";
import telephoneIcon from "../Images/Semi Header_Logo/telephone.png";
import emailIcon from "../Images/Semi Header_Logo/email.png";
import facebook from "../Images/Semi Header_Logo/facebook.png";
import instagram from "../Images/Semi Header_Logo/instagram.png";
import linkedIn from "../Images/Semi Header_Logo/linkedIn.png";
import twitter from "../Images/Semi Header_Logo/twitter.png";

const SemiHeader = () => {
  return (
    <div className="bg-gray-100 p-2">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex justify-around">
          <div className="flex items-center justify-evenly">
            <img src={locationIcon} alt="Location" className="h-6" />
            <span className="text-sm text-gray-600">
              Delhi | Tirupur | Coimbatore
            </span>
          </div>

          <div className="flex items-center px-4">
            <img src={telephoneIcon} alt="Telephone" className="h-6" />
            <span className="text-sm text-gray-600">+91-6381780309</span>
          </div>
          <div className="flex items-center">
            <img src={emailIcon} alt="Email" className="h-6" />
            <span className="text-sm text-gray-600 ml-2">
              sellerflyonline@gmail.com
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {/* <a href="https://facebook.com">
            <img src={facebook} alt="Facebook" className="h-6" />
          </a> */}
          <a href="https://www.instagram.com/sellerfly1/">
            <img src={instagram} alt="Instagram" className="h-6" />
          </a>
          {/* <a href="https://twitter.com">
            <img src={twitter} alt="Twitter" className="h-6" />
          </a> */}
          <a href="https://www.linkedin.com/company/99096996/admin/feed/posts/">
            <img src={linkedIn} alt="LinkedIn" className="h-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SemiHeader;
