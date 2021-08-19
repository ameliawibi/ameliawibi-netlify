import { whyme } from "../data";
import "./Whyme.css";

function Whyme() {
  return (
    <section className="Whyme-container" id="whyme">
      <div className="Whyme">
        <h1>Why me?</h1>
        <ul>
          {whyme.map((why) => (
            <li key={why.id.toString()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d={why.svg} />
              </svg>
              <p>{why.list}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Whyme;
