import React, {useState} from "react";

const LoginSignup = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      console.log("Signing up with data:", formData);
      alert(`Signed up as ${formData.name} (${formData.email})`);
    } else {
      console.log("Logging in with data:", {
        email: formData.email,
        password: formData.password,
      });
      alert(`Logged in as ${formData.email}`);
    }
  };

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
    alert("Mock Google login successful!");
  };

  const handleFacebookLogin = () => {
    console.log("Facebook login clicked");
    alert("Mock Facebook login successful!");
  };

  const handlePhoneLogin = () => {
    const phone = formData.phone || prompt("Enter your phone number:");
    if (phone) {
      console.log(`Phone login initiated for ${phone}`);
      alert(`Mock login sent to phone: ${phone}`);
    } else {
      alert("Phone number is required for phone login.");
    }
  };

  return (
    <div className="login-Container">
      <h2>{isSignup ? "Sign Up" : "Login"}</h2>

      <form onSubmit={handleSubmit} className="form">
        {isSignup && (
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        )}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        {isSignup && (
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number (optional)"
            value={formData.phone}
            onChange={handleChange}
          />
        )}

        <button type="submit">{isSignup ? "Sign Up" : "Login"}</button>
      </form>
      <span className="or">OR</span>
      <div className="socialButtons">
        <button onClick={handleGoogleLogin} className="scl-btn google-btn">
          Continue with Google
        </button>
        <button onClick={handleFacebookLogin} className="scl-btn facebook-btn">
          Continue with Facebook
        </button>
        <button onClick={handlePhoneLogin} className="scl-btn phone-btn">
          Continue with Phone
        </button>
      </div>

      <p>
        {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
        <button onClick={() => setIsSignup(!isSignup)} className="toggle">
          {isSignup ? "Login" : "Sign Up"}
        </button>
      </p>
    </div>
  );
};

export default LoginSignup;
