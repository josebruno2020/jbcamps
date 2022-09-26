import { LinkProps } from "./LinkProps";
import NextLink from 'next/link'



export default function Link({as, href, children, className}: LinkProps): JSX.Element {
  const Tag = as || 'a'
  return (
    <NextLink href={href} >
      <Tag className={className}>{children}</Tag>
    </NextLink>
  )
}