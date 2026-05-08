import "./InfoPages.css";

import p9 from "../assets/about/p9.png";
import p10 from "../assets/about/p10.png";

function PrivacyPolicy() {

  return (

    <section className="privacy-page">

      {/* HERO */}

      <div
        className="privacy-hero"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(0,0,0,0.65),
              rgba(0,0,0,0.65)
            ),
            url(${p9})
          `
        }}
      >

        <div className="privacy-hero-content">

          <span>RAVITEJA HOME FOODS</span>

          <h1>
            Your Trust Means
            <br />
            Everything To Us ❤️
          </h1>

          <p>
            We value your privacy
            just as much as we value
            the authenticity of our homemade food.
          </p>

        </div>

      </div>

      {/* PRIVACY CARDS */}

      <div className="privacy-grid">

        <div className="privacy-card">

          <div className="privacy-icon">
            🔒
          </div>

          <h2>Safe Information</h2>

          <p>
            Your personal details
            are securely protected
            and never sold to anyone.
          </p>

        </div>

        <div className="privacy-card">

          <div className="privacy-icon">
            📦
          </div>

          <h2>Order Processing</h2>

          <p>
            Information is only used
            for order confirmation,
            delivery, and support.
          </p>

        </div>

        <div className="privacy-card">

          <div className="privacy-icon">
            🌐
          </div>

          <h2>Website Experience</h2>

          <p>
            Cookies and analytics help us
            improve your shopping experience.
          </p>

        </div>

      </div>

      {/* MAIN CONTENT */}

      <div className="privacy-content-section">

        <div className="privacy-image">

          <img src={p10} alt="Privacy" />

        </div>

        <div className="privacy-content">

          <span className="privacy-tag">
            PRIVACY POLICY
          </span>

          <h2>
            Respecting Your Privacy
            <br />
            With Transparency.
          </h2>

          <p>
            At Raviteja Home Foods,
            we collect only the information
            necessary to provide a smooth,
            secure, and personalized experience.
          </p>

          <p>
            This may include your name,
            phone number,
            delivery address,
            and order details
            while placing an order.
          </p>

          <p>
            We use this information
            only for processing orders,
            customer support,
            delivery updates,
            and improving our services.
          </p>

          <p>
            We never sell or misuse
            your personal information.
          </p>

        </div>

      </div>

      {/* POLICY INFO */}

      <div className="privacy-info-section">

        <h2>
          Information We Collect
        </h2>

        <div className="privacy-info-grid">

          <div className="privacy-info-box">

            <h3>👤 Personal Details</h3>

            <p>
              Name, mobile number,
              address, and delivery details.
            </p>

          </div>

          <div className="privacy-info-box">

            <h3>💳 Payment Information</h3>

            <p>
              Payments are securely processed
              through trusted payment gateways.
            </p>

          </div>

          <div className="privacy-info-box">

            <h3>📈 Analytics</h3>

            <p>
              Anonymous browsing data
              helps us improve website experience.
            </p>

          </div>

          <div className="privacy-info-box">

            <h3>📩 Communication</h3>

            <p>
              We may contact you
              regarding orders,
              offers, or support queries.
            </p>

          </div>

        </div>

      </div>

      {/* FINAL */}

      <div className="privacy-final-section">

        <h2>
          Authentic Food.
          <br />
          Honest Relationships ❤️
        </h2>

        <p>
          Your trust is part of our tradition.
        </p>

      </div>

    </section>

  );
}

export default PrivacyPolicy;