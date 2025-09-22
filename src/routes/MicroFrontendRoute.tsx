import { Suspense } from "react";
import { LoadingFallback } from "./LoadingFallback";

export const MicroFrontendRoute = ({
  micro,
  MicroComponent,
}: {
  micro: string;
  MicroComponent: React.ComponentType;
}) => {
  return (
    <div>
      <div className="bg-yellow-500 text-black font-bold p-4 rounded-lg mb-4 text-center">
        HOST APP - {micro.charAt(0).toUpperCase() + micro.slice(1)} Section
      </div>
      <Suspense fallback={<LoadingFallback />}>
        <MicroComponent />
      </Suspense>
    </div>
  );
};
