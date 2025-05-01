import "./styles/Icon.module.css";
import { IconType } from "./utils/types";
import React, {Suspense, useMemo} from "react";

interface IconProps {
  name: IconType;
  hidden4Sr?: boolean;
  accessible_name?: string;
}

export const Icon = ({
  name,
  hidden4Sr = true,
  accessible_name = "",
}: IconProps) => {
  const LazyComponent = useMemo(() => {
    return React.lazy(async () => {
      const module = await import(/* @vite-ignore */ '../../SVGSprite');
      const Component = module[name];
      if (!Component) {
        throw new Error(`Component ${name} not found in SVGSprite`);
      }
      return { default: Component };
    });
  }, [name]);

  return (
    <Suspense fallback={<></>}>
      <LazyComponent 
      {...(hidden4Sr ? { "aria-hidden": "true" } : { role: "img" })}
      {...(hidden4Sr ? { "aria-label": ""} : { "aria-label": accessible_name })}
      {...(hidden4Sr ? { "title": ""} : { "title": accessible_name })}>
      </LazyComponent>
    </Suspense>
  )
};