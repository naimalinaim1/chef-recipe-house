// eslint-disable-next-line no-unused-vars
import React from "react";

const ReactPdf = () => {
  return (
    <ReactToPdf>
      {({ toPdf, targetRef }) => (
        <div
          style={{ width: 500, height: 500, background: "red" }}
          onClick={toPdf}
          ref={targetRef}
        />
      )}
    </ReactToPdf>
  );
};

export default ReactPdf;
