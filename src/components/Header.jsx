import { useEffect, useState } from "react";
import logo from "/vite.svg";

export default function Header() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);

    return () => {
      clearInterval(interval)
      console.log('Clean...')
    }
  }, [])


  return (
    <header>
      <img src={logo} alt="vite-logo" />
      <span>Сейчас: {now.toLocaleTimeString()}</span>
    </header>
  );
}
