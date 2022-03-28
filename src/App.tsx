import React from "react";
import "./App.css";
import templates from "./templates";

type ComponentName = keyof typeof templates;

const searchParam = new URLSearchParams(window.location.search);
const component = searchParam.get("component") || "button";
const repeat = searchParam.get("repeatNum") || "1";
const isMultiple = component?.includes(",");
const repeatNumber = parseInt(repeat);

const renderComponent = () => {
  if (isMultiple) {
    const componentList: string[] = component.split(",");
    const combinedTemplates = componentList.map(
      (component) => templates[component as ComponentName] as JSX.Element
    );
    return Array(repeatNumber)
      .fill(combinedTemplates)
      .flat()
      .map((template, i) => React.cloneElement(template, { key: i }));
  } else {
    return [...Array(repeatNumber)].map((e, i) => {
      const template = templates[component as ComponentName] as JSX.Element;
      return React.cloneElement(template, { key: i });
    });
  }
};

export default () => <>{renderComponent()}</>;
