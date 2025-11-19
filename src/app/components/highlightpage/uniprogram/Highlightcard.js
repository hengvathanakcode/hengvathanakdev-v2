import React from 'react'
import { Link } from 'react-router-dom'


function Highlightcard() {
  return (
    <>
      <div className='card-highlight'>
        <div className='p-3'>
            <Link to="" className='text-decoration-none text-dark'>
                <p className='font-s-10 font-w-500 d-flex align-items-center gap-2 m-0'>
                    <i class="bi bi-caret-right-fill"></i>
                    <span>18, March 2025</span>
                </p>
                <p className='font-w-600 m-0'>Joined the practical training at Chief Commercial Bank Plc.</p>
                <div>
                    <span className='font-s-10 font-w-600 highlight-title'>
                        University Program
                    </span>
                </div>
                <div className='mt-2'>
                    <p className='font-s-12 font-w-600 text-secondary space-font'>
                        On March 18, 2025, I went to Chief Commercial Bank in Phnom Penh with my teacher. We visited their office on National Road No. 1 to learn about how the bank works. The bank staff showed us their daily work and explained how they use computers and technology in banking. I got to see real banking operations and learn new things about IT in banks. It was a very useful experience that helped me understand banking better.
                    </p>
                </div>
                <di >
                    <span className='font-s-10 font-w-600 m-0 view-detail-btn'>
                        View Details <i class="bi bi-chevron-right"></i>
                    </span>
                    
                </di>
            </Link>
        </div>
      </div>
    </>
  )
}

export default Highlightcard
