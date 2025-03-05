import React from "react";

// export default function IntroSection() {
//     return (
//         <section>
//         <h1 className="centred">Result</h1>
//         <h3 className="centred" style={{color: 'blue'}}>Lesson</h3>
//         </section>
//     )
// }

const e = React.createElement

export default function IntroSection() {
  return [
    e(
      "section", {key: 1},
      null,
      e("h1", { className: "centred", key: 'section'}, "Result")
    ),
    e("h3", { className: "centred", key: 'lesson'}, "Lesson"),
  ];
}
