import InputField from "./inputField";

export function Form() {
  return (
    <form>
      <InputField
        id="companyName"
        text="Full Name"
        placeholder="Enter Company Name "
      />
      <InputField
        id="email"
        type="email"
        text="Email"
        placeholder="Enter your Email"
      />
      <InputField id="phone" text="Email" placeholder="Enter your Email" />
    </form>
  );
}
