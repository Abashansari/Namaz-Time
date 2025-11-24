import React from 'react'

export default function FlexCard({ icon,title }) {
    return (
        <div className="card shadow-lg border-0 mb-5 " style={{backgroundColor:'#F3F4F9'}}>
            <div className="card-header bg-white border-0 py-3">
                <h3 className="fw-bold text-dark mb-0 d-flex align-items-center">
                    {icon}{title}
                </h3>
            </div>
        </div>
    )
}
