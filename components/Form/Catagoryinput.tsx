import { Label } from "@radix-ui/react-dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categories } from "@/util/category";

const Catagoryinput = ({ defaultValue }: { defaultValue?: string }) => {
  const name = "category";
  return (
    <div className="mb-2">
      <Label>{name}</Label>
      <Select  
      defaultValue={defaultValue || categories[0].label}
        name={name}
        required>
        <SelectTrigger >
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="bg-white">
          {categories.map((item)=>{
            return(
                <SelectItem key={item.label} value={item.label}>
                    <span className="capitalize flex items-center gap-4">
                    <item.icon />
                    {item.label}
                    </span>
                    </SelectItem>
            )
          })}
        </SelectContent>
      </Select>
    </div>
  );
};
export default Catagoryinput;
