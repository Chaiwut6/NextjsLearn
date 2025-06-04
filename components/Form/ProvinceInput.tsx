import { Label } from "@radix-ui/react-dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { provinces } from "@/util/provinces";

const ProvinceInput = ({ defaultValue }: { defaultValue?: string }) => {
  const name = "ProvinceInput";
  return (
    <div>
      <Label>{name}</Label>
      <Select  
      defaultValue={defaultValue || provinces[0].PROVINCE_NAME}
        name={name}
        required>
        <SelectTrigger >
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="bg-white">
         {provinces.map((item)=>{
            return (
                <SelectItem key={item.PROVINCE_ID} value={item.PROVINCE_NAME}>
                    <span className="capitalize flex items-center gap-4">
                    {item.PROVINCE_NAME}
                    </span>
                </SelectItem>
            )
         })}
        </SelectContent>
      </Select>
    </div>
  );
};
export default ProvinceInput;
