import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


export function FAQ() {
  return (
    <div className="w-full p-24 overflow-hidden">
      <h1 className="mb-6 text-5xl font-light font-Tomorrow uppercase text-gray-900 dark:text-white text-center">
        Frequently Asked Questions
      </h1>
      <Accordion type="single" collapsible className="w-full text-lg">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is this platform about?</AccordionTrigger>
          <AccordionContent>
            This platform provides useful resources, tools, and guides for various topics.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How do I get started?</AccordionTrigger>
          <AccordionContent>
            You can start by creating an account and exploring the available features.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is there a support team?</AccordionTrigger>
          <AccordionContent>
            Yes, we have a dedicated support team available 24/7 to assist you.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
