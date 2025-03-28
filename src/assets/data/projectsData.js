import { logos } from "./skills";

const projectsData = [
  {
    id: 1,
    title: "Task Manager",
    images: [
      "https://i.pinimg.com/736x/3a/43/db/3a43db4099aff883d773b5259bfea559.jpg",
      "https://i.pinimg.com/736x/61/bd/ed/61bdeddbffb58b043da4082e0f1e1d1e.jpg",
      "https://i.pinimg.com/736x/e6/96/0e/e6960eea4e22d869180f9bf8c0cbba4b.jpg",
      "https://i.pinimg.com/736x/3d/ff/bb/3dffbbd208263cda9793681885398b09.jpg",
      "https://i.pinimg.com/736x/3d/ff/bb/3dffbbd208263cda9793681885398b09.jpg",
      "https://i.pinimg.com/736x/90/13/3f/90133f64bc8bef683798f34de2571860.jpg",
      "https://i.pinimg.com/736x/43/90/dc/4390dcd5a833c21847071b37e96caded.jpg",
    ],
    description:
      " The CRUD Task Manager project is an extensive web application designed to streamline task management processes. Leveraging the power of React.js for the frontend, Node.js with Express.js for the backend, and MySQL for database management, this project offers a comprehensive solution for organizing tasks efficiently. The user interface is meticulously crafted using Tailwind CSS, ensuring a visually pleasing and responsive design that adapts seamlessly to different screen sizes and devices. Users are provided with a secure authentication system, allowing them to sign in and access their personalized task lists. Once authenticated, users can perform a myriad of actions including creating new tasks with detailed descriptions, setting due dates, assigning priorities, and categorizing tasks. The application facilitates easy navigation through tasks, enabling users to view, update, and delete tasks effortlessly. Each task's information is stored in a MySQL database, with Sequelize or similar ORM libraries handling data modeling and interactions, ensuring optimal performance and scalability. With its intuitive interface and robust functionality, the CRUD Task Manager empowers users to stay organized, boost productivity, and effectively manage their workload.",
    tec: [
      { name: "react", logo: logos["react"] },
      { name: "nodejs", logo: logos["nodejs"] },
      { name: "expressjs", logo: logos.expressjs },
      { name: "mysql", logo: logos.mysql },
      { name: "tailwindcss", logo: logos.tailwindcss },
    ],
    demo: { email: "yousseftaussi894@gmail.com", password: 1234 },
  },
  {
    id: 2,
    title: "Real time chat app ",
    images: [
      "https://i.pinimg.com/736x/6a/76/a3/6a76a3544a78f4d9a552b25105a11b2a.jpg",
      "https://i.pinimg.com/736x/4b/33/5e/4b335eddac847ac470eedff105cd1a8a.jpg",
      "https://i.pinimg.com/736x/5a/b2/cc/5ab2cc7ef848c13786947808b617ec8a.jpg",
      "https://i.pinimg.com/736x/f5/98/44/f5984408133a7830a8b8d9fc3e623b56.jpg",
      "https://i.pinimg.com/736x/c6/48/4e/c6484e14859040e7871229bdd85dca24.jpg",
    ],
    description:
      "Built with Node.js, Express, React, Tailwind CSS, Socket.IO, Sequelize, and more, this real-time chat application offers seamless communication between users. Users can create accounts, add friends, send invitations, and remove friends effortlessly. The application supports various types of messages including text, audio, and images, enhancing the user experience and enabling richer interactions. Leveraging the power of WebSockets with Socket.IO, messages are delivered instantaneously, ensuring a real-time conversation experience. With a sleek and intuitive user interface designed with React and Tailwind CSS, this app delivers a modern and responsive chat platform for users to connect and communicate in real-time.",
    tec: [
      { name: "Reactjs", logo: logos.react },
      { name: "Tailwindcss", logo: logos.tailwindcss },
      { name: "Nodejs", logo: logos.nodejs },
      { name: "expressjs", logo: logos.expressjs },
      { name: "Mysql", logo: logos.mysql },
      { name: "Sequelize", logo: logos.sequelize },
      { name: "Socket.io", logo: logos.socketIo },
    ],
    demo: { email: "yousseftaussi894@gmail.com", password: 1234 },
  },
  {
    id: 3,
    title: "Project management",
    images: [
      "https://i.pinimg.com/736x/3a/43/db/3a43db4099aff883d773b5259bfea559.jpg",
      "https://i.pinimg.com/736x/61/bd/ed/61bdeddbffb58b043da4082e0f1e1d1e.jpg",
      "https://i.pinimg.com/736x/e6/96/0e/e6960eea4e22d869180f9bf8c0cbba4b.jpg",
      "https://i.pinimg.com/736x/3d/ff/bb/3dffbbd208263cda9793681885398b09.jpg",
      "https://i.pinimg.com/736x/3d/ff/bb/3dffbbd208263cda9793681885398b09.jpg",
      "https://i.pinimg.com/736x/90/13/3f/90133f64bc8bef683798f34de2571860.jpg",
      "https://i.pinimg.com/736x/43/90/dc/4390dcd5a833c21847071b37e96caded.jpg",
    ],
    description:
      " The CRUD Task Manager project is an extensive web application designed to streamline task management processes. Leveraging the power of React.js for the frontend, Node.js with Express.js for the backend, and MySQL for database management, this project offers a comprehensive solution for organizing tasks efficiently. The user interface is meticulously crafted using Tailwind CSS, ensuring a visually pleasing and responsive design that adapts seamlessly to different screen sizes and devices. Users are provided with a secure authentication system, allowing them to sign in and access their personalized task lists. Once authenticated, users can perform a myriad of actions including creating new tasks with detailed descriptions, setting due dates, assigning priorities, and categorizing tasks. The application facilitates easy navigation through tasks, enabling users to view, update, and delete tasks effortlessly. Each task's information is stored in a MySQL database, with Sequelize or similar ORM libraries handling data modeling and interactions, ensuring optimal performance and scalability. With its intuitive interface and robust functionality, the CRUD Task Manager empowers users to stay organized, boost productivity, and effectively manage their workload.",
    tec: [
      { name: "html", logo: logos["html"] },
      { name: "css", logo: logos["css"] },
      { name: "javascript", logo: logos.javascrip },
      { name: "mysql", logo: logos.mysql },
      { name: "PHP", logo: logos.php },
    ],
    demo: { email: "yousseftaussi894@gmail.com", password: 1234 },
  },
];
export default projectsData;
