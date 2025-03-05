import Button from "./Button";

export default function TabSection({ active, onChange }) {
  return (
    <section style={{ marginBottom: "1rem" }}>
      <Button isActive={active === "main"} clickButton={() => onChange("main")}>
        Главная
      </Button>
      <Button
        isActive={active === "feedback"}
        clickButton={() => onChange("feedback")}
      >
        Обратка
      </Button>
      <Button
        isActive={active === "effect"}
        clickButton={() => onChange("effect")}
      >
        Effect  
      </Button>
    </section>
  );
}
