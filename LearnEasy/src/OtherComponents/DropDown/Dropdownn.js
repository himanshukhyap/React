import Recat from "react";
import "./Dropdownn.css";
import Dropdown from "react-multilevel-dropdown";
import { RiArrowDropDownLine } from "react-icons/ri";
// import { RiArrowDropDownLine } from "react-icons/ri";
import { AiOutlineMenuUnfold } from "react-icons/ai";
export default function Dropdownn() {
  return (
    <Dropdown title="All Caterogires" position="right" className="Drop">
      <Dropdown.Item className="dropitems">
        <span>
          <AiOutlineMenuUnfold className="dropicon" />
          Business Management{" "}
        </span>
        <RiArrowDropDownLine className="dropicon2" size={30} />

        <Dropdown.Submenu className="dropsubmenuu" position="right">
          <Dropdown.Item className="dropitem">Finance</Dropdown.Item>
          <Dropdown.Item className="dropitem">Marketing</Dropdown.Item>
          <Dropdown.Item className="dropitem">Sales</Dropdown.Item>
          <Dropdown.Item className="dropitem">HUman Resoiurces</Dropdown.Item>
          <Dropdown.Item className="dropitem">Operations</Dropdown.Item>
          <Dropdown.Item className="dropitem">Digital Marketing</Dropdown.Item>
          <Dropdown.Item className="dropitem">Entrepreneurship</Dropdown.Item>
          <Dropdown.Item className="dropitem">NGO Management</Dropdown.Item>
        </Dropdown.Submenu>
      </Dropdown.Item>
      <Dropdown.Item className="dropitems">
        <span>
          <AiOutlineMenuUnfold className="dropicon" />
          Computer Science
        </span>
        <RiArrowDropDownLine className="dropicon2" size={30} />

        <Dropdown.Submenu className="dropsubmenuu" position="right">
          {" "}
          <Dropdown.Item className="dropitem">Finance</Dropdown.Item>
          <Dropdown.Item className="dropitem">Marketing</Dropdown.Item>
          <Dropdown.Item className="dropitem">Sales</Dropdown.Item>
          <Dropdown.Item className="dropitem">HUman Resoiurces</Dropdown.Item>
          <Dropdown.Item className="dropitem">Operations</Dropdown.Item>
        </Dropdown.Submenu>
      </Dropdown.Item>
    </Dropdown>
  );
}
