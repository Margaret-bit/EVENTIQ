import React, { useState } from "react";
import styled from "styled-components";
import {
  TbGridDots,
  TbCalendar,
  TbCalendarCheck,
  TbCreditCard,
  TbShield,
  TbBell,
  TbSettings,
  TbLogout,
  TbPackage,
  TbPlus,
  TbMenu2,
  TbX,
} from "react-icons/tb";

const MyVenues = () => {
  const [venues, setVenues] = useState([]);
  const [activeMenu, setActiveMenu] = useState("My Venues");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleAddNewVenue = () => {
    const newVenue = {
      id: Date.now(),
      name: `Venue ${venues.length + 1}`,
      details: "New venue details",
    };
    setVenues([...venues, newVenue]);
    alert(`New venue added: ${newVenue.name}`);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleMenuClick = (menuName) => {
    setActiveMenu(menuName);
    setIsSidebarOpen(false);
  };

  const menuItems = [
    { name: "Overview", icon: TbGridDots },
    { name: "My Venues", icon: TbGridDots },
    { name: "Bookings", icon: TbCalendar },
    { name: "Availability", icon: TbCalendarCheck },
    { name: "Payments", icon: TbCreditCard },
    { name: "KYC Verification", icon: TbShield },
    { name: "Notification", icon: TbBell },
    { name: "Profile Setting", icon: TbSettings },
  ];

  return (
    <Container>
      {isSidebarOpen && <Overlay onClick={toggleSidebar} />}

      <Sidebar isOpen={isSidebarOpen}>
        <SidebarHeader>
          <Logo>Eventiq</Logo>
          <CloseButton onClick={toggleSidebar}>
            <TbX size={24} />
          </CloseButton>
        </SidebarHeader>

        <MenuList>
          {menuItems.map((item) => (
            <MenuItem
              key={item.name}
              active={activeMenu === item.name}
              onClick={() => handleMenuClick(item.name)}
            >
              <item.icon size={20} />
              <span>{item.name}</span>
            </MenuItem>
          ))}
        </MenuList>

        <LogoutButton>
          <TbLogout size={20} />
          <span>Logout</span>
        </LogoutButton>
      </Sidebar>

      <MainContent>
        <Header>
          <MenuButton onClick={toggleSidebar}>
            <TbMenu2 size={24} />
          </MenuButton>
          <HeaderRight>
            <NotificationIcon>
              <TbBell size={24} />
              <NotificationBadge>9</NotificationBadge>
            </NotificationIcon>
            <ProfileImage
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
              alt="Profile"
            />
          </HeaderRight>
        </Header>

        <ContentArea>
          <PageHeader>
            <div>
              <PageTitle>My Event Venues</PageTitle>
              <PageSubtitle>Manage your listed venues</PageSubtitle>
            </div>
            <AddButton onClick={handleAddNewVenue}>
              <TbPlus size={20} />
              Add New Venue
            </AddButton>
          </PageHeader>

          <EmptyState>
            <EmptyIcon>
              <TbPackage size={80} />
            </EmptyIcon>
            <EmptyTitle>No hall record yet</EmptyTitle>
            <EmptySubtitle>
              Upload your venue details to get noticed
            </EmptySubtitle>
          </EmptyState>
        </ContentArea>
      </MainContent>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #f8f9fa;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", sans-serif;
`;

const Sidebar = styled.div`
  width: 256px;
  background-color: white;
  border-right: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  padding: 24px 0;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  z-index: 1000;
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    transform: ${(props) =>
      props.isOpen ? "translateX(0)" : "translateX(-100%)"};
  }

  @media (min-width: 769px) {
    transform: translateX(0);
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  margin-bottom: 40px;
`;

const CloseButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  color: #6b7280;
  padding: 4px;

  @media (max-width: 768px) {
    display: block;
  }

  &:hover {
    color: #374151;
  }
`;

const Overlay = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }
`;

const Logo = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: #7c3aed;
  font-style: italic;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const MenuList = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 0 16px;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-radius: 8px;
  cursor: pointer;
  color: ${(props) => (props.active ? "white" : "#6b7280")};
  background-color: ${(props) => (props.active ? "#7c3aed" : "transparent")};
  transition: all 0.2s;

  &:hover {
    background-color: ${(props) => (props.active ? "#7c3aed" : "#f3f4f6")};
  }

  span {
    font-size: 14px;
    font-weight: 500;
  }
`;

const LogoutButton = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 32px;
  cursor: pointer;
  color: #ef4444;
  margin-top: auto;
  transition: all 0.2s;

  &:hover {
    background-color: #fef2f2;
  }

  span {
    font-size: 14px;
    font-weight: 500;
  }
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-left: 256px;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const Header = styled.div`
  height: 72px;
  background-color: white;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  align-items: center;
  padding: 0 32px;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 0 16px;
    height: 64px;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  color: #6b7280;
  padding: 8px;

  @media (max-width: 768px) {
    display: block;
  }

  &:hover {
    color: #374151;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const NotificationIcon = styled.div`
  position: relative;
  cursor: pointer;
  color: #6b7280;

  &:hover {
    color: #374151;
  }
`;

const NotificationBadge = styled.div`
  position: absolute;
  top: -4px;
  right: -4px;
  background-color: #ef4444;
  color: white;
  font-size: 11px;
  font-weight: 600;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;

const ContentArea = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 32px;

  @media (max-width: 768px) {
    padding: 20px 16px;
  }
`;

const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 48px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    margin-bottom: 32px;
  }
`;

const PageTitle = styled.h1`
  font-size: 28px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 4px 0;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const PageSubtitle = styled.p`
  font-size: 14px;
  color: #9ca3af;
  margin: 0;
`;

const AddButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #7c3aed;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }

  &:hover {
    background-color: #6d28d9;
  }

  &:active {
    transform: scale(0.98);
  }
`;

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const EmptyIcon = styled.div`
  color: #d1d5db;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    svg {
      width: 60px;
      height: 60px;
    }
  }
`;

const EmptyTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #374151;
  margin: 0 0 8px 0;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const EmptySubtitle = styled.p`
  font-size: 14px;
  color: #9ca3af;
  margin: 0;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 13px;
    padding: 0 20px;
  }
`;

export default MyVenues;
