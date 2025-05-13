import Navbar from "@/components/Navbar"
import './globals.css'
import { Metadata } from "next"

export const metadata:Metadata ={
  title:'Nextjs Learn'
}
const layout = ({ children }) => {
  return (
    <html>
      <body>
       <Navbar />
        {children}
      </body>
    </html>
  )
}
export default layout