"use client";

import { Avatar, User } from "@nextui-org/react";
import Image from "next/image";
import profile from "@/public/profile.png";
import nextjs from "@/public/next.svg";
import axios from "@/public/axios.png";
import react from "@/public/react.png";
import reactquery from "@/public/reactquery2.png";
import ts from "@/public/tsx.png";
import redux from "@/public/redux.png";
import nodejs from "@/public/NODEJS.png";
import socketio from "@/public/socketio.png";
import CenteredImage from "@/components/CenteredImage";

const CreatePage = () => {
  return (
    <div className="h-full bg-white shadow-md text-gray-800">
      {/* 왼쪽 2/10 비율의 컨테이너 */}
      <div className="row-span-4 grid grid-cols-10">
        <div className="col-span-3 flex flex-col justify-center items-center text-center">
          <CenteredImage src={profile} width={180} height={180} alt="profile" />
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

      <div style={{ height: "300px" }}>
        <div className="grid grid-cols-10">
          <div className="col-span-3">
            <h2 className="text-xl font-bold pb-2 ml-10">Tech Stack</h2>
          </div>
          <div className="col-span-7 ml-16 mr-16">
            <div className="grid grid-cols-4 gap-4">
              <div
                className="flex flex-col justify-center items-center text-center"
                style={{ width: "100px", height: "130px" }}
              >
                <CenteredImage
                  src={nextjs}
                  width={100}
                  height={100}
                  alt="stack"
                />
                <h2 className="text-gray-600 text-1xl font-bold">NextJS</h2>
              </div>
              <div
                className="flex flex-col justify-center items-center text-center"
                style={{ width: "100px", height: "130px" }}
              >
                <CenteredImage
                  src={react}
                  width={100}
                  height={100}
                  alt="stack"
                />
                <h2 className="text-gray-600 text-1xl font-bold">ReactJS</h2>
              </div>
              <div
                className="flex flex-col justify-center items-center text-center"
                style={{ width: "100px", height: "130px" }}
              >
                <CenteredImage src={ts} width={100} height={100} alt="stack" />
                <h2 className="text-gray-600 text-1xl font-bold">TypeScript</h2>
              </div>
              <div
                className="flex flex-col justify-center items-center text-center"
                style={{ width: "100px", height: "130px" }}
              >
                <CenteredImage
                  src={nodejs}
                  width={100}
                  height={100}
                  alt="stack"
                />
                <h2 className="text-gray-600 text-1xl font-bold">NodeJS</h2>
              </div>
              <div
                className="flex flex-col justify-center items-center text-center"
                style={{ width: "100px", height: "130px" }}
              >
                <CenteredImage
                  src={reactquery}
                  width={100}
                  height={100}
                  alt="stack"
                />
                <h2 className="text-gray-600 text-1xl font-bold">ReactQuery</h2>
              </div>
              <div
                className="flex flex-col justify-center items-center text-center"
                style={{ width: "100px", height: "130px" }}
              >
                <CenteredImage
                  src={redux}
                  width={100}
                  height={100}
                  alt="stack"
                />
                <h2 className="text-gray-600 text-1xl font-bold">Redux</h2>
              </div>
              <div
                className="flex flex-col justify-center items-center text-center"
                style={{ width: "100px", height: "130px" }}
              >
                <CenteredImage
                  src={socketio}
                  width={100}
                  height={100}
                  alt="stack"
                />
                <h2 className="text-gray-600 text-1xl font-bold">Socket.io</h2>
              </div>
              <div
                className="flex flex-col justify-center items-center text-center"
                style={{ width: "100px", height: "130px" }}
              >
                <CenteredImage
                  src={axios}
                  width={100}
                  height={100}
                  alt="stack"
                />
                <h2 className="text-gray-600 text-1xl font-bold">axios</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ height: "150px" }}>
        <div className="grid grid-cols-10">
          <div className="col-span-3">
            <h2 className="text-xl font-bold pb-2 ml-10">학력</h2>
          </div>
          <div className="col-span-7"></div>
        </div>
      </div>

      <div style={{ height: "250px" }}>
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
