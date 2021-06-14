import { useCycle, AnimatePresence } from "framer-motion";
import { ISentence } from "interfaces/sentence";
import { Divider } from "styles/components";

import {
  AccordionContainer,
  AccordionHeader,
  AccordionToggle,
  AccordionContent,
} from "./styles";

interface AccordionProps {
  item: ISentence;
  idx: number;
}

export function Accordion({ item, idx }: AccordionProps) {
  // Аналог useState & handle функции
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <AccordionContainer>
      <AccordionHeader
        whileHover={{ opacity: 0.9 }}
        initial={false}
        animate={isOpen ? "open" : "close"}
        onClick={() => toggleOpen()}
      >
        <AccordionToggle />
        <Divider width={8} />
        {item.title}
      </AccordionHeader>
      <AnimatePresence initial={false}>
        {isOpen && (
          <AccordionContent
            key="content"
            initial="close"
            animate="open"
            exit="close"
            variants={{
              open: { opacity: 1, height: "auto" },
              close: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.2 }}
          >
            {item.content}
            <br />
            {idx % 2 ? (
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                atque deserunt labore, tenetur nihil dolore dicta eius voluptas
                accusamus. Possimus libero ullam, consectetur accusantium id
                maxime sint quod aspernatur molestias!
              </div>
            ) : null}
          </AccordionContent>
        )}
      </AnimatePresence>
    </AccordionContainer>
  );
}
