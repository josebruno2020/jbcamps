import { LinkProps } from "./LinkProps";
import NextLink from 'next/link'
import React from "react";



export default function Link({as, href, children, className, locale}: LinkProps): JSX.Element {
  const Tag = as || 'a'
  return (
    <NextLink locale={locale} href={href} >
      <Tag className={className}>{children}</Tag>
    </NextLink>
  )
}