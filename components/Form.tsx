"use client";
import { createHome } from "@/util/action";
const Form = () => {
  return (
    <form action={createHome}>
      Form
      <input type="text" placeholder="Home" name="you home" className="Home" />
      <button type="submit">Submit</button>
    </form>
  );
};
export default Form;
