const mobileApp = [
  {
    id: "0001",
    title: "Building innovations with mobile apps",
    intro:
      "Mobile apps have become an integral part of our daily lives. With the increasing popularity of smartphones and tablets, mobile app development has become a booming industry.",
    paragraph1:
      "Mobile apps provide businesses with an opportunity to engage with their customers in a more personalized and direct way. Apps can be used to send push notifications, provide exclusive offers, and enable customers to interact with the business in real-time.",
    paragraph2:
      " Mobile apps can help businesses to increase their brand recognition and visibility. A well-designed app with a unique user interface and engaging features can make a lasting impression on customers and help businesses to stand out from the competition.",
    subTitle: "We specialize in developing:",

    conclusion:
      "Mobile apps offer many advantages for businesses, including increased customer engagement, enhanced customer experience, improved brand recognition, increased customer loyalty, access to customer data, and a competitive advantage. By investing in mobile apps, businesses can improve their customer relationships, increase sales, and stay ahead of the competition.",
    contentPic: "/computer.jpg",
  },
];

const services = [
  {
    id: "45652",
    title: "Native apps: : ",
    description:
      "Native apps are designed specifically for a particular mobile operating system, such as Android or iOS, using the platform's native programming languages and tools. Native apps are optimized for the operating system and device, providing a high level of performance and user experience. They can also access device-specific features, such as the camera, GPS, and accelerometer. Native apps are downloaded and installed directly onto the device from an app store.",
  },
  {
    id: "45653",
    title: "Web apps:",
    description:
      "Web apps are accessed through a mobile browser and are essentially mobile-optimized websites. Web apps are built using web technologies such as HTML, CSS, and JavaScript and are not installed on the device. They can be accessed through any device with a web browser, making them more accessible and easier to maintain. However, they have limited access to device features and may not provide the same level of performance as native apps.",
  },
  {
    id: "45654",
    title: "Hybrid apps:",
    description:
      "Hybrid apps combine elements of both native and web apps. They are built using web technologies and are wrapped in a native container that allows them to be downloaded and installed on the device from an app store. Hybrid apps can access device features and provide a high level of performance, making them a popular choice for businesses that want to develop an app for both Android and iOS platforms. However, hybrid apps may not provide the same level of performance as native apps.",
  },
];

export function getMobileApps() {
  return mobileApp;
}
export function getServices() {
  return services;
}
