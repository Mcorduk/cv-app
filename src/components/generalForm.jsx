import InputField from "./inputField";

export function generalForm() {
  return (
    <form>
      <InputField
        name="name"
        text="Full Name"
        placeholder="Enter your First and Last Name here"
      />
      <InputField
        name="email"
        type="email"
        text="Email"
        placeholder="Enter your Email"
      />
      <InputField
        name="phone"
        text="Phone Number"
        type="tel"
        placeholder="Enter Phone Number"
      />
      <InputField name="adress" text="Adress" placeholder="City, Country" />
    </form>
  );
}
