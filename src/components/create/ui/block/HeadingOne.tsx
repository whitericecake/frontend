import Section from "@/components/portfolio/Section";
import { BaseBlock } from "@/types";

const HeadingOne = ({ section }: { section: BaseBlock }) => {
  const { hasChildren, Children, text } = section;
  return (
    <>
      {hasChildren && section.Children ? (
        <article>
          {text.map((text) => (
            <h1 className={`text-lg`} key={text}>
              {text}
            </h1>
          ))}

          <ul>
            {Children?.map((e) => (
              <Section section={e} key={e.id} />
            ))}
          </ul>
        </article>
      ) : (
        <h1>
          {text.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </h1>
      )}
    </>
  );
};
export default HeadingOne;
