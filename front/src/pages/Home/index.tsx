import { useEffect, useState } from "react";

import { Accordion } from "components/Accordion";
import { HomePageContainer, AccordionsContainer } from "./styles";
import { ISentence } from "interfaces/sentence";

export function HomePage() {
  const [sentences, setSentences] = useState<ISentence[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3333/posts");

      const data = await res.json();
      setSentences(data);
    };

    fetchData();
  }, []);
  return (
    <HomePageContainer>
      <AccordionsContainer>
        {sentences.map((item, idx) => (
          <Accordion key={idx} idx={idx} item={item} />
        ))}
      </AccordionsContainer>
    </HomePageContainer>
  );
}
