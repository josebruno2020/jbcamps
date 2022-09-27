import { TitleProps } from "./TitleProps";

export default function Title({as, children, ...props}: TitleProps): JSX.Element {
  const Tag = as || 'h1'
  
  return (
    <>
      <Tag>{children}</Tag>
      <style jsx>{`
        ${Tag} {
          margin: 0;
          line-height: 1.15;
          font-size: 3rem;
          margin-bottom: 4rem;
          text-align: center;
          margin-top: .8rem;
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