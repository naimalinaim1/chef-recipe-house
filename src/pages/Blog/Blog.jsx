// eslint-disable-next-line no-unused-vars
import React from "react";

const Blog = () => {
  return (
    <div className="grid md:grid-cols-2 gap-4 my-20">
      <div className="border p-2 rounded">
        <h2 className="text-2xl font-bold">
          1. DefDifference between uncontrolled and controlled components
        </h2>
        <p>
          Controlled component refer to components that have their state and
          behavior controlled by the parent component.
        </p>
        <p>
          Uncontrolled component refer to components that manage their own state
          internally
        </p>
      </div>
      <div className="border p-2 rounded">
        <h2 className="text-2xl font-bold">
          2. How to validate React props using PropTypes
        </h2>
        <p>React PropTypes validators in 7 away</p>
        <ul className="pl-6 space-y-2" style={{ listStyleType: "dist" }}>
          <li>bool : The prop should be a Boolean.</li>
          <li>number : The prop should be a number.</li>
          <li>string : The prop should be a string.</li>
          <li>func : The prop should be a function.</li>
          <li>array : The prop should be an array.</li>
          <li>object : The prop should be an object.</li>
        </ul>
      </div>
      <div className="border p-2 rounded">
        <h2 className="text-2xl font-bold">
          3. Difference between nodejs and expressjs
        </h2>
        <p>
          NodeJS has an event-driven, non-blocking I/O model, which makes it a
          practical and lightweight server option
        </p>
        <p>ExpressJS manages server setup clutter more efficiently</p>
      </div>
      <div className="border p-2 rounded">
        <h2 className="text-2xl font-bold">
          4. What is a custom hook, and why will yo u create a custom hook
        </h2>
        <p>
          A custom Hook is a JavaScript function whose name starts with ”use”
          and that may call other Hooks
        </p>
      </div>
    </div>
  );
};

export default Blog;
