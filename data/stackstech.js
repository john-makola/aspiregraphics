const techStacks = [
  {
    id: "0001",
    title: "Our Technology building tools for building Apps",
    intro:
      "At Aspire Graphics, we pride ourselves on using the latest and most reliable technology stacks for our frontend, backend, and APIs. We strive to stay ahead of the curve when it comes to technology, ensuring that our clients receive the best possible experience.",
    paragraph1: "",

    subTitle: "We specialize in developing:",

    conclusion:
      "Overall, our technology stacks on frontend, backend, and APIs are carefully selected to meet the needs of our clients, while ensuring scalability, reliability, and security. Our expertise in modern technologies and frameworks allows us to provide innovative and tailored solutions that enable businesses to grow and succeed in a rapidly changing digital landscape.",
    contentPic: "/computer.jpg",
  },
];

const services = [
  {
    id: "45652",
    title: "Frontend Technology Stack ",
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

export function getTechStacks() {
  return techStacks;
}
export function getServices() {
  return services;
}
