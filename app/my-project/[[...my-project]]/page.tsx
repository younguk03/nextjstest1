import Link from 'next/link'
import React from 'react'

export default function MyProjects() {
   return (
      <div style={{ backgroundColor: '#f6f6f6' }}>
         <div className="ml-10 pt-6 pb-6">
            <h3 className="font-bold text-3xl">My projects</h3>
            <div className='border-gray-400 border-2 mt-5 bg-white' style={{ borderRadius: '20px' }}>
               <div className="m-8 pb-1">
                  <h3 className='text-xl font-bold'>1. test</h3>
                  <div className='mr-3 ml-3'>
                     <p>깃허브 주소: <Link href={'https://github.com/younguk03/test.git'} className=' hover:underline hover:text-blue-600' target='_blank'>https://github.com/younguk03/test.git</Link></p>
                     <p>웹사이트 주소: <Link href={'https://test-i4yabt0r1-kim-younguks-projects.vercel.app/'} className=' hover:underline hover:text-blue-600' target='_blank'>https://test-i4yabt0r1-kim-younguks-projects.vercel.app/</Link></p>
                     <p>프로젝트 설명: Next.js로 처음 만들어본 프로젝트다. Next.js기본 화면에 내 이름을 집어넣어 보았다.</p>
                  </div>

               </div>
               <div className="m-8 pb-1 pt-4">
                  <h3 className='text-xl font-bold'>2. hcjdemo-</h3>
                  <div className='mr-3 ml-3'>
                     <p>깃허브 주소: <Link href={'https://github.com/younguk03/hcjdemo-'} className=' hover:underline hover:text-blue-600' target='_blank'>https://github.com/younguk03/hcjdemo-</Link></p>
                     <p>웹사이트 주소: <Link href={'https://hcjdemo-pearl.vercel.app/'} className=' hover:underline hover:text-blue-600' target='_blank'>https://hcjdemo-pearl.vercel.app/</Link></p>
                     <p>프로젝트 설명: 웹서버 보안 프로그래밍 수업에서 교수님과 함께 진행한 프로젝트다.</p>
                  </div>
               </div>

               <div className="m-8 pb-1 pt-4">
                  <h3 className='text-xl font-bold'>3. fight-plane-site</h3>
                  <div className='mr-3 ml-3'>
                     <p>깃허브 주소: <Link href={'https://github.com/younguk03/fight-plane-site.git'} className=' hover:underline hover:text-blue-600' target='_blank'>https://github.com/younguk03/fight-plane-site.git</Link></p>
                     <p>웹사이트 주소: <Link href={'https://younguk03.github.io/fight-plane-site/index.html'} className=' hover:underline hover:text-blue-600' target='_blank'>https://younguk03.github.io/fight-plane-site/index.html</Link></p>
                     <p>프로젝트 설명: 개인적으로 휴학때에 html, css로 만들어본 개인 프로젝트다.</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
