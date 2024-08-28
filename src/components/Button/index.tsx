import Link from "next/link";
import React from "react";

interface GenericProps {
  children: React.ReactNode;
}

type ButtonProps = GenericProps &
  (
    | (React.ButtonHTMLAttributes<HTMLButtonElement> & { as: "button" })
    | (React.AnchorHTMLAttributes<HTMLAnchorElement> & { as: "a" })
  );

export default function Button(props: ButtonProps) {
  if (props.as === "a") {
    const { as, ...rest } = props;
    return (
      <Link
        {...rest}
        href={rest.href || ""}
        className={`block text-center ${rest.className}`}
      >
        {rest.children}
      </Link>
    );
  }

  const { as, ...rest } = props;
  return (
    <button className={`block text-center ${rest.className}`} {...rest}>
      {rest.children}
    </button>
  );
}
