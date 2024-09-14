import Accordion from "./Accordion.vue";
import AccordionTab from "./components/accordion-tab/AccordionTab.vue";

export default {
  title: "Components/Accordion",
  component: Accordion,
};

export const Default = () => ({
  components: { Accordion, AccordionTab },
  setup() {
    return {};
  },
  template: `
    <Accordion>
      <AccordionTab title="First Tab">
        <p>This is the content for the first tab.</p>
      </AccordionTab>
      <AccordionTab title="Second Tab">
        <p>This is the content for the second tab.</p>
      </AccordionTab>
      <AccordionTab title="Third Tab">
        <p>This is the content for the third tab.</p>
      </AccordionTab>
    </Accordion>
  `,
});
