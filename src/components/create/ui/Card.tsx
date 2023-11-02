import React from "react";
import { Card, CardHeader, CardBody, Image, Skeleton } from "@nextui-org/react";
import { CreateCardData } from "@/types";
import SkeletonPreview from "@/components/preview/SkeletonPreview";
import Link from "next/link";

const CategoryCard = ({ title, section, formType }: CreateCardData) => {
  //   const [touch, setTouch] = useState<boolean>(false);
  return (
    <Card
      className={`py-4 cursor-pointer min-h-[300px] max-h-[400px] hover:scale-105`}
    >
      <Link href={`/create/${formType}`} className="overflow-hidden">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-lg uppercase font-bold">{title}</p>
        </CardHeader>
        <CardBody className="overflow-hidden py-2 w-[270px]">
          <article className="w-full h-full overflow-hidden">
            <SkeletonPreview formType={formType} />
          </article>
        </CardBody>
      </Link>
    </Card>
  );
};

export default CategoryCard;
