
import { createHome } from "@/util/action";
import Formcontainer from "./Form/Formcontainer";

const Form = () => {
  return (
    <div className="border p-2 rounded-mb max-w-lg">
      <Formcontainer action={createHome}>
        <div>
        <input
          type="text"
          placeholder="Home"
          name="HomeName"
          className="Home"
        /> 
        </div>      
        <button type="submit">Submit</button>
      
      </Formcontainer>
    </div>
  );
};
export default Form;
