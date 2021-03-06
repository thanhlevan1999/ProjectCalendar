import React from 'react'
import { Link } from "react-router-dom";
import avt1 from "../assets/avt1.jpg";
import { RightSquareFilled } from "@ant-design/icons";
import DataUser from "./DataUser";

const InfomationMid = () => {
  return (
    <>
    <div className="checkin">
            <h3 className="checkin-title">Last Monsth Highlights</h3>
            <div className="check">
              <div className="profile">
                {DataUser.map((user,index) =>  <img key={index} src={user.avatar} alt="img-profile" className="img-profile" />)}
              </div>

              <div className="checkout">
                <Link to="Signout">
                  Check out <RightSquareFilled />
                </Link>
              </div>
            </div>
            
          </div>
          <div className="scheduled-for-today">
            <div className="info-scheduled">
               2 
              <p> Scheduled for today </p>
            </div>
          </div>
          <div className="scheduled-for-today">
            <div className="info-scheduled">
               3 
              <p> Scheduled for today </p>
            </div>
          </div>
    </>
  )
}

export default InfomationMid