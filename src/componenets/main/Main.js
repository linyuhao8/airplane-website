import React from "react";
import Cover from "./components/Cover";
import Grid from "./components/Grid";

export default function Main() {
  return (
    <div
      className="flex flex-col bg-white w-[100%] md:w-[65%] lg:w-[75%]
"
    >
      <Cover />
      <Grid />
    </div>
  );
}
