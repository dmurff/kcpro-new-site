import AddHoopForm from "../../../components/AddHoopForm";
import { createHoop } from "./../../actions";

export default function NewHoop() {
  return (
    <div>
      <h2 className="text-xl text-gray-900">Add a new hoop</h2>
      <AddHoopForm mode="new" />
    </div>
  );
}
