import React, { useState } from "react";
import styled from "styled-components";
import { IoSearch } from "react-icons/io5";
import { AiOutlineTable } from "react-icons/ai";
import { FaTentArrowDownToLine } from "react-icons/fa6";
import { GrTreeOption } from "react-icons/gr";
import { LuCalculator } from "react-icons/lu";
import { LuTent } from "react-icons/lu";
import { MdLocationOn } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import { Outlet, useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState("allvenues");
  const [showDropdown, setShowDropdown] = React.useState(false);
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const handleNavigation = (section) => {
    setShow(section);
    console.log(section);
    navigate(section);
  };
  return (
    <StyledWrapper>
      <article>
        <div className="header">
          <div className="logo">
            <h1>Eventiq</h1>
            <p>Your events start here</p>
          </div>
          <div className="input_tag">
            <div className="saviour">
              <IoSearch />
              <input
                type="text"
                className="search_bar"
                placeholder="Search event halls, locations, or venues..."
              />
            </div>
          </div>
        </div>
      </article>
      <div className="all_venues">
        <div className="holder">
          <div className="content">
            <div
              onClick={() => handleNavigation("/")}
              className={show === "/" ? "avenue active" : "avenue"}
            >
              <AiOutlineTable className="icons" />
              <h3>All Venues</h3>
            </div>
            <div
              className={show === "indoorhall" ? "avenue active" : "avenue"}
              onClick={() => handleNavigation("indoorhall")}
            >
              <FaTentArrowDownToLine className="icons" />
              <h3>Indoor Halls</h3>
            </div>
            <div
              className={show === "outdoor" ? "avenue active" : "avenue"}
              onClick={() => handleNavigation("outdoor")}
            >
              <GrTreeOption className="icons" />
              <h3>Outdoor Venues</h3>
            </div>
            <div
              className={show === "rooftop" ? "avenue active" : "avenue"}
              onClick={() => handleNavigation("rooftop")}
            >
              <LuCalculator className="icons" />
              <h3>Rooftop Venues</h3>
            </div>
            <div
              className={show === "marquee" ? "avenue active" : "avenue"}
              onClick={() => handleNavigation("marquee")}
            >
              <LuTent className="icons" />
              <h3>Marquee/Tent</h3>
            </div>
            <div
              className={show === "multipurpose" ? "avenue active" : "avenue"}
              onClick={() => handleNavigation("multipurpose")}
            >
              <AiOutlineTable className="icons" />
              <h3>Multipurpose</h3>
            </div>
          </div>
          {/* <div className="filters">
            <div className="filter_btn">
              <div className="hold_icons">
                <MdLocationOn className="icon" /> All Areas{" "}
              </div>
              <RiArrowDropDownLine className="icon" 
             
              />
            </div>
            <button className="filter_btn">More Filters</button>
          </div> */}
          <div className="filters">
            <div className="filter_but" onClick={toggleDropdown}>
              <div className="hold_icons">
                <MdLocationOn className="icon" /> All Areas
              </div>
              {showDropdown ? (
                <RiArrowDropUpLine className="icon" />
              ) : (
                <RiArrowDropDownLine className="icon" />
              )}
            </div>

            {showDropdown && (
              <div className="dropdown_menu">
                <ul>
                  <li>All Areas</li>
                  <li>Victoria Island</li>
                  <li>Lekki</li>
                  <li>Ikoyi</li>
                  <li>Ikeja</li>
                  <li>Ajah</li>
                  <li>MaryLand</li>
                  <li>Surulere</li>
                  <li>Yaba</li>
                  <li>Festac</li>
                  <li>Apapa</li>
                  <li>Agege/Ogba</li>
                </ul>
              </div>
            )}

            <div className="filter_btn">More Filters</div>
          </div>
        </div>
      </div>

      <div className="sub_header">
        <h2 className="title">Event Halls in Lagos</h2>
        <p>7 venue available</p>
      </div>

      <Outlet />
    </StyledWrapper>
  );
};

export default UserDashboard;

