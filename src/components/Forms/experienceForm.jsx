import InputField from "../inputField";

export function ExperienceForm() {
  return (
    <form>
      <InputField
        id="companyName"
        text="Full Name"
        placeholder="Enter Company Name "
      />
      <InputField
        name="positionTitle"
        text="Position Title"
        placeholder="Enter Position Title"
      />
      <InputField
        name="startDate"
        text="Start Date"
        type="date"
        placeholder="Enter Start Date"
      />
      <InputField
        name="endDate"
        text="End Date"
        type="date"
        placeholder="Enter End Date"
      />
      <InputField
        name="location"
        text="Location"
        placeholder="Enter Location"
      />
      <InputField
        name="description"
        text="Description"
        type="textarea"
        placeholder="Enter Decription.."
      />
    </form>
  );
}
