import { ImageProps } from "./ImageProps";
import NextImage from "next/image";

export default function Image({as, height, width, src, alt, title}: ImageProps): JSX.Element {
  return (
    <NextImage alt={alt} height={height} width={width} src={src} title={title} />
  )
}