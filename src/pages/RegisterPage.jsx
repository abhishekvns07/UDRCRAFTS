import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function RegisterPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '', mobile: '', email: '', city: '',
    aadhar: '', pan: '', dl: '', vehicle: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Mock register success and pass data to profile via local storage
    localStorage.setItem('udrcrafts_user', JSON.stringify(formData));
    navigate('/profile');
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1>Welcome to UdrCrafts®</h1>
        <p>Shipping Partner Onboarding</p>
      </header>

      <main className="main-content">
        <div className="section-title">
          <h2>Register as Partner</h2>
          <p>Please provide your basic details and identification documents to verify your identity and start delivering.</p>
        </div>

        <div className="form-container" style={{ maxWidth: '700px' }}>
          <form onSubmit={handleRegister}>
            
            <div className="form-grid">
              {/* Basic Details */}
              <div className="form-group">
                <label htmlFor="fullName">Full Name (as per Aadhar)</label>
                <input type="text" id="fullName" name="fullName" className="form-control" placeholder="John Doe" required onChange={handleChange} />
              </div>
              
              <div className="form-group">
                <label htmlFor="mobile">Mobile Number</label>
                <input type="tel" id="mobile" name="mobile" className="form-control" placeholder="+91 00000 00000" required onChange={handleChange} />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" className="form-control" placeholder="example@email.com" onChange={handleChange} />
              </div>

              <div className="form-group">
                <label htmlFor="city">City of Operation</label>
                <input type="text" id="city" name="city" className="form-control" placeholder="E.g. Mumbai" required onChange={handleChange} />
              </div>

              {/* Documents */}
              <div className="form-group">
                <label htmlFor="aadhar">Aadhar Number</label>
                <input type="text" id="aadhar" name="aadhar" className="form-control" placeholder="1234 5678 9012" pattern="[0-9]{12}" required onChange={handleChange} />
              </div>

              <div className="form-group">
                <label htmlFor="pan">PAN Number</label>
                <input type="text" id="pan" name="pan" className="form-control" placeholder="ABCDE1234F" pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}" required onChange={handleChange} />
              </div>

              <div className="form-group">
                <label htmlFor="dl">Driving License Number</label>
                <input type="text" id="dl" name="dl" className="form-control" placeholder="MH01 20200001234" required onChange={handleChange} />
              </div>

              <div className="form-group">
                <label htmlFor="vehicle">Vehicle Type</label>
                <select id="vehicle" name="vehicle" className="form-control" required onChange={handleChange} defaultValue="">
                  <option value="" disabled>Select vehicle</option>
                  <option value="2-wheeler">2-Wheeler (Bike/Scooter)</option>
                  <option value="3-wheeler">3-Wheeler (Auto/Tempo)</option>
                  <option value="4-wheeler">4-Wheeler (Van/Truck)</option>
                </select>
              </div>
            </div>

            <div style={{ marginTop: '30px' }}>
              <button type="submit" className="btn btn-primary">Submit Application</button>
              <Link to="/login" className="btn btn-secondary">Back to Login</Link>
            </div>
          </form>
        </div>
      </main>

      <footer className="footer">
        © UdrCrafts®. All rights reserved.
      </footer>
    </div>
  );
}

export default RegisterPage;
