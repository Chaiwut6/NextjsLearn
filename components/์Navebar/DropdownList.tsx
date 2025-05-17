import { CircleUserRound } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

const link = [
    {href:"/Home", label:"Home"},
    {href:"/about", label:"About"},
    {href:"/info", label:"Info"},
        
]


const DropdownList = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <CircleUserRound />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {link.map((item,index)=>{
            return <DropdownMenuLabel key={index}><Link href={item.href}>{item.label}</Link></DropdownMenuLabel>
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default DropdownList;
