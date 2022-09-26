import Head from "next/head";
import { HeadTitleProps } from "./HeadTitleProps";

export default function HeadTitle({as, children}: HeadTitleProps): JSX.Element {
  const Tag = as || "title"
  return (
    <Head>
      <Tag>{children}</Tag>
    </Head>
  )
}