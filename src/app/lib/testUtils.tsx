import "@testing-library/jest-dom";
import React from "react";
import { render } from "@testing-library/react";
import StyleProvider from "../ui/StyleProvider";
import "./matchMedia.mock";

function ProvidersWrapper({ children }: { children: React.ReactNode }) {
  return <StyleProvider>{children}</StyleProvider>;
}
// @ts-ignore
function customRender(component, options) {
  return render(component, { wrapper: ProvidersWrapper, ...options });
}

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
