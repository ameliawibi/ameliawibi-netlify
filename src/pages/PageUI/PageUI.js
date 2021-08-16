import ButtonUI from "../../containers/UI/ButtonUI";
import ChipUI from "../../containers/UI/ChipUI";

function PageUI() {
  return (
    <section
      id="pageui"
      className="container flex-1 flex-col m-auto justify-between px-10 py-5 items-start h-screen"
    >
      <ButtonUI />
      <ChipUI />
    </section>
  );
}

export default PageUI;
