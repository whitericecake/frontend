import Section from "@/components/portfolio/Section";
import { BaseBlock } from "@/types";

const ListItem = ({ section }: { section: BaseBlock }) => {
  const { hasChildren, Children, text } = section;
  return (
    <>
      {hasChildren && section.Children ? (
        <li className="list-disc list-inside">
          {text.map((text) => (
            <span key={text}>{text}</span>
          ))}

          <ul className="pl-4">
            {Children?.map((e) => (
              <Section key={e.id} section={e} />
            ))}
          </ul>
        </li>
      ) : (
        <>
          {text.map((text) => (
            <li key={text} className="list-disc list-inside">
              {text}
            </li>
          ))}
        </>
      )}
    </>
  );
};
export default ListItem;
