import React, { useState } from 'react'
import TouchAppIcon from '@mui/icons-material/TouchApp';
import namazeImage from '/namazeImage.webp'
import PrayersTimeTable from '../Components/PrayersTimeTable';

export default function HomeBody1() {
  const [showTable,setShowTable] = useState(false)

  return (
    <div className='container my-5'>
      <h2 className='text-dark fw-bold mb-4 text-center'>“Stay connected to your prayers, wherever you are.”</h2>

      <div className="card mb-4 shadow-lg border-0" style={{ backgroundColor: '#ffffff' }}>
        <div className="row g-0 align-items-center">

          {/* Text Section */}
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title text-dark fw-bold mb-3">In the rhythm of our daily lives, prayer offers a moment of peace, reflection, and connection. Whether you're at home, traveling, or somewhere in between, staying aligned with your Salah times helps keep your heart centered. Let us guide you to the right time — simply choose your location to begin your spiritual journey today.</h5>

              <p className="card-text text-dark">Prayer times based on where you are — choose your city to get started.</p>
            </div>
          </div>
          {/* Image Section */}
          <div className="col-md-4">
            <img src={namazeImage} className="img-fluid w-100 h-100 rounded-start shadow-sm border border-2 rounded" alt="namze Image" style={{ objectFit: 'cover', minHeight: '300px' }} />
          </div>

          <div className='container md-6 col-6 d-flex'>
            <p className="card-text text-dark me-3  fw-bold">Find my Location :</p>

            <button className="btn btn-dark px-6" onClick={()=>setShowTable(true)}>
              Click Me <TouchAppIcon className="me-2" /> 
            </button>            
          </div>
          {showTable && 
            <PrayersTimeTable />
          }
        </div>
      </div>
    </div>
  )
}

