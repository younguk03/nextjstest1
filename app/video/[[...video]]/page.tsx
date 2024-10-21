import Link from 'next/link'
import React from 'react'

export default function VideoPage() {
   return (
      <div style={{ backgroundColor: '#f6f6f6' }}>
         <div className="ml-10 mr-10 pb-16">
            <h3 className="font-bold text-3xl pt-6">Video</h3>
            <div className='border-gray-400 border-2 mt-5 bg-white' style={{ borderRadius: '20px' }}>
               <div className='m-9'>
                  {/* 정보출처: https://kincoding.com/entry/%EB%B0%98%EC%9D%91%ED%98%95%EC%9C%BC%EB%A1%9C-Youtube-%EC%98%81%EC%83%81-%EC%82%BD%EC%9E%85%ED%95%98%EA%B8%B0Responsible-youtube-Embed */}
                  <h3 className='text-xl font-bold'>자기소개 동영상</h3>
                  <p>링크: <Link href={"https://www.youtube.com/watch?v=dLLFmcO4QXI"} className=' hover:underline hover:text-blue-600' target='_blank'>https://www.youtube.com/watch?v=dLLFmcO4QXI</Link></p>
                  <div className='mt-3'>
                     <iframe src="https://www.youtube.com/embed/dLLFmcO4QXI?si=MJT0hVPar1-1ckdd" style={{ width: '500px', height: '300px' }}></iframe>
                  </div>
                  <div className=' pt-11'>
                     <h3 className='text-xl font-bold'>클래식 기타 연주</h3>
                     <p>링크: <Link href={`https://youtu.be/Xn_2HKPyII0`} className=' hover:underline hover:text-blue-600' target='_blank'>https://youtu.be/Xn_2HKPyII0</Link></p>

                     <iframe src="https://www.youtube.com/embed/Xn_2HKPyII0?si=Z3jibUSudGAabqh3" style={{height:'300px', width:'500px'}}></iframe>
                  </div>

                  <div className='mt-7'>
                     <h3 className='pt-11 text-xl font-bold'>내가 좋아하는 류의 영상들</h3>
                     <div className='border-2 border-black p-3'>
                     {/* 참고 사이트: https://moonhouse.co.kr/html/529065 */}
                     <details>
                        <summary>영상 리스트 보기</summary>
                        
                        <p className='pt-5 font-bold text-lg'>수비를 바보로 만드는 티키타카 스페셜</p>
                        <p><Link href={`https://www.youtube.com/watch?v=8_ZasT280MQ`}>https://www.youtube.com/watch?v=8_ZasT280MQ</Link></p>
                        <iframe width="500" height="300" src="https://www.youtube.com/embed/lSA5jW9ne6M?si=pRACptl6puZOjuVy"></iframe>

                        <p className='pt-8 font-bold text-lg'>역사상 최고의 선수 메시 스페셜</p>
                        <p><Link href={`https://www.youtube.com/watch?v=-hva_SfzZmQ`}>https://www.youtube.com/watch?v=-hva_SfzZmQ</Link></p>
                        <iframe src="https://www.youtube.com/embed/-hva_SfzZmQ?si=-aCmEotFSk0UJQ6w"  width="500" height="300"></iframe>
                        

                        <p className='pt-8 font-bold text-lg'>고충진 황혼(Twilight - Kotaro Oshio, 黄昏 押尾コータロー)</p>
                        <p> <Link href={`https://www.youtube.com/watch?v=JiHed-2JupA`}>https://www.youtube.com/watch?v=JiHed-2JupA</Link></p>
                        <iframe src="https://www.youtube.com/embed/JiHed-2JupA?si=zrHy3QlmlhaZ0A4e" height={300} width={500}></iframe>
                     </details>
                     </div>
                  </div>
                  
               </div>
            </div>
         </div>
      </div>
   )
}
