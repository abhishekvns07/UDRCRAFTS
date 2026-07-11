import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="app-container" style={{ maxWidth: '1200px' }}>
      <header className="header">
        <h1>Welcome to UdrCrafts®</h1>
      </header>

      <main className="main-content">
        <div className="section-title" style={{ marginBottom: '50px' }}>
          <h2>CHOOSE HOW YOU WANT TO CONTINUE</h2>
          <p>Download the mobile app, explore the product webpage, open the seller panel, search for nearby UdrCrafts shops around your location, or access the shipping partner portal.</p>
        </div>

        <div className="cards-grid" style={{ gridTemplateColumns: 'repeat(5, 1fr)', maxWidth: '1100px' }}>
          {/* Card 1 */}
          <div className="landing-card">
            <div className="card-header" style={{ backgroundColor: 'var(--white)', color: 'var(--black)' }}>
              Download app
            </div>
            <div className="card-body">
              <div className="card-title">Mobile shopping experience</div>
              <a href="#" className="card-btn">View app download page</a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="landing-card">
            <div className="card-header yellow">
              Visit site
            </div>
            <div className="card-body">
              <div className="card-title">Explore UdrCrafts online</div>
              <a href="#" className="card-btn">Open udrcrafts.com</a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="landing-card">
            <div className="card-header yellow">
              Seller panel
            </div>
            <div className="card-body">
              <div className="card-title">Explore seller tools</div>
              <a href="#" className="card-btn">Open seller.udrcrafts.com</a>
            </div>
          </div>

          {/* Card 4 */}
          <div className="landing-card">
            <div className="card-header yellow">
              Find nearby shops
            </div>
            <div className="card-body">
              <div className="card-title">Locate UdrCrafts around you</div>
              <a href="#" className="card-btn" style={{ fontSize: '11px' }}>Search registered UdrCrafts shops near me</a>
            </div>
          </div>

          {/* Card 5 */}
          <div className="landing-card" style={{ border: '2px solid var(--primary)' }}>
            <div className="card-header yellow">
              Shipping Partner
            </div>
            <div className="card-body">
              <div className="card-title">Manage delivery operations</div>
              <Link to="/login" className="card-btn">Open Partner Portal</Link>
            </div>
          </div>
        </div>
      </main>

      <footer className="footer">
        © UdrCrafts®. All rights reserved.
      </footer>
    </div>
  );
}

export default LandingPage;
