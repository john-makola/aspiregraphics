import Accordion from "react-bootstrap/Accordion";
import { getfaqPrintQuestions } from "../data/faqsprint";

function FaqQuestionsPrinters() {
  const faqPrint = getfaqPrintQuestions();
  let activekey = -1;

  return (
    <div style={{ display: "block" }}>
      <div>
        <h5>Print and Branding</h5>
      </div>
      <div>
        <Accordion defaultActiveKey="0">
          {faqPrint.map((item) => (
            <div key={item.key}>
              <Accordion.Item eventKey={activekey++}>
                <Accordion.Header>{item.header}</Accordion.Header>
                <Accordion.Body style={{ textAlign: "justify" }}>
                  {item.body}
                </Accordion.Body>
              </Accordion.Item>
            </div>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default FaqQuestionsPrinters;
