import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import { IoIosArrowBack } from "react-icons/io";


const SidebarContainer = styled.div`
  background: grey; /* Change the background color to light blue */
  width: 250px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

const SidebarHeader = styled.div`
  background: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const SidebarTitle = styled.h2`
  color: white;
  font-size: 18px;
`;

const NavIcon = styled(Link)`
  font-size: 2rem;
  color: white;
`;

const SidebarNav = styled.nav`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  overflow-y: auto; /* Add scrollbar when content overflows vertically */
`;


const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(true);
  const hideSidebar = () => setSidebar(false);

  return (
    <>
      <IconContext.Provider value={{ color: "yellow" }}>
  <SidebarContainer sidebar={sidebar}>
    <SidebarHeader>
      <SidebarTitle>Transaction Contents</SidebarTitle>
      <NavIcon to="#" onClick={hideSidebar}>
        <IoIosArrowBack />
      </NavIcon>
    </SidebarHeader>
    <SidebarNav>
      {SidebarData.map((item, index) => (
        <SubMenu item={item} key={index} />
      ))}
    </SidebarNav>
  </SidebarContainer>
</IconContext.Provider>

      <NavIcon to="#" onClick={sidebar ? hideSidebar : showSidebar}>
        {sidebar ? <AiIcons.AiOutlineClose /> : <FaIcons.FaBars />}
      </NavIcon>
    </>
  );
};

export default Sidebar;
