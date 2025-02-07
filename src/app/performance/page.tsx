import Hero from "@/components/hero";
import performanceImage from "public/performance.jpg";

export default function PerformancePage() {
  return (
    <Hero imgData={performanceImage} imgAlt="welding" title="Performance is Great!" />
  );
}