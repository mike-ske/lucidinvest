import React from "react";

export type SeoProps = {
  title: string;
  description?: string;
};

export default function Seo({ title, description }: SeoProps) {
  return (
    <>
      <title>{title}</title>
      {description ? <meta name="description" content={description} /> : null}
    </>
  );
}

