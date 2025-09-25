import { Suspense } from "react";
import { LoadingFallback } from "./LoadingFallback";

export const MicroFrontendRoute = ({
  MicroComponent,
}: {
  MicroComponent: React.ComponentType;
}) => {
  return (
    <div>
      <Suspense fallback={<LoadingFallback />}>
        <MicroComponent />
      </Suspense>
    </div>
  );
};
