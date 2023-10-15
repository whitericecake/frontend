"use client";

import { Avatar, User } from "@nextui-org/react";
import Image from "next/image";

const CreatePage = () => {
  return (
    <div className="h-screen grid grid-cols-10 p-24 bg-white shadow-md text-gray-800">
      {/* 왼쪽 2:8 비율의 컨테이너 */}
      <div className="grid grid-rows-10 col-span-2 space-y-4">
        <div className="row-span-3 flex flex-col justify-center items-center text-center">
          <Avatar
            src="https://i.pravatar.cc/150?u=a04258114e29026708c"
            className="w-30 h-30 text-large mb-4"
          />
          <h1 className="text-2xl font-bold mb-2">김도원</h1>
          <p className="text-gray-600">프론트엔드</p>
        </div>

        <div className="row-span-3">
          <h2 className="text-xl font-bold border-b-4 pb-2">Tech Stack</h2>
          {/* 기술 스택 내용 */}
        </div>

        <div className="row-span-1">
          <h2 className="text-xl font-bold border-b-4 pb-2">학력</h2>
          {/* 학력 내용 */}
        </div>

        <div className="row-span-3">
          <h2 className="text-xl font-bold border-b-4 pb-2">개발 경력</h2>
          {/* 개발 경력 내용 */}
        </div>
      </div>
      <div className="col-span-1"></div>

      {/* 오른쪽 8:10 비율의 컨텐츠 영역 */}
      <div className="col-span-7 pl-8 grid grid-rows-10">
        {/* 이메일 등의 정보 영역 - 4:10 비율 */}
        <div className="row-span-2">
          <ul className=" space-y-2 text-sm">
            <li>Email | sniperead@naver.com</li>
            <li>KAKAO | laufetv@gmail.com</li>
            <li>PHONE | 010-2623-0279</li>
            <li>Github | https://github.com/TheON2</li>
            <li>Blog | https://velog.io/@theon2</li>
          </ul>
        </div>

        {/* 여기에 3:10 비율의 컨텐츠를 추가 */}
        <div className="row-span-3">{/* 내용을 여기에 추가해주세요 */}</div>

        {/* 여기에 1:10 비율의 컨텐츠를 추가 */}
        <div className="row-span-1">{/* 내용을 여기에 추가해주세요 */}</div>

        {/* 여기에 2:10 비율의 컨텐츠를 추가 */}
        <div className="row-span-2">{/* 내용을 여기에 추가해주세요 */}</div>
      </div>
    </div>
  );
};

export default CreatePage;
