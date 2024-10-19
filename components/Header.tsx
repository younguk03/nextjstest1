
import Image from "next/image";
// 이미지 오류 해결 출처: https://velog.io/@icdmiracle927/NEXT.JS%EC%97%90-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%98%AC%EB%A6%AC%EA%B8%B0
import younguk from '../img.jpg';
import { SignInButton, SignOutButton, SignUpButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Link from 'next/link'


export default function Header() {
   return (

      <div className="bg-white ">

         <SignedOut>
            <div className='mt-5'>
               <span className='border-b-2 text-white bg-black ml-3 mr-3 border-black p-2  text-xs' style={{ borderRadius: '25px' }}>
                  <SignInButton />
               </span>
               <span className='border-b-2 text-white bg-black ml-3 mr-3 border-black p-2  text-xs' style={{ borderRadius: '25px' }}>
                  <SignUpButton />
               </span>
            </div>
         </SignedOut>

         <SignedIn>
            <div className='mt-5 float-right'>
               <span className='border-b-2 text-white bg-black ml-3 mr-3 border-black p-2  text-xs' style={{ borderRadius: '25px' }}>
                  <SignOutButton />
               </span>
            </div>
         </SignedIn>

         <div className='border-b-2 border-white text-white p-3'>
            hello
         </div>

         <div className=" pb-4 pl-5">
            <Link href={`./`}>
               <h3 className="font-bold text-4xl text-center pt-0 p-5">Younguk's portfolio</h3></Link>
         </div>
         <div className="border-t-2 border-black">
            <div className="border-b-2 border-gray-300">
               {/* 부드럽게 움직이는 효과 참고 영상: https://www.youtube.com/watch?app=desktop&v=jxslBFkse2w */}
               <div className="mt-3 pb-3 text-center ">

                  <span className="ml-15 mr-10 pb-3 "><Link href={`./`}><span className="hover:bg-gray-300 hover:text-black p-2 border-white" style={{ borderRadius: '10px', transition: 'all 0.5s' }}>About me</span></Link></span>
                  <span className="ml-10 mr-10 text-gray-500"><Link href={`../my-project`}><span className="hover:bg-gray-300 hover:text-black p-2 border-white" style={{ borderRadius: '10px', transition: 'all 0.5s' }}>My projects</span></Link></span>
                  <span className="ml-10 mr-10 text-gray-500"><Link href={`./video`}><span className="hover:bg-gray-300 hover:text-black p-2 border-white" style={{ borderRadius: '10px', transition: 'all 0.5s' }}>Video</span></Link></span>
               </div>
            </div>
         </div>
      </div>
   )
}

