import Button from "../../components/Button";
import { PRIMARY, SECONDARY } from "../../components/Button/Button";

function buttonUI() {
  return (
    <div className="mb-8">
      <h2 className="text-3xl mb-4 font-medium text-white sm:text-4xl">
        Button
      </h2>
      <div className="flex justify-left gap-4 inline-flex flex-wrap">
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
