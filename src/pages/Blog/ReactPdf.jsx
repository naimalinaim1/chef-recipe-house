// eslint-disable-next-line no-unused-vars
import React, { useRef } from "react";
import Pdf from "react-to-pdf";

const ReactPdf = () => {
  const ref = useRef();

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-4">
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => (
          <button className="btn btn-primary" onClick={toPdf}>
            Download pdf
          </button>
        )}
      </Pdf>
      <div ref={ref}>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    </div>
  );
};

export default ReactPdf;
