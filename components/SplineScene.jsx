// "use client";
import Spline from "@splinetool/react-spline/next";

export default function SplineScene() {
  return (
    <div className="flex w-full h-full lg:h-4/5 items-center mt-10 lg:mt-0 ">
      <Spline
        scene="https://prod.spline.design/MQe9GVjC7GwhNZnw/scene.splinecode"
        className="relative md:top-[20%] lg:top-0"
      />
    </div>
  );
}
