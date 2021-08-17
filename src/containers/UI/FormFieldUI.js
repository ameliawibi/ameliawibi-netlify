import Input from "../../components/Field/Input";
import Textarea from "../../components/Field/Textarea";

function FormFieldUI() {
  return (
    <div className="mb-8">
      <h2 className="text-3xl mb-4 font-medium text-white sm:text-4xl">
        Form field
      </h2>
      <div className="md:w-3/4 lg:w-2/3 xl:w-1/2 mb-4">
        <Input label="Text" name="text" placeholder="Text" />
      </div>
      <div className="md:w-3/4 lg:w-2/3 xl:w-1/2 mb-4">
        <Textarea label="Text area" name="text area" placeholder="Text area" />
      </div>
    </div>
  );
}

export default FormFieldUI;
