import { BaseBlock } from "@/types";

export const PreviewMockData: BaseBlock[] = [
  {
    id: "aaasddddaaaaa",
    tags: "HeadingOne",
    type: "Section",
    text: ["경험 나열~ 그래서 내 장점은 뭐다~"],
    hasChildren: true,
    style: {
      bold: "600",
      size: 24,
    },
    Children: [
      {
        id: "aaasdddd1222",
        tags: "ListItem",

        type: "Block",
        text: [
          "팀원들과 소통, 협력을 중시하며, 팀의 성장과 개인의 성장에 열정을 갖는 엔지니어입니다.",
        ],
        hasChildren: true,
        Children: [
          {
            id: "aasd66",
            tags: "ListItem",
            type: "Block",
            text: ["ㅁㄴㅇㅁㄴㅇ."],
            hasChildren: true,
            Children: [
              {
                id: "aasd66",
                tags: "ListItem",
                type: "Block",
                text: ["ㅁㄴㅇㅁㄴㅇ."],
                hasChildren: false,
                style: {
                  bold: "600",
                  size: 24,
                },
              },
            ],
            style: {
              bold: "600",
              size: 24,
            },
          },
        ],
        style: {
          bold: "600",
          size: 24,
        },
      },
      {
        id: "aaasddddzzzz",
        tags: "ListItem",
        type: "Block",
        text: [
          "코딩을 통해 내가 원하는 것을 만들 수 있다는 것에 관심을 가져 시작하게 되었습니다.",
        ],
        hasChildren: false,
        style: {
          bold: "600",
          size: 24,
        },
      },
      {
        id: "aaasddddxxxx",
        tags: "ListItem",
        type: "Block",
        text: [
          "새로운 기술에 두려움이 없으며, 주도적으로 문제에 대하여 고민하고 해결합니다.",
        ],
        hasChildren: false,
        style: {
          bold: "600",
          size: 24,
        },
      },
      {
        id: "aaasddddwwww",
        tags: "ListItem",
        type: "Block",
        text: ["가장 관심 있는 부분은 서버의 성능 개선, 안정성 확보입니다."],
        hasChildren: false,
        style: {
          bold: "600",
          size: 24,
        },
      },
    ],
  },
];
