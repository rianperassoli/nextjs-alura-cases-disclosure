import NextLink from "next/link"

export default ({ children, href }) => (
  <NextLink href={href} passHref>
    {children}
  </NextLink>
)