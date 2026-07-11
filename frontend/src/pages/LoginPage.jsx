import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function LoginPage() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (phone && password) {
      // Mock login success
      navigate('/profile');
    }
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1>Welcome to UdrCrafts®</h1>
        <p>Shipping Partner Portal</p>
      </header>

      <main className="main-content">
        <div className="section-title">
          <h2>Partner Login</h2>
          <p>Enter your credentials to access the delivery dashboard and manage your shipments.</p>
        </div>

        <div className="form-container">
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="phone">Mobile Number</label>
              <input 
                type="tel" 
                id="phone" 
                className="form-control" 
                placeholder="+91 00000 00000" 
                required 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password or OTP</label>
              <input 
                type="password" 
                id="password" 
                className="form-control" 
                placeholder="Enter password or OTP" 
                required 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary">Log In</button>
            <Link to="/register" className="btn btn-secondary">Apply as a Partner</Link>
          </form>
        </div>
      </main>

      <footer className="footer">
        © UdrCrafts®. All rights reserved.
      </footer>
    </div>
  );
}

export default LoginPage;
