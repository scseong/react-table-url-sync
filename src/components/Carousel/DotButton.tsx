import type { ComponentPropsWithRef } from "react";

type PropType = ComponentPropsWithRef<"button">;

export default function DotButton(props: PropType) {
  const { children, ...restProps } = props;

  return (
    <button type="button" {...restProps}>
      {children}
    </button>
  );
}
