import React from 'react'
import MosqueIcon from '@mui/icons-material/Mosque';
import PublicIcon from '@mui/icons-material/Public';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CodeIcon from '@mui/icons-material/Code';
import muslimWorldLeague from '/muslimWorldLeague.png'

export default function About() {
  return (
    <div className="container my-5 fade-in">

      <div className="text-center mb-5">
        <h1 className="fw-bold text-dark display-5">About Our App</h1>
        <p className="text-muted lead">Connecting you to your Creator, one prayer at a time.</p>
        <div className="d-flex justify-content-center mt-3">
          <div style={{ width: '60px', height: '4px', backgroundColor: 'black', borderRadius: '2px' }}></div>
        </div>
      </div>

      <div className="card shadow-lg border-0 mb-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="card-body p-4 text-center">
          <MosqueIcon style={{ fontSize: 70 }} className="mb-3" />
          <blockquote className="blockquote mb-0">
            <p className="fst-italic fs-4">"Indeed, prayer has been decreed upon the believers a decree of specified times."</p>
            <footer className="blockquote-footer mt-2">Surah An-Nisa <cite title="Source Title">(4:103)</cite></footer>
            <footer className="blockquote-footer mt-2">(In this verse, Allah (God) is telling us that : "WHEN YOU HAVE COMPLETED THE PRAYER, REMEMBER ALLAH STANDING,SITTING, OR LYING ON YOUR SIDES BUT WHEN YOU BECOME SECURE, RE-ESTABLISH [REGULAR] PRAYER. INDEED, PRAYER IS PRESCRIBED FOR THE BELIEVERS AT SPECIFIC TIMES") </footer>
          </blockquote>
        </div>
      </div>

      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <h3 className="fw-bold mb-3">Our Mission</h3>
          <p className="text-secondary" style={{ lineHeight: '1.8' }}>
            In the hustle of modern life, it is easy to lose track of time. Our goal is to provide a
            simple, elegant, and accurate tool to help Muslims around the world fulfill their
            religious obligations. Whether you are at home, at work, or traveling, accurate prayer times
            should be accessible with just one click.
          </p>
        </div>
        <div className="col-md-4">
          <img src={muslimWorldLeague} className="img-fluid w-100 h-100 rounded-start shadow-sm border border-2 rounded" alt="namze Image" style={{ objectFit: 'cover', minHeight: '100px' }} />
        </div>
      </div>

      <h3 className="fw-bold text-center mb-4">Why Use This App?</h3>
      <div className="row g-4">

        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-lg hover-effect text-center p-3">
            <div className="card-body">
              <PublicIcon style={{ fontSize: 40 }} className="mb-3" />
              <h5 className="card-title fw-bold">Global Coverage</h5>
              <p className="card-text text-muted small">
                Calculates prayer times for any location on Earth using intelligent GPS and IP detection.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-lg hover-effect text-center p-3">
            <div className="card-body">
              <AccessTimeIcon style={{ fontSize: 40, color: '#dc3545' }} className="mb-3" />
              <h5 className="card-title fw-bold">Accurate Timing</h5>
              <p className="card-text text-muted small">
                Powered by the Adhan algorithm, adhering to the Muslim World League and Hanafi standards.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-lg hover-effect text-center p-3">
            <div className="card-body">
              <CodeIcon style={{ fontSize: 40, color: '#0d6efd' }} className="mb-3" />
              <h5 className="card-title fw-bold">Modern Technology</h5>
              <p className="card-text text-muted small">
                Built with React.js for a fast, smooth, and responsive experience on all devices.
              </p>
            </div>
          </div>
        </div>


  <h3 className="fw-bold mt-6 text-center">A Note About Accuracy...</h3>
<div className="card shadow-lg border-0 p-4" style={{ backgroundColor: '#ffffff' }}>
  <p className="text-muted" style={{ lineHeight: '1.8' }}>
    Our app calculates prayer times using the <strong>Muslim World League (MWL)</strong> method for Fajr 
    and Isha, and the <strong>Hanafi</strong> madhab for Asr. These settings are mathematically valid 
    anywhere in the world — however, different countries and local mosques sometimes use different 
    standards.
  </p>

  <p className="text-muted" style={{ lineHeight: '1.8' }}>
    For example, regions like the USA and Canada commonly follow the <strong>ISNA</strong> method, 
    Saudi Arabia uses <strong>Umm al-Qura</strong>, Pakistan and India use the <strong>Karachi</strong> method, 
    and many Middle Eastern and African countries follow the <strong>Egyptian</strong> method.
  </p>

  <p className="text-muted" style={{ lineHeight: '1.8' }}>
    Similarly, Asr time differs depending on madhab: <strong>Hanafi</strong> calculates Asr slightly later, 
    while the <strong>Shafi / Maliki / Hanbali</strong> method is earlier and used across the Arab world, 
    Africa, Southeast Asia, Europe, and the United States.
  </p>

  <p className="text-muted" style={{ lineHeight: '1.8' }}>
    As a result, your prayer times in this app may differ by a few minutes compared to some local 
    mosque schedules in certain regions. We are continuously working to add an option so you can 
    choose your preferred calculation method and madhab for complete accuracy based on your location.
  </p>

  <p className="fw-semibold text-center mt-3 text-success">
    Your trust matters to us — and our goal is to provide the most reliable prayer times for every Muslim, everywhere.
  </p>
</div>

      </div>
    </div>
  )
}