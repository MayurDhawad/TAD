import React, { useState } from 'react'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Container } from 'reactstrap';

const Faq = (props) => {

    const [open, setOpen] = useState("0");
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };

    return (
        <div className='faq-wrapper'>
            <Container>
                <div className='faq-heading'>
                    <h2>Frequently Asked Questions</h2>
                </div>
                <div className='faq-list'>
                    <Accordion open={open} toggle={toggle}>
                        {
                            props.faqList.map((faq, index) => (
                                <AccordionItem className={open === index.toString() ? "active" : ""} key={index}>
                                    <AccordionHeader targetId={index.toString()}>{faq.question}</AccordionHeader>
                                    <AccordionBody accordionId={index.toString()}>
                                        {
                                            faq.answer.map((answer,index)=>(
                                                <p key={index} className={answer.type === "list" ? "list" : ""}>{answer.text}</p>
                                            ))
                                        }
                                    </AccordionBody>
                                </AccordionItem>
                            ))
                        }

                    </Accordion>
                </div>
            </Container>
        </div>
    )
}

export default Faq