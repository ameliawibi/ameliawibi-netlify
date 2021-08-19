import Input from "../../components/Field/Input";
import Textarea from "../../components/Field/Textarea";
import "./UI.css";

function FormFieldUI() {
  return (
    <div className="UI">
      <h2>Form field</h2>
      <div className="UI-field-div">
        <Input label="Text" name="text" placeholder="Text" />
      </div>
      <div className="UI-field-div">
        <Textarea label="Text area" name="text area" placeholder="Text area" />
      </div>
    </div>
  );
}

export default FormFieldUI;
