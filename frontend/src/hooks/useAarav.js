import React, { useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

export default function useAarav() {
  useEffect(() => {
    alanBtn(
      {
        key: "0fc34eb502eabf472f65f3e1f1fe9dda2e956eca572e1d8b807a3e2338fdd0dc/stage",
        onCommand: (commandData) => {
          console.log(commandData);
        },
      },
      []
    );
  });

  return null;
}
