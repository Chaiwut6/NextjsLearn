import axios from "axios"
const url = 'https://jsonplaceholder.typicode.com/todos'

const fetchData = async()=>{
  const res = await axios.get(url)
  // console.log(res);
  return res.data;
  
}
const Aboutpage = async() => {
  const data  = await fetchData()
  console.log(data);
  
  return (
    <div>Aboutpage
     {data.map((item:any, index:any) => (
          <li key={index}>{item.title}</li>
        ))}
    </div>
  )
}
export default Aboutpage