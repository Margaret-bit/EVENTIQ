import React, { useState } from "react";
import styled from "styled-components";
import { MdOutlineDashboard, MdOutlineNotifications } from "react-icons/md";
import {
  BsBuilding,
  BsCalendar2Check,
  BsShieldCheck,
  BsBox,
  BsChevronDown,
} from "react-icons/bs";
import {
  FiCalendar,
  FiCreditCard,
  FiSettings,
  FiLogOut,
  FiBell,
  FiSearch,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { TbCurrencyNaira } from "react-icons/tb";
import { IoTrendingUpOutline, IoAddCircleOutline } from "react-icons/io5";
import { HiOutlineUserCircle } from "react-icons/hi";

const EventiqDashboard = () => {
  const [activeItem, setActiveItem] = useState("Overview");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    { name: "Overview", icon: <MdOutlineDashboard /> },
    { name: "My Venues", icon: <BsBuilding /> },
    { name: "Bookings", icon: <FiCalendar /> },
    { name: "Availability", icon: <BsCalendar2Check /> },
    { name: "Payments", icon: <FiCreditCard /> },
    { name: "KYC Verification", icon: <BsShieldCheck /> },
    { name: "Notification", icon: <MdOutlineNotifications /> },
    { name: "Profile Setting", icon: <FiSettings /> },
  ];

  const statsData = [
    {
      title: "Total Venues",
      value: "0",
      icon: <BsBuilding />,
      iconBg: "#e9d5ff",
      iconColor: "#9333ea",
    },
    {
      title: "Active Bookings",
      value: "0",
      icon: <FiCalendar />,
      iconBg: "#fef3c7",
      iconColor: "#f59e0b",
    },
    {
      title: "Revenue(This Month)",
      value: "#0",
      icon: <TbCurrencyNaira />,
      iconBg: "#bbf7d0",
      iconColor: "#22c55e",
    },
    {
      title: "Occupancy Rate",
      value: "0%",
      icon: <IoTrendingUpOutline />,
      iconBg: "#e0e7ff",
      iconColor: "#6366f1",
    },
  ];

  return (
    <DashboardContainer>
      <MobileMenuButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        {isSidebarOpen ? <FiX /> : <FiMenu />}
      </MobileMenuButton>

      {isSidebarOpen && <Overlay onClick={() => setIsSidebarOpen(false)} />}

      <Sidebar $isOpen={isSidebarOpen}>
        <LogoSection>
          <Logo>Eventiq</Logo>
        </LogoSection>

        <MenuList>
          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              $active={activeItem === item.name}
              onClick={() => {
                setActiveItem(item.name);
                setIsSidebarOpen(false);
              }}
            >
              <IconWrapper $active={activeItem === item.name}>
                {item.icon}
              </IconWrapper>
              <MenuText>{item.name}</MenuText>
            </MenuItem>
          ))}
        </MenuList>

        <LogoutSection>
          <LogoutButton>
            <IconWrapper>
              <FiLogOut />
            </IconWrapper>
            <MenuText>Logout</MenuText>
          </LogoutButton>
        </LogoutSection>
      </Sidebar>

      <MainContent>
        <TopBar>
          <WelcomeSection>
            <WelcomeText>Welcome, MaryLucy</WelcomeText>
            <DateText>Friday, October 17, 2025</DateText>
          </WelcomeSection>
          <TopBarRight>
            <NotificationIcon>
              <FiBell />
              <NotificationBadge>6</NotificationBadge>
            </NotificationIcon>
            <ProfileAvatar>
              <img
                src="https://ui-avatars.com/api/?name=Mary+Lucy&background=a855f7&color=fff"
                alt="Profile"
              />
            </ProfileAvatar>
          </TopBarRight>
        </TopBar>

        <ContentArea>
          <StatsGrid>
            {statsData.map((stat, index) => (
              <StatCard key={index}>
                <StatHeader>
                  <StatTitle>{stat.title}</StatTitle>
                  <StatIcon $bgColor={stat.iconBg} $color={stat.iconColor}>
                    {stat.icon}
                  </StatIcon>
                </StatHeader>
                <StatValue>{stat.value}</StatValue>
              </StatCard>
            ))}
          </StatsGrid>

          <EmptyState>
            <EmptyIcon>
              <BsBox />
            </EmptyIcon>
            <EmptyTitle>No Records Yet</EmptyTitle>
            <EmptyText>
              Create your first venue to start managing bookings and events
            </EmptyText>
          </EmptyState>
        </ContentArea>
      </MainContent>
    </DashboardContainer>
  );
};

export default EventiqDashboard;

