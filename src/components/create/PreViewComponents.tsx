import { PreviewMockData } from "@/lib/mockdata";
import Section from "../portfolio/Section";

const MOCK_DATA = PreviewMockData;

const PreViewComponents = () => {
  return (
    <section className="flex grow shrink">
      <div>
        {MOCK_DATA.map((e) => (
          <Section key={e.id} section={e} />
        ))}
      </div>
    </section>
  );
};
export default PreViewComponents;
