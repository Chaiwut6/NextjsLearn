import Catagoryinput from "@/components/Form/Catagoryinput";
import Formcontainer from "@/components/Form/Formcontainer";
import ProvinceInput from "@/components/Form/ProvinceInput";
import TextAreainput from "@/components/Form/TextAreainput";
import MapLandmark from "@/components/map/MapLandmark";

import { createLanmark } from "@/util/action";
const CreateCamp = () => {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">
        Create Landmark
      </h1>
      <div className="border p-8 rounded-md">
        <Formcontainer action={createLanmark}>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <input
              type="text"
              placeholder="Lanmark"
              name="LanmarkName"
              className="Lanmark"
            />
            <Catagoryinput />
          </div>
          <TextAreainput name="description" />
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <input
              type="number"
              placeholder="Price"
              name="Price"
              className="Price"
            />
            <ProvinceInput />
          </div>

            <MapLandmark />
            
          <button type="submit">Submit</button>
        </Formcontainer>
      </div>
    </section>
  );
};
export default CreateCamp;
