import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function ProfilePage() {
  const [userData, setUserData] = useState({
    fullName: 'John Doe',
    mobile: '+91 98765 43210',
    email: 'john.doe@example.com',
    vehicle: '2-Wheeler (Bike)',
    city: 'Mumbai',
    aadhar: 'XXXX XXXX 9012',
    pan: 'ABCDE1234F',
    dl: 'MH01 20200001234'
  });

  useEffect(() => {
    // Load from local storage if exists (mocking a backend fetch after registration)
    const stored = localStorage.getItem('udrcrafts_user');
    if (stored) {
      setUserData(JSON.parse(stored));
    }
  }, []);

  const getInitials = (name) => {
    return name ? name.split(' ').map(n => n[0]).join('').toUpperCase() : 'JD';
  };

  return (
    <div className="app-container">
      <header className="header" style={{ padding: '30px 20px' }}>
        <h1>UdrCrafts®</h1>
        <p>Shipping Partner Portal</p>
      </header>

      <main className="main-content" style={{ backgroundColor: 'var(--gray-bg)' }}>
        <div className="section-title">
          <h2>Your Profile</h2>
          <p>Manage your personal information and view your verified documents.</p>
        </div>

        <div className="profile-card">
          <div className="profile-header">
            <div className="profile-avatar">
              {getInitials(userData.fullName)}
            </div>
            <div className="profile-info">
              <h3>{userData.fullName}</h3>
              <p>Active Delivery Partner • {userData.city}</p>
              <span style={{ display: 'inline-block', marginTop: '8px', padding: '4px 12px', background: '#E0F2FE', color: '#0284C7', borderRadius: '20px', fontSize: '12px', fontWeight: '600' }}>
                Account Verified
              </span>
            </div>
          </div>

          <div className="profile-details">
            <div className="detail-item">
              <div className="detail-label">Mobile Number</div>
              <div className="detail-value">{userData.mobile}</div>
            </div>
            
            <div className="detail-item">
              <div className="detail-label">Email Address</div>
              <div className="detail-value">{userData.email || 'Not Provided'}</div>
            </div>

            <div className="detail-item">
              <div className="detail-label">Vehicle Type</div>
              <div className="detail-value">{userData.vehicle}</div>
            </div>

            <div className="detail-item">
              <div className="detail-label">City of Operation</div>
              <div className="detail-value">{userData.city}</div>
            </div>
          </div>

          <h4 style={{ margin: '25px 0 15px', fontSize: '16px', borderBottom: '1px solid var(--gray-border)', paddingBottom: '10px' }}>
            Document Details
          </h4>
          
          <div className="profile-details">
            <div className="detail-item">
              <div className="detail-label">Aadhar Number</div>
              <div className="detail-value">{userData.aadhar}</div>
            </div>
            
            <div className="detail-item">
              <div className="detail-label">PAN Number</div>
              <div className="detail-value">{userData.pan}</div>
            </div>

            <div className="detail-item">
              <div className="detail-label">Driving License</div>
              <div className="detail-value">{userData.dl}</div>
            </div>
          </div>

          <div style={{ marginTop: '30px', display: 'flex', gap: '15px' }}>
            <a href="#" className="btn btn-primary" style={{ flex: 1 }}>Edit Profile</a>
            <Link to="/login" className="btn btn-secondary" style={{ flex: 1, marginTop: 0 }}>Logout</Link>
          </div>
        </div>
      </main>

      <footer className="footer">
        © UdrCrafts®. All rights reserved.
      </footer>
    </div>
  );
}

export default ProfilePage;
