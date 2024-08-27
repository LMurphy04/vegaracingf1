import dynamic from "next/dynamic";

//Disable SSR for Car Museum
const DynamicComponentWithNoSSR = dynamic(
  () => import("../car-museum/content"),
  {
    ssr: false,
  }
);

const LoadCarMuseum = () => <DynamicComponentWithNoSSR />;

export default LoadCarMuseum;
