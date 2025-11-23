import React from 'react';
import '../App.css';

export default function Footer() {
  return (
    <footer className="bg-light text-center py-3 shadow-sm mt-5">
      <p className="small mb-0 text-muted">
        &copy; {new Date().getFullYear()} Designed & Developed by
        <span className="fw-bold text-dark"> Abash Ansari The Great</span>. All Rights Reserved.
      </p>
    </footer>
  );
}
