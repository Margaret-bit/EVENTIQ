    import React from 'react'
    import { useNavigate } from "react-router-dom";
    
    import { useState, useRef, useEffect } from 'react';
    import './SignupDropdown.css';
    
    const SignupDropdown = () => {

        const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleOptionClick = (option) => {
    setIsOpen(false); // close dropdown after clicking

    if (option === "individual") {
      navigate("/signup-individual");
    } else if (option === "hall-owner") {
      navigate("/signup-hallowner");
    }
  };
      return (
        <>
        
        <div className="dropdown-container" >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sign-up-btn"
        >

 Sign Up
          <svg 
            className={`chevron-icon ${isOpen ? 'chevron-open' : ''}`}
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="dropdown-menu">
            {/* As an Individual */}
            <button
              onClick={() => handleOptionClick('individual')}
              className="dropdown-item dropdown-item-border"
            >
              <svg 
                className="dropdown-icon" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <span className="dropdown-text">As an Individual</span>
            </button>

            {/* As a Hall Owner */}
            <button
              onClick={() => handleOptionClick('hall-owner')}
              className="dropdown-item"
            >
              <svg 
                className="dropdown-icon hall-owner-icon" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="7" height="9"></rect>
                <rect x="14" y="3" width="7" height="5"></rect>
                <rect x="14" y="12" width="7" height="9"></rect>
                <rect x="3" y="16" width="7" height="5"></rect>
              </svg>
              <span className="dropdown-text">As a Hall Owner</span>
            </button>
          </div>
        )}
      </div>
        
        
        </>
      )
    }
    
    export default SignupDropdown  
      
      
      