// Styled Components
const DashboardContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #f9fafb;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
`;

const Sidebar = styled.div`
  width: 260px;
  background: white;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #e5e7eb;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  z-index: 100;
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    transform: ${(props) =>
      props.$isOpen ? "translateX(0)" : "translateX(-100%)"};
  }
`;

const LogoSection = styled.div`
  padding: 24px 20px;
  border-bottom: 1px solid #f3f4f6;
`;

const Logo = styled.h1`
  font-family: "Brush Script MT", cursive;
  font-size: 32px;
  color: #9333ea;
  margin: 0;
  font-weight: 400;
  font-style: italic;
`;

const MenuList = styled.nav`
  flex: 1;
  padding: 16px 0;
  overflow-y: auto;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  cursor: pointer;
  transition: all 0.2s ease;
  background-color: ${(props) => (props.$active ? "#9333ea" : "transparent")};
  color: ${(props) => (props.$active ? "white" : "#6b7280")};
  margin: 0 12px 4px 12px;
  border-radius: 8px;

  &:hover {
    background-color: ${(props) => (props.$active ? "#9333ea" : "#f3f4f6")};
  }
`;

const IconWrapper = styled.span`
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  color: ${(props) => (props.$active ? "white" : "#6b7280")};
`;

const MenuText = styled.span`
  font-size: 14px;
  font-weight: 500;
`;

const LogoutSection = styled.div`
  padding: 20px;
  border-top: 1px solid #f3f4f6;
`;

const LogoutButton = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  color: #ef4444;

  &:hover {
    background-color: #fef2f2;
  }

  ${IconWrapper} {
    color: #ef4444;
  }
`;

const MainContent = styled.div`
  margin-left: 260px;
  flex: 1;
  background-color: #f9fafb;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const TopBar = styled.div`
  background: white;
  padding: 20px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e5e7eb;
  position: sticky;
  top: 0;
  z-index: 10;

  @media (max-width: 768px) {
    padding: 16px;
    flex-wrap: wrap;
    gap: 12px;
  }
`;

const WelcomeSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const WelcomeText = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 4px 0;
`;

const DateText = styled.p`
  font-size: 14px;
  color: #9ca3af;
  margin: 0;
`;

const TopBarRight = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #f9fafb;
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  color: #9ca3af;
  font-size: 18px;

  input {
    border: none;
    background: transparent;
    outline: none;
    font-size: 14px;
    color: #374151;
    width: 200px;

    &::placeholder {
      color: #9ca3af;
    }

    @media (max-width: 768px) {
      width: 120px;
    }
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

const NotificationIcon = styled.div`
  position: relative;
  font-size: 20px;
  color: #6b7280;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: color 0.2s;

  &:hover {
    color: #9333ea;
  }
`;

const NotificationBadge = styled.span`
  position: absolute;
  top: -4px;
  right: -4px;
  background: #ef4444;
  color: white;
  font-size: 10px;
  font-weight: 600;
  padding: 2px 5px;
  border-radius: 10px;
  min-width: 16px;
  text-align: center;
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 6px 12px 6px 6px;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f9fafb;
  }

  @media (max-width: 768px) {
    padding: 6px;
  }
`;

const ProfileAvatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid #e5e7eb;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ProfileName = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #111827;
`;

const ProfileRole = styled.span`
  font-size: 12px;
  color: #9ca3af;
`;

const ContentArea = styled.div`
  padding: 24px 32px;

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 32px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const StatCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  border: 1px solid #f3f4f6;
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
    transform: translateY(-2px);
  }
`;

const StatHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
`;

const StatTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  color: #6b7280;
  margin: 0;
  line-height: 1.4;
`;

const StatIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background-color: ${(props) => props.$bgColor};
  color: ${(props) => props.$color};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;

const StatValue = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: #111827;
`;

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 32px;
  background: white;
  border-radius: 16px;
  border: 2px dashed #e5e7eb;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const EmptyIcon = styled.div`
  font-size: 72px;
  color: #d1d5db;
  margin-bottom: 20px;
`;

const EmptyTitle = styled.h3`
  font-size: 22px;
  font-weight: 600;
  color: #374151;
  margin: 0 0 8px 0;
`;

const EmptyText = styled.p`
  font-size: 15px;
  color: #9ca3af;
  margin: 0 0 24px 0;
  text-align: center;
  max-width: 400px;
`;

const CreateButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #9333ea;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #7e22ce;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(147, 51, 234, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 10px 20px;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  position: fixed;
  top: 20px;
  left: 16px;
  z-index: 101;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 10px;
  cursor: pointer;
  font-size: 24px;
  color: #9333ea;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Overlay = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99;

  @media (max-width: 768px) {
    display: block;
  }
`;
