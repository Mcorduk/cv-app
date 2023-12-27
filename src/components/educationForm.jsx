import InputField from "./inputField";

export function Form() {
  return (
    <form>
      <InputField
        name="school"
        text="School"
        placeholder="Enter school / university"
      />
      <InputField
        name="degree"
        text="Degree"
        placeholder="Enter Degree Title (Bsc., Msc. etc)"
      />
      <InputField
        name="eduStartDate"
        type="date"
        text="Start Date"
        placeholder="Enter Start Date"
      />
      <InputField
        name="eduEndDate"
        type="date"
        text="End Date"
        placeholder="Enter End Date"
      />
      <InputField
        name="location"
        text="Location"
        placeholder="Enter Location"
      />
    </form>
  );
}
