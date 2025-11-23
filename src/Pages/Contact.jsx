import React, { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Contact() {
  return (
    <div className="container my-5">

      {/* Header Section */}
      <div className="text-center mb-5">
        <h1 className="fw-bold text-dark display-5">Get in Touch</h1>
        <p className="text-muted lead">Have questions, feedback, or just want to say Salam?</p>
        <div className="d-flex justify-content-center mt-3">
          <div style={{ width: '60px', height: '4px', backgroundColor: 'black', borderRadius: '2px' }}></div>
        </div>
      </div>

      <div className="row g-5">

        {/* Left Column: Contact Info */}
        <div className="col-md-5">
          <div className="card h-100 border-0 shadow-lg bg-dark text-white">
            <div className="card-body p-5 d-flex flex-column justify-content-between">
              <div>
                <h3 className="fw-bold mb-4">Contact Information</h3>
                <p className="mb-4 opacity-75">
                  We are always looking to improve the app. If you notice any calculation errors or have suggestions for new features, please reach out.
                </p>

                <div className="d-flex align-items-center mb-4">
                  <EmailIcon className="me-3" fontSize="large" />
                  <div>
                    <span className="d-block text-start fw-bold">Email Us</span>
                    <small>ansariabash2004@gmail.com</small>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-4">
                  <LocationOnIcon className="me-3" fontSize="large" />
                  <div>
                    <span className="d-block text-start fw-bold">Location</span>
                    <small>Global (Remote)</small>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-4">
                  <PhoneIcon className="me-3" fontSize="large" />
                  <div>
                    <span className="d-block text-start fw-bold">Phone</span>
                    <small>+91 (816) 725-9866</small>
                  </div>
                </div>
              </div>

              {/* Social Icons */}
              <div className="mt-4">
                <p className="fw-bold text-start mb-3">Follow Us</p>
                <div className="d-flex gap-3">
                  <a href="https://github.com/Abashansari" className="text-white hover-opacity"><GitHubIcon fontSize="large" /></a>
                  <a href="https://x.com/Abash_Ansari21?t=g8ZINRYA9Bd8RJcVg7jS-A&s=09" className="text-white hover-opacity"><TwitterIcon fontSize="large" /></a>
                  <a href="https://www.instagram.com/abash_21ansari?igsh=djlkdW43YzVncjR1" className="text-white hover-opacity"><InstagramIcon fontSize="large" /></a>
                  <a href="https://www.linkedin.com/in/abash-ansari-0bb191326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-white hover-opacity"><LinkedInIcon fontSize="large" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="col-md-7">
          <div className="card border-0 shadow-lg">
            <div className="card-body p-5">
              <h3 className="fw-bold text-dark mb-4">Send us a Message</h3>
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label text-muted small fw-bold">Your Name</label>
                    <input type="text" className="form-control p-3 bg-light border-0" id="name" name="name" placeholder="Abash Ansari" required />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label text-muted small fw-bold">Your Email</label>
                    <input type="email" className="form-control p-3 bg-light border-0" id="email" name="email" placeholder="name@example.com" />
                  </div>
                  <div className="col-12">
                    <label htmlFor="subject" className="form-label text-muted small fw-bold">Subject</label>
                    <input type="text" className="form-control p-3 bg-light border-0" id="subject" name="subject" placeholder="Salam/Feedback about prayer times..." required />
                  </div>
                  <div className="col-12">
                    <label htmlFor="message" className="form-label text-muted small fw-bold">Message</label>
                    <textarea className="form-control p-3 bg-light border-0" id="message" name="message" rows="5" placeholder="Write your message here..." required></textarea>
                  </div>
                  <div className="col-12 mt-4">
                    <button type="submit" className="btn btn-dark w-100 py-3 fw-bold shadow-sm">
                      Send Message <SendIcon className="ms-2" fontSize="small" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}