import Button from "./Button"
import { useState } from "react";   
import { differences } from "../../data";

export default function DifferentSection() {
    const [contentType, setContentType] = useState(null);
    
      console.log("Render");
    
      function handleClick(type) {
        setContentType(type);
        console.log(contentType);
      }
    
    return(
        <section>
          <h3>Мы другие</h3>

          <Button
            isActive={contentType === "way"}
            clickButton={() => handleClick("way")}
          >
            123
          </Button>
          <Button
            isActive={contentType === "easy"}
            clickButton={() => handleClick("easy")}
          >
            456
          </Button>
          <Button
            isActive={contentType === "program"}
            clickButton={() => handleClick("program")}
          >
            789
          </Button>

          {contentType ? (
            <p> {differences[contentType]} </p>
          ) : (
            <span>Нажми на кнопку</span>
          )}
        </section>
    )
}