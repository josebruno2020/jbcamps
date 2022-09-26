import { TextProps } from "./TextProps";
import styles from './Text.module.css';

export function Text({as, isCenter, children, ...props}: TextProps): JSX.Element {
  const Tag = as || 'p';
  const textAlign = isCenter ? 'center' : 'left'
  console.log(textAlign)
  return (
    <>
      <Tag >{children}</Tag>

      <style jsx>{`
        ${Tag} {
          color: var(--color-text-primary);
          font-size: 1.5rem;
          text-align: ${textAlign}
        }

        @media (max-width: 600px) {
          ${Tag} {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </>
    
  )
}