
import { Label } from "@radix-ui/react-dropdown-menu";
import { Textarea } from "../ui/textarea";

const TextAreainput = ({
  name,
  labelText,
  defaultValue,
}: {
  name: string;
  labelText?: string;
  defaultValue?: string;
}) => {
  return (
    <div className="mb-2">
      <Label className="capitalize"> {labelText || name} </Label>
      <Textarea  
      id={name}
      name={name}
      defaultValue={defaultValue}
      rows={5}
      required />
    </div>
  )
}
export default TextAreainput