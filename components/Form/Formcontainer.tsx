type actionFunction =(
  prevState:any,
  FormData:FormData
)=>Promise<{message:string}>

const Formcontainer = ({action,children}:{action:actionFunction, children:React.ReactNode}) => {
  return (
  <form action = {action}>
    {children}
  </form>
  )
}
export default Formcontainer