import CategoryCard from "@/components/create/ui/Card";
import { CreateCardData } from "@/types";

const CardSectionData: CreateCardData[] = [
  {
    title: "포트폴리오",
    section: "Category",
    formType: "portfolio",
  },
  {
    title: "프로젝트",
    section: "Category",
    formType: "project",
  },
  {
    title: "이력서",
    section: "Category",
    formType: "resume",
  },
];
const CreatePage = () => {
  return (
    <div className="flex w-full gap-4 p-20 items-center justify-center">
      {CardSectionData.map((category) => (
        <CategoryCard {...category} key={category.title} />
      ))}
    </div>
  );
};
export default CreatePage;
