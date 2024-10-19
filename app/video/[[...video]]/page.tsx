import Link from 'next/link'
import React from 'react'

export default function VideoPage() {
   return (
      <div style={{ backgroundColor: '#f6f6f6' }}>
         <div className="ml-10 mr-10 pb-6">
            <h3 className="font-bold text-3xl pt-6">Video</h3>
            <div className='border-gray-400 border-2 mt-5 bg-white' style={{ borderRadius: '20px' }}>
               <div className='m-9'>
                  <h3 className='text-xl font-bold'>자기소개 동영상</h3>
                  <p><Link href={"https://www.youtube.com/watch?v=dLLFmcO4QXI"} className=' hover:underline hover:text-blue-600' target='_blank'>https://www.youtube.com/watch?v=dLLFmcO4QXI</Link></p>
                  <div className='mt-3'>
                     <iframe src="https://www.youtube.com/embed/dLLFmcO4QXI?si=MJT0hVPar1-1ckdd" style={{width:'100%', height:'300px'}}></iframe>
                  </div>
               </div>

            </div>
         </div>
      </div>
   )
}
