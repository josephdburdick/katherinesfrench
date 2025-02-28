type BodyTextProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode
}

export default function BodyText({ children, ...props }: BodyTextProps) {
  return (
    <span
      className="prose space-y-4 lg:prose-lg xl:prose-xl [&>*+*]:mt-4 [&_a]:text-red-400"
      {...props}
    >
      {children}
    </span>
  )
}
