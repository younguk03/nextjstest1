import Image from "next/image";
import younguk from '../img.jpg';

export default function Home() {
  return (
    <div style={{ backgroundColor: '#f6f6f6' }}>
      <div className="ml-20 mr-20">
        <h3 className="font-bold text-3xl pb-3 pt-6">About me</h3>
        <Image src={younguk} alt="younguk" height={400} className="ml-5 mr-10 border-gray-500 border-4 mt-6 left-0 float-left" />

        <div className="border-gray-400 border-2  mt-6 bg-white inline-block" style={{ borderRadius: '20px' }}>
          {/* 출처: https://nextjs.org/docs/pages/api-reference/components/image */}


          <div className="p-7 pr-44">
            <p className="text-lg">이름: 김영욱</p>
            <p className="text-lg">생년월일: 2003/11/12</p>
            <p className="text-lg">거주지역: 검단 오류동(인천)</p>
            <p className="text-lg">연락처: 010-4487-0622</p>
            <p className="text-lg">학교: 중부대학교</p>
            <p className="text-lg">학번: 92212788</p>
            <p className="text-lg">학과: 정보보호학전공</p>
            <p className="text-lg">학년: 2학년</p>
            <p className="text-lg">종교: 기독교(개신교)</p>
            <p className="text-lg">MBTI: INFT-J</p>
            <p className="text-lg">취미: 기타,그림,축구영상보기</p>
            <p className="text-lg">좋아하는 분야: 프로그래밍(JAVA, Python 등)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
