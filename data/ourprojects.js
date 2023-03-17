const ourProjects = [
  {
    id: "0001",
    title: "Our Projects",
    intro:
      "We are thrilled to announce that our company has developed a range of innovative applications, products, and software solutions that have made a significant impact on the industry.",
    paragraph1: "",

    subTitle: "Some of our Projects",

    conclusion:
      "Overall, we are proud of the solutions we have developed and the impact they have made on the industry. We are committed to continuing to push the boundaries of what is possible in software development and to deliver innovative solutions that exceed the expectations of our clients.",
    contentPic: "/computer.jpg",
  },
];

const services = [
  {
    id: "45652",
    title: "Management information System: - Staff Perfomance Appraisal System ",
    description:
      "Our frontend technology stack includes popular frameworks such as React, Angular, and Vue.js. These frameworks allow us to create high-performance and interactive user interfaces that are responsive and mobile-friendly. We also use HTML, CSS, and JavaScript to build elegant and user-friendly interfaces that meet the needs of our clients.",
  },
  {
    id: "45653",
    title: "Backend Technology Stack:",
    description:
      "For backend development, we use a combination of programming languages, frameworks, and databases to create scalable and secure applications. We use Node.js and Express.js to develop REST APIs and microservices, which allows us to create modular and flexible backend architectures. We also use PHP and Laravel for backend development, which provides us with a robust and scalable backend framework. For databases, we use both SQL and NoSQL databases like MySQL, MongoDB, and Redis to store and retrieve data efficiently.",
  },
  {
    id: "45654",
    title: "API Technology Stack:",
    description:
      "Our API technology stack includes RESTful APIs, GraphQL APIs, and microservices architecture. We use Node.js and Python to develop our APIs, along with popular API frameworks such as Express.js and Flask. We also use tools such as Postman and Swagger to design, document, and test our APIs, ensuring that they are well-documented, reliable, and easy to use.",
  },
];

export function getOurProjects() {
  return ourProjects;
}
export function getServices() {
  return services;
}
