import { PreviewMockData } from "@/lib/mockdata";
import Section from "../portfolio/Section";
import SkeletonPreview from "../preview/SkeletonPreview";

const MOCK_DATA = PreviewMockData;
// const MOCK_URL = "http://13.125.224.16:8080/user/hello";
// const MOCK_URL_Two = "http://211.107.164.212/user/hello";
const PreViewComponents = () => {
  return (
    <article className="flex w-[210mm] shrink">
      <div className="">
        {/* <SkeletonPreview /> */}
        {MOCK_DATA.map((e) => (
          <Section key={e.id} section={e} />
        ))}
      </div>
    </article>
  );
};
export default PreViewComponents;
