import { BaseBlock } from "@/types";
import HeadingOne from "../create/ui/block/HeadingOne";
import ListItem from "../create/ui/block/ListItem";

const Section = ({ section }: { section: BaseBlock }) => {
  switch (section.tags) {
    case "HeadingOne":
      return <HeadingOne key={section.id} section={section} />;
    case "HeadingTwo":
      return <HeadingOne key={section.id} section={section} />;
    case "HeadingThree":
      return <HeadingOne key={section.id} section={section} />;
    case "ListItem":
      return <ListItem key={section.id} section={section} />;

    default:
      return <></>;
  }
};
export default Section;
