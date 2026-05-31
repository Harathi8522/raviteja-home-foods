import "./InfoPages.css";

import p1 from "../assets/about/p1.png";
import p2 from "../assets/about/uncle.png";
import p3 from "../assets/about/uncle1.png";
import p4 from "../assets/about/uncle2.png";
import uncle4 from "../assets/about/uncle4.png";


function AboutPage() {
return ( <section className="cinematic-about">

```
  {/* HERO */}

  <div
    className="hero-section"
    style={{
      backgroundImage: `linear-gradient(
        rgba(0,0,0,0.75),
        rgba(0,0,0,0.75)
      ), url(${p1})`
    }}
  >
    <div className="hero-content">

      <span className="hero-badge">
        SINCE 1973
      </span>

      <h1>
        Raviteja Home Foods
        <br />
        Private Limited
      </h1>

      <p>
        A legacy built on trust, quality,
        innovation, and generations of excellence.
      </p>

    </div>
  </div>

  {/* FOUNDER SPOTLIGHT */}

  <div className="founder-section">

    <div className="founder-image">
      <img src={p2} alt="Prasad Kumar" />
    </div>

    <div className="founder-content">

      <span className="mini-tag">
        THE MAN BEHIND THE GROWTH
      </span>

      <h2>
        Veeravally Prasad Kumar
      </h2>

      <p>
        A major milestone in our journey was achieved
        on 06/05/1996 when new operations were
        established in Hyderabad.
      </p>

      <p>
        Under his leadership, Raviteja Home Foods
        embraced modernization, advanced technology,
        and large-scale operational excellence.
      </p>

      <p>
        His vision transformed the organization into
        a prestigious Private Limited company while
        preserving the values that built customer trust.
      </p>

    </div>

  </div>

  {/* TIMELINE */}

  <div className="timeline-section">

    <h2>Our Journey Through Time</h2>

    <div className="timeline">

      <div className="timeline-card">
        <h3>1973</h3>
        <p>Foundation at Tanuku, West Godavari</p>
      </div>

      <div className="timeline-card">
        <h3>Expansion</h3>
        <p>Rajahmundry & Khammam Operations</p>
      </div>

      <div className="timeline-card">
        <h3>1996</h3>
        <p>Hyderabad Business Operations</p>
      </div>

      <div className="timeline-card">
        <h3>Modern Era</h3>
        <p>Advanced Technology & Machinery</p>
      </div>

      <div className="timeline-card">
        <h3>Today</h3>
        <p>Prestigious Private Limited Company</p>
      </div>

    </div>

  </div>

  {/* RECOGNITIONS */}

  <div className="recognition-section">

    <h2>Recognitions & Milestones</h2>

    <div className="recognition-grid">

      <div className="recognition-card">
  <img src={uncle4} alt="" />
  <h3>Business Excellence</h3>
</div>

      <div className="recognition-card">
        <img src={p3} alt="" />
        <h3>Industry Recognition</h3>
      </div>

      <div className="recognition-card">
        <img src={p4} alt="" />
        <h3>Leadership Achievement</h3>
      </div>

    </div>

  </div>

  {/* TRADEMARK */}

  <div className="trademark-section">

    <h2>Our Intellectual Property</h2>

    <p>
      Raviteja is an officially registered trademark.
      Our brand identity, logos, product assets,
      and intellectual property are legally protected,
      ensuring authenticity, reliability, and trust.
    </p>

  </div>

  {/* VALUES */}

  <div className="values-section">

    <h2>Our Core Values</h2>

    <div className="values-grid">

      <div className="value-box">
         <h3>🏆 Commitment To Quality</h3>
         
      </div>

      <div className="value-box">
        <h3>🤝 Customer Trust</h3>
      </div>

      <div className="value-box">
        <h3>⚙️ Tradition & Technology</h3>
      </div>

      <div className="value-box">
         <h3>🛡️ Ethical Business Practices</h3>
      </div>

      <div className="value-box">
        <h3>🌍 Global Vision</h3>
      </div>


      

      <div className="value-box">
       <h3>❤️ Passion For Excellence</h3>
      </div>

    </div>

  </div>

  {/* VISION MISSION */}
<div className="vision-mission">

  <div className="vm-card">

    <span><h1></h1>OUR VISION<h1/></span>

    <h2>
      Taking Indian Tradition
      To The World
    </h2>

    <p>
      To introduce authentic Indian traditional
      flavours to global markets while maintaining
      the highest standards of quality,
      innovation, and customer satisfaction.
    </p>

  </div>

  <div className="vm-card">

    <span><h1></h1>OUR MISSION<h1/></span>

    <h2>
      Delivering Trust
      In Every Product
    </h2>

    <p>
      To provide families with premium food
      products that combine quality, hygiene,
      reliability, and traditional values,
      creating a lasting relationship with
      every customer.
    </p>

  </div>

</div>

  {/* FINAL */}

  <div className="legacy-banner">

    <h2>
      More Than A Brand.
      <br />
      A Legacy Passed Through Generations.
    </h2>

    <p>
      Raviteja Home Foods Private Limited
    </p>

  </div>

</section>

);
}

export default AboutPage;
