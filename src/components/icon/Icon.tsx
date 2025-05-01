import "./styles/Icon.module.css";
import React, { Suspense, useMemo } from "react";
import type { SVGProps, LazyExoticComponent } from "react";
import type { IconType } from "./utils/types";

interface IconProps {
  name: IconType;
  hidden4Sr?: boolean;
  accessible_name?: string;
}

// Shape of your SVG component exports
type SVGSpriteModule = {
  [key in IconType]: React.ComponentType<SVGProps<SVGSVGElement>>;
};

export const Icon = ({
  name,
  hidden4Sr = true,
  accessible_name = "",
}: IconProps) => {
  const LazyComponent: LazyExoticComponent<
    React.ComponentType<SVGProps<SVGSVGElement>>
  > = useMemo(() => {
    return React.lazy(async () => {
      const module = await import(
        /* @vite-ignore */ "../../SVGSprite"
      ) as unknown as SVGSpriteModule;

      const Component = module[name];
      if (!Component) {
        throw new Error(`Component ${name} not found in SVGSprite`);
      }
      return { default: Component };
    });
  }, [name]);

  const ariaProps: SVGProps<SVGSVGElement> = hidden4Sr? { "aria-hidden": true, "aria-label": ""}
    : { role: "img", "aria-label": accessible_name};

  return (
    <Suspense fallback={null}>
      <LazyComponent {...ariaProps} />
    </Suspense>
  );
};
