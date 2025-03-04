interface Props {

    children: string

}
const button = ({ children }: Props) => {
  return (
    <button>{children}</button>
  )
}

export default button