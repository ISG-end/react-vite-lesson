import Way from "../Way";
import { ways } from "../../data";


export default function Section() {
    return (
         <section>
                  <h3>Эксперты утверждают</h3>
                  <ul>
                    {ways.map((way) => (
                      <Way key={way.title} {...way} />
                    ))}
                  </ul>
                </section>
    )
}