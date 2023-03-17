 import React, { useContext } from "react";
import { GrDiamond, GrConnect } from "react-icons/gr";
// import Home from "../home/Home";
import { BiChevronRight } from "react-icons/bi";
import { HiOutlinePuzzle } from "react-icons/hi";
import Card from "react-bootstrap/Card";
import "./Body.css";
import { CardGroup, NavLink } from "react-bootstrap";
import MiddleSection from '../MiddleSection/MiddleSection'
import { useNavigate } from "react-router-dom";
import ExploreCreate from "../../context/ExploreCreate";
function Body() {
    const navigate = useNavigate();

    const explore = useContext(ExploreCreate);
    console.log(explore.clickExplore);

  return (
    <>
      <div className="d-flex justify-content-between mt-3 m-3 ">
        <div className="left__body flex-0.3 mb-3 bg-white h-100">
          <h5 className="text-secondary fw-bold">By platform capabilities</h5>
          <div className="d-flex justify-content-between mt-3 ">
            <div className="left__icon text-secondary">
              <span>
                <span className="icons text-primary p-1 m-1">
                  <GrDiamond style={{ color: "blue" }} />
                </span>{" "}
                {"  "} Key features
              </span>
            </div>
            <div className="right__icon">
              <BiChevronRight />
            </div>
          </div>
          <div className="d-flex justify-content-between mt-3 ">
            <div className="left__icon text-secondary">
              <span>
                <span className="icons text-primary p-1 m-1">
                  <GrConnect style={{ color: "blue" }} />
                </span>{" "}
                {"  "} Integrations
              </span>
            </div>
            <div className="right__icon">
              <BiChevronRight />
            </div>
          </div>
          <div className="d-flex justify-content-between mt-3 ">
            <div className="left__icon text-secondary">
              <span>
                <span className="icons text-primary p-1 m-1">
                  <HiOutlinePuzzle />
                </span>{" "}
                {"  "} Add-one
              </span>
            </div>
            <div className="right__icon">
              <BiChevronRight />
            </div>
          </div>
          <div className="left__footer" style={{ marginTop: "280px" }}>
            <p>Why Work OS?</p>
            <p>
              Learn about our open platform that<br /> 
              empowers  anyone  to build software
            </p>
          </div>
        </div>
        <div className="middle__body text-secondary">
          <MiddleSection/>
        </div>
        <div className="right__body text-secondary flex-0.3">
          <p>Features and beyond</p>
          <CardGroup className="w-75">
            <Card >
              <Card.Img variant="top" src="https://dapulse-res.cloudinary.com/image/upload/v1669716137/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/header/byateam_image.png" width={50} height={120} />
              <Card.Body>
                <Card.Text>
                  See how monday.com Work OS capabilities measures up
                </Card.Text>
                <NavLink ><span className="border-bottom text-secondary m-1 p-1" onClick={()=>{
                  navigate("/alternative")
                }} >Explore now →</span></NavLink>
              </Card.Body>
            </Card>
          </CardGroup>

        </div>
      </div>
    </>
  );
}

export default Body;