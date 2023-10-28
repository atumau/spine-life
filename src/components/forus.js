import React from "react";
import "./styles/forus.css";
import { GiGraduateCap } from "react-icons/gi";
import { MdLocalShipping } from "react-icons/md";
import { FaHandHoldingWater } from "react-icons/fa";
import { PiWechatLogoLight } from "react-icons/pi";
import { SiUbisoft } from "react-icons/si";
import { CiDeliveryTruck } from "react-icons/ci";
import Features from "./features";

const forus = () => {
  return (
    <>
      <div className="main1 mt-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="content">
                <h1>
                  <GiGraduateCap />
                </h1>
                <div className="content-text">
                  <h4 className="headi">PRODUCT EXPERTS</h4>
                  <p>Assistive Technology Professionals</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="content">
                <h1>
                  <MdLocalShipping />
                </h1>
                <div className="content-text">
                  <h4 className="headi">FREE SHIPPING</h4>
                  <p>All orders over $50</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="content">
                <h1>
                  <FaHandHoldingWater />
                </h1>
                <div className="content-text">
                  <h4 className="headi"> SERVICE NETWORK</h4>
                  <p>Helping hands in your area</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-5">
          <div className="row main-row">
            <div className="col-4 left">
              <div className="content-text5 ">
                <h1 className="head-para">Discover The SpinLife Difference</h1>
                <p className="para">
                  Our customers come to us for a wealth of different reasons,
                  but they can be summed in just one - The SpinLife Difference
                </p>
              </div>
              <div className="content2">
                <h1 className="log">
                  <PiWechatLogoLight />
                </h1>
                <div className="content-text">
                  <h4 className="headi">PRODUCT EXPERTS</h4>
                  <p className="pass">Benefit from our experience</p>
                </div>
              </div>

              <div className="content2">
                <h1>
                  <SiUbisoft />
                </h1>
                <div className="content-text">
                  <h4 className="headi">EXCLUSIVE PRODUCTS</h4>
                  <p>Best deals on the products</p>
                </div>
              </div>

              <div className="content2">
                <h1>
                  <CiDeliveryTruck />
                </h1>
                <div className="content-text">
                  <h4 className="headi">NATIONWIDE SERVICE</h4>
                  <p>Best service and delivery</p>
                </div>
              </div>
              <button type="button" className="btn btn-lg butt4">
                THE SPINELINE DIFFERENCE
              </button>
            </div>

            <div className="col-8">
              <img src="forus.webp" className="image" alt="forus" />
            </div>
          </div>
        </div>
      </div>
      <Features/>

    </>
  );
};

export default forus;
