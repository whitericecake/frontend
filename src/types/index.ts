import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};
export declare type CategoryType = "portfolio" | "resume" | "project";
export declare type BlockType = "Block" | "Section";
export declare type BlockTags =
  | "HeadingOne"
  | "HeadingTwo"
  | "HeadingThree"
  | "ListItem"
  | "Image";

export declare type Block = ImageBlock; //예시
export interface BaseBlock {
  id: string;
  type: BlockType;
  tags: BlockTags;
  text: string[];
  hasChildren: boolean;
  Children?: BaseBlock[];
  style: {
    bold: string;
    size: number;
  };
}

export interface ImageBlock extends BaseBlock {
  href?: string;
}

export interface CreateCardData {
  title: string;
  section: string;
  formType: CategoryType;
}
