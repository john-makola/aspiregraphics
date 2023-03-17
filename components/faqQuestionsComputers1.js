import Accordion from "react-bootstrap/Accordion";
import { getfaqSoftwareDevQuestions } from "../data/faqssoftwaredev";

function FaqQuestionsComputers() {
  const faqSoftwareDev = getfaqSoftwareDevQuestions();
  let activekey = -1;
  return (
    <div style={{ display: "block" }}>
      <div>
        <h5>Software Development Services</h5>
      </div>
      <div>
        <Accordion defaultActiveKey="0">
          {faqSoftwareDev.map((item) => (
            <div key={item.key}>
              <Accordion.Item eventKey={activekey++}>
                <Accordion.Header>{item.header}</Accordion.Header>
                <Accordion.Body>{item.body}</Accordion.Body>
              </Accordion.Item>
            </div>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default FaqQuestionsComputers;
