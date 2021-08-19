import Button from "../../components/Button";
import { PRIMARY, SECONDARY } from "../../components/Button/Button";
import "./UI.css";

function buttonUI() {
  return (
    <div className="UI">
      <h2>Button</h2>
      <div className="UI-button-div">
        <Button variant={PRIMARY}>primary</Button>
        <Button variant={SECONDARY}>secondary</Button>
        <Button variant={PRIMARY} disabled>
          primary disabled
        </Button>
        <Button variant={SECONDARY} disabled>
          secondary disabled
        </Button>
      </div>
    </div>
  );
}

export default buttonUI;
