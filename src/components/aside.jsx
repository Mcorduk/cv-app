import { ExperienceForm } from "./components/Forms/experienceForm";
import { GeneralForm } from "./components/Forms/generalForm";
import { EducationForm } from "./components/educationForm";

export default function Aside() {
  return (
    <div>
      <GeneralForm />
      <EducationForm />
      <ExperienceForm />
    </div>
  );
}
