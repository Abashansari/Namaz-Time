import React from 'react'

export default function Card({img}) {
    return (

        <div className="card shadow-lg border-0 mb-5 bg-light">
            <div className="card-body p-0">
                <div className="row g-4">
                    <img src={img} className="img-fluid w-100 h-100 rounded-start shadow-sm border border-2 rounded" />
                </div>
            </div>
        </div>
    )
}
