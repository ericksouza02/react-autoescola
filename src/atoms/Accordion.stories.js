import React from "react";
import Accordion from "./Accordion";
import AccordionGroup from "./AccordionGroup";

export default {
    title:"Components/Atoms/Accordion",
    component: Accordion
}

 

export const usage = () => (
    <>
    <Accordion title='Como eu renovo minha CNH?'>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit obcaecati perspiciatis aut iste ducimus qui. Officia, quos provident. Impedit expedita nesciunt natus eius sapiente fugiat?
        </p>
    </Accordion>

    <Accordion title='Como eu faço a mudança de categoria?'>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit obcaecati perspiciatis aut iste ducimus qui. Officia, quos provident. Impedit expedita nesciunt natus eius sapiente fugiat?
        </p>
    </Accordion>

    <Accordion title='Fui multado, e agora?'>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit obcaecati perspiciatis aut iste ducimus qui. Officia, quos provident. Impedit expedita nesciunt natus eius sapiente fugiat?
        </p>
    </Accordion>
    </>
)


export const withGroup = () => (
    <AccordionGroup>
    <Accordion title='Como eu renovo minha CNH?'>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit obcaecati perspiciatis aut iste ducimus qui. Officia, quos provident. Impedit expedita nesciunt natus eius sapiente fugiat?
        </p>
    </Accordion>

    <Accordion title='Como eu faço a mudança de categoria?'>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit obcaecati perspiciatis aut iste ducimus qui. Officia, quos provident. Impedit expedita nesciunt natus eius sapiente fugiat?
        </p>
    </Accordion>

    <Accordion title='Fui multado, e agora?'>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit obcaecati perspiciatis aut iste ducimus qui. Officia, quos provident. Impedit expedita nesciunt natus eius sapiente fugiat?
        </p>
    </Accordion>
    </AccordionGroup>
)