import { TitleProps } from "./TitleProps";

export default function Title({as, children, isSubtitle, ...props}: TitleProps): JSX.Element {
  const Tag = as || 'h1'
  const marginTop = isSubtitle ? '3rem' : '.8rem'
  
  return (
    <>
      <Tag {...props}>{children}</Tag>
      <style jsx>{`
        ${Tag} {
          margin: 0;
          line-height: 1.15;
          font-size: 2.5rem;
          margin-bottom: 2rem;
          text-align: center;
          margin-top: ${marginTop};
        }

        @media (max-width: 600px) {
          ${Tag} {
            font-size: 2rem;
          }
        }
      `}</style>
    </>
    
  )
}