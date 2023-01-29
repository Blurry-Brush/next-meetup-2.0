import React, { useMemo } from "react";
import Header from "../components/Header";
import dynamic from "next/dynamic";
import Headertest from "../components/Headertest";

interface Props {
  meetup: import("../typings").Data;
}
function showDetail(props: Props) {
  return (
    <div>
      <Headertest />

     
    </div>
  );
}

export default showDetail;
