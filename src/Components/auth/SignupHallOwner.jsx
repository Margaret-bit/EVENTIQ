import { useState, useEffect } from "react";
import { User, Eye, EyeOff, ShieldCheck } from "lucide-react";
import "./SignupHallOwner.css";
import { useNavigate } from "react-router-dom";

const SignupHallOwner =()=> {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    email: "",
    password: "",
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = () => {
    console.log("Account created:", formData);
  };
  const navigate = useNavigate()



   useEffect(() => {
    // Prevent going back
    const handlePopState = () => {
      window.history.pushState(null, "", window.location.href);
    };

    // Push a dummy state
    window.history.pushState(null, "", window.location.href);
    window.addEventListener("popstate", handlePopState);

    // Clean up when the component unmounts
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

 

  return (
    <div className="signup-container">
      {/* Left Section */}
      <div className="left-section">
        <div
          className="bg-image"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1519167758481-83f29da8c2b7?w=800')",
          }}
        ></div>

        <button className="back-btn"
        onClick={() => navigate("/", { replace: true })}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="left-content">
          <div className="badge">FOR VENUE OWNERS</div>
          <h1>
            List Your Hall,
            <br /> Get Booked.
          </h1>
          <p>
            Manage your event halls with ease and get more bookings, all on
            Eventiq.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <div className="form-wrapper">
          <div className="form-header">
            <div className="user-icon">
              <User size={20} color="#7e22ce" />
            </div>
            <h2>Hall Owner/Manager</h2>
          </div>
          <p className="form-subtitle">
            Create your account to get started
          </p>

          <div className="form-content">
            <div className="two-cols">
              <div className="input-group">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="John"
                />
              </div>
              <div className="input-group">
                <label>Surname</label>
                <input
                  type="text"
                  name="surname"
                  value={formData.surname}
                  onChange={handleChange}
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="input-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="youremail@example.com"
              />
            </div>

            <div className="input-group password-field">
              <label>Password</label>
              <div className="password-box">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a strong password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="checkbox-group">
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
              />
              <label>
                I have read the{" "}
                <a href="#">Terms and Conditions</a> and I agree to it
              </label>
            </div>

            <button className="submit-btn" onClick={handleSubmit}>
              Create Account
            </button>

            <p className="login-text">
              Already have an account?{" "}
              <a href="#">Log in</a>
            </p>
          </div>

          <div className="security-note">
            <ShieldCheck size={16} color="#22c55e" />
            <span>Secure and encrypted platform</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupHallOwner;
