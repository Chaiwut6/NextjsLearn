import Formcontainer from "@/components/Form/Formcontainer"
import { createLanmark } from "@/util/action"
const CreateCamp = () => {
  return (
    <div className="border p-2 rounded-mb max-w-lg">
    <Formcontainer action={createLanmark}>
      <div>
      <input
        type="text"
        placeholder="Lanmark"
        name="LanmarkName"
        className="Lanmark"
      /> 
      </div>      
      <button type="submit">Submit</button>
    
    </Formcontainer>
  </div>
  )
}
export default CreateCamp