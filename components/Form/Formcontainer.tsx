const Formcontainer = ({action,children}:{children:React.ReactNode}) => {
  return (
  <form action={action}>
    {children}
  </form>
  )
}
export default Formcontainer