import Header from "./components/Header";
import Section from "./components/Button/Section";
import DifferentSection from "./components/Button/DifferentSection";
import IntroSection from "./components/Button/IntroSection";
import TabSection from "./components/Button/TabSection";
import FeedBack from "./components/FeedBack";
import { useState } from "react";
import EffectSection from "./components/Button/EffectSection";

export default function App() {
  const [visible, setVisible] = useState(true)
  const [tab, setTab] =  useState('effect')

  setTimeout(() => {
    setVisible(false)
  }, 3000)

  return (
    <>
      {visible && <Header />}
      <main>
        <IntroSection />
        <TabSection active={tab} onChange={(current) => setTab(current)} />

        {tab === 'main' && (
          <>
        <Section />
        <DifferentSection />
        </>
        )}

        {tab === 'feedback' && 
        <FeedBack />
        }
        {tab === 'effect' && 
        <EffectSection />
        }
        
      </main>
      </>
  );
}