const StyledWrapper = styled.div`
  width: 100%;
  height: 120vh;
  font-family: "Arial", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* align-items: center; */

  article {
    width: 100%;
    height: 18%;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: rgba(213, 207, 185, 0.4) 0px 9px 29px 0px;

    .header {
      width: 90%;
      display: flex;
      height: 90%;
      align-items: center;

      .input_tag {
        width: 70%;
        height: 60%;

        display: flex;
        justify-content: center;
        align-items: center;
        .saviour {
          width: 70%;
          height: 80%;
          background-color: #e2dfdf;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          border-radius: 0.5rem;
          padding-left: 0.8rem;

          input {
            width: 95%;
            height: 95%;
            border: none;
            background-color: #e2dfdf;
            outline: none;
          }
        }
      }

      .logo {
        width: 15%;
        h1 {
          color: #5d3fd3;
          font-size: 2rem;
          font-style: italic;
        }
        p {
          margin-top: 0;
        }
      }
    }
  }

  .all_venues {
    width: 100%;
    height: 15%;
    border-bottom: 1px solid #9d9d9d;
    /* box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px; */
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    gap: 2rem;
    .holder {
      width: 90%;
      height: 100%;
      display: flex;
      align-items: center;

      justify-content: space-between;

      .filters {
        height: 60%;
        width: 30%;
        display: flex;
        gap: 2rem;
        position: relative;

        .dropdown_menu {
          width: 40%;
          max-height: 200px;
          position: absolute;
          background: white;
          border: 1px solid #ccc;
          border-radius: 8px;
          left: 0%;
          top: 80%;
          z-index: 80;
          overflow-y: auto;
          padding: 10px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

          ul {
            list-style: none;
            padding: 0;
            margin: 0;

            li {
              cursor: pointer;
              transition: background 0.3s;
              font-size: 1rem;
              padding: 8px 12px;

              &:hover {
                background: #f0f0f0;
              }
            }
          }
        }

        .hold_icons {
          display: flex;
          gap: 0.3rem;
          align-items: center;
        }

        .filter_but {
          width: 70%;
          height: 75%;
          background: #f0f0f0;
          border: none;
          display: flex;
          justify-content: space-around;
          align-items: center;
          cursor: pointer;

          .icon {
            font-size: 1.7rem;
          }
        }
        .filter_btn {
          width: 70%;
          height: 75%;

          border: none;
          display: flex;
          justify-content: space-around;
          align-items: center;
          cursor: pointer;

          .icon {
            font-size: 1.7rem;
          }
        }
      }
      .content {
        width: 80%;
        height: 100%;
        /* background: blue; */
        display: flex;
        align-items: center;
        gap: 2rem;
        .avenue {
          height: 80%;
          width: 12%;
        
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          font-size: 0.8rem;
          align-items: center;

          .icons {
            font-size: 1.7rem;
          }
        }
        .active {
          border: 4px solid #5d3fd3;
        }
      }
    }
  }

  .sub_header {
    width: 90%;
    height: 10%;
    display: flex;
    flex-direction: column;

    justify-content: center;

    p {
      font-size: 1.5rem;
    }

    .title {
      font-size: 2.3rem;
    }
  }

  /* .cards_wrapper {
    width: 90%;
    height: 80%;
    display: flex;

    gap: 20px;

    .venue_card {
      width: 90%;
      height: 80%;
      position: relative;
      background: aqua;
      border-radius: 10px;
      overflow: hidden;
      display: flex;
      justify-content: center;
      flex-direction: column;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

      .featured {
        position: absolute;
        top: 10px;
        left: 10px;
        background: gold;
        color: black;
        font-weight: bold;
        font-size: 12px;
        padding: 4px 8px;
        border-radius: 4px;
        z-index: 2;
      }

      .image {
        width: 100%;
        height: 255px;
        object-fit: cover;
      }

      .info {
        padding: 15px;

        .myInfo {
          display: flex;
          justify-content: space-between;
        }

        .venue_name {
          font-size: 1.3rem;
          margin-bottom: 4px;
        }

        .location {
          font-size: 1.2rem;
          color: #777;
        }

        .details {
          font-size: 13px;
          color: #999;
          margin-top: 4px;
        }

        .price {
          font-size: 16px;
          font-weight: bold;
          margin-top: 8px;
        }

        .rating {
          font-size: 14px;
          color: #f39c12;
          margin-top: 5px;
        }
      }
    }
  } */
`;
