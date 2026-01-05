// src/components/GlobalLoader.tsx
import React from "react";
import { useSelector } from "react-redux";
import Lottie from "lottie-react";
import { RootState } from "../../app/store";

const GlobalLoader: React.FC = () => {
  const loaderState = useSelector((state: RootState) => state.global.ui.loader);

  if (!loaderState?.show) return null;

  return (
    <div className="global-loader">
      {loaderState?.message && <p>{loaderState?.message}</p>}
      <Lottie animationData={""} style={{ height: 150, width: 150 }} loop autoplay />
    </div>
  );
};

export default GlobalLoader;
