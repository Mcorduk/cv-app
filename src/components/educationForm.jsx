import InputField from "./inputField";

export function Form() {
  return (
    <form>
      <InputField
        name="name"
        text="Full Name"
        placeholder="Enter your first and last name here"
      />
      <InputField
        name="email"
        type="email"
        text="Email"
        placeholder="Enter your Email"
      />
      <InputField name="phone" text="Email" placeholder="Enter your Email" />
    </form>
  );
}
