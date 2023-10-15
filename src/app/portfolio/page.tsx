"use client";

import { Avatar, User } from "@nextui-org/react";
import Image from "next/image";

const CreatePage = () => {
  return (
    <div className="h-full bg-white shadow-md text-gray-800">
      {/* 왼쪽 2/10 비율의 컨테이너 */}
      <div className="row-span-4 grid grid-cols-10">
        <div className="col-span-3 flex flex-col justify-center items-center text-center">
          <Avatar
            src="https://i.pravatar.cc/150?u=a04258114e29026708c"
            className="w-30 h-30 text-large mb-4"
          />
          <h1 className="text-2xl font-bold mb-2">김도원</h1>
          <h2 className="text-gray-600 text-3xl font-bold">프론트엔드</h2>
        </div>

        <div className="col-span-7 mr-16">
          <ul
            style={{ listStyleType: "disc", paddingLeft: "20px" }}
            className="space-y-2 text-sm font-bold border-b-4 border-t-4 pb-2 m-10"
          >
            <li>
              Email |{" "}
              <a href="mailto:sniperead@naver.com">sniperead@naver.com</a>
            </li>
            <li>
              KAKAO | <a href="mailto:laufetv@gmail.com">laufetv@gmail.com</a>
            </li>
            <li>PHONE | 010-2623-0279</li>
            <li>
              Github |{" "}
              <a
                href="https://github.com/TheON2"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/TheON2
              </a>
            </li>
            <li>
              Blog |{" "}
              <a
                href="https://velog.io/@theon2"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://velog.io/@theon2
              </a>
            </li>
          </ul>
          <ul
            style={{ listStyleType: "disc", paddingLeft: "20px" }}
            className="space-y-2 text-sm font-bold border-b-4 pb-2 m-10"
          >
            <li>
              꾸준히 학습하고 발전하는 것에 관심이 많은 주니어개발자 김도원
              입니다.
            </li>
            <li>
              NextJs 13과 TypeScript를 주력 기술로 활용하며, NodeJs 개발을 함께
              공부하여 다양한 관점을 고려합니다.
            </li>
            <li>
              꾸준한 깃허브 커밋과 블로그 작성을 통해 매일 새로운 것에 도전하고
              기록합니다.
            </li>
            <li>
              일어나면 가장 먼저 TIL 하루일과 작성과 개발커뮤니티 열람으로
              하루를 시작합니다.
            </li>
          </ul>
        </div>
      </div>

      <div style={{ minHeight: "250px" }}>
        <div className="grid grid-cols-10">
          <div className="col-span-3">
            <h2 className="text-xl font-bold pb-2 ml-10">Tech Stack</h2>
          </div>
          <div className="col-span-7"></div>
        </div>
      </div>

      <div style={{ minHeight: "150px" }}>
        <div className="grid grid-cols-10">
          <div className="col-span-3">
            <h2 className="text-xl font-bold pb-2 ml-10">학력</h2>
          </div>
          <div className="col-span-7"></div>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-10">
          <div className="col-span-3">
            <h2 className="text-xl font-bold pb-2 ml-10">개발 경력</h2>
          </div>
          <div className="col-span-7"></div>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
