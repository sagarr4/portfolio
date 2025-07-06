export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Story", link: "#Story" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize data driven decesions, fostering business growth.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible working in any time zone",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently looking for new opportunities",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Smart Shift AI – AI-Powered Workforce Scheduling System (Time Series Forecasting)",
    des: "Smart Shift AI uses time series forecasting to optimize workforce scheduling, improving efficiency and reducing labor costs.",
    img: "/smartshift.jpg",
    iconLists: ["/Python.svg", "/sql.svg", "/docker.svg", "/tensorflow.svg", "/vscode.svg"],
    link: "https://github.com/sagarr4/SmartShift",
  },
  {
    id: 2,
    title: "AI-Powered-Flight-Booking-Chatbot",
    des: "An intelligent flight booking chatbot with both Web UI and Command Line Interface. Supports natural conversations, city name recognition, booking logic, and email confirmations.",
    img: "/chatbot.jpeg",
    iconLists: ["/Python.svg", "/sql.svg", "/docker.svg", "/tensorflow.svg", "/vscode.svg"],
    link: "https://github.com/sagarr4/AI-Powered-Flight-Booking-Chatbot",
  },
  {
    id: 3,
    title: "Smart-Waste-Classification",
    des: "The increasing volume of waste and ineffective manual sorting methods challenge sustainability goals. To address this, an AI-assisted waste sorting model is proposed to automate the classification of waste into recyclable, compostable, and garbage categories, enhancing recycling efficiency and supporting sustainable waste management.",
    img: "/wasteclassification.jpeg",
    iconLists: ["/Python.svg", "/sql.svg", "/docker.svg", "/tensorflow.svg", "/vscode.svg"],
    link: "https://github.com/sagarr4/Smart-Waste-Classification-A-TensorFlow-and-Kera-s-Powered-Framework-Using-Advanced-Computer-Vision",
  },
  {
    id: 4,
    title: "Animal Species Recognition",
    des: "This project applies advanced neural network architectures to enhance the accuracy of animal species recognition using image classification.",
    img: "/animal.jpeg",
    iconLists: ["/Python.svg", "/sql.svg", "/docker.svg", "/tensorflow.svg", "/vscode.svg"],
    link: "https://github.com/sagarr4/CNN-Architectures-for-High-Accuracy-Animal-Species-Recognition-through-Advanced-TL-Techniques",
  },
];

export const Story = [
  {
    quote:
      "My journey started with a Bachelor of Science in Information Technology, where I developed a strong foundation in programming and data management. The coursework challenged me to think critically and solve problems effectively. This solid academic background set the stage for my passion in data and analytics.",
    img: "/bachelor.webp",
    name: "Bachelor's Degree",
    title: "Mumbai University",
  },
  {
    quote:
      "After graduation, I stepped into the professional world as a Junior Application Developer, where I gained hands-on experience working on real projects. This role helped me sharpen my technical skills and understand how data-driven solutions impact business outcomes. It was an invaluable period of growth and learning.",
    img: "/scoopsense.png",
    name: "Professional Experience",
    title: "Jr. Application Developer at Scoopsense",
  },
  {
    quote:
      "To deepen my expertise, I pursued a Post Baccalaureate Diploma in Applied Data Science, focusing on machine learning, AI, and advanced analytics. This program allowed me to blend theory with practical applications and expand my problem-solving toolkit. Now, I’m excited to apply these skills to build impactful solutions that drive smarter decisions.",
    img: "/tru.png",
    name: "Post Baccalaureate Diploma",
    title: "Thompson Rivers University",
  },
];


export const companies = [
  {
    id: 1,
    name: "Python",
    img: "/Python.svg",
    nameImg: "/Python.svg",
  },
  {
    id: 2,
    name: "TensorFlow",
    img: "/tensorflow.svg",
    nameImg: "/tensorflow.svg",
  },
  {
    id: 3,
    name: "SQL",
    img: "/sql.svg",
    nameImg: "/sql.svg",
  },
  {
    id: 4,
    name: "Docker",
    img: "/docker.svg",
    nameImg: "/docker.svg",
  },
  {
    id: 5,
    name: "VsCode.",
   img: "/vscode.svg",
    nameImg: "/vscode.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Jr. Application Developer – Scoopsense",
    desc: `Collaborated closely with users to gather requirements and design full-stack web applications using .NET (C#) and JavaScript, which improved user engagement by 20%.
Managed end-to-end development lifecycle including coding, testing, and deployment, ensuring high-quality deliverables and timely releases.`,
    thumbnail: "/scoopsense.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/sagarr4",
    alt: "GitHub",
  },
  {
    id: 3,
    img: "/link.svg",
    url: "https://linkedin.com/in/sagarrprajapati/",
    alt: "LinkedIn",
  },
];

