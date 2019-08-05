import React from "react";
import { useModal } from "../hooks";

export const Main = () => {
  const { openModal } = useModal();
  return (
    <div>
      <button
        onClick={() => {
          openModal(<div>112</div>);
        }}
      >
        열기
      </button>
    </div>
  );
};
