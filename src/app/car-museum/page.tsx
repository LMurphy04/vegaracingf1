import dynamic from "next/dynamic";
import Title from "../title";

//Disable SSR for Car Museum
const DynamicComponentWithNoSSR = dynamic(
  () => import("../car-museum/content"),
  {
    ssr: false,
  }
);

const LoadCarMuseum = () => (
  <>
    <Title title="Car Museum" />
    <DynamicComponentWithNoSSR />
  </>
);

export default LoadCarMuseum;
