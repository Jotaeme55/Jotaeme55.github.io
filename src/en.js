export default{
    data(){
        return{
            en :{
                welcomeMsg:"Hello, I am José Tabares",
                cuerpoFirstMessage:"I'm a software engineer with a passion for scalable architectures and emerging technologies currently working as a full stack developer in a research center of the University of Seville called Fidetia, where I also work on Artificial Intelligence projects, a subject that I would like to learn in the future and dedicate myself to.",
                cuerpoSecondMessage:"I love to work on problems with my coworkers, always thinking our contributions can have a meaning for other people. Outside of work, you're likely to find me reading books, playing video games, or doing exercise.",
                cuerpoThirdMessage:"I love talking to new people about technology, learning new things, and I am ambitious. If you have any questions, feel free to contact me. Additionally, below you can see some of my technological skills acquired over the past years.",
                clickMe:"Hey, click me!!",
                mySkills:"My skills",
                cambiaIdioma:"change the language",
                contentPython:`With more than 2 years of profesional experience in Python (without taking into account non-professional experience such as the degree), I have gained my skills across various domains, including web development and artificial intelligence. I have adeptly navigated through the Flask and Django frameworks, leveraging their powerful features to build robust and scalable web applications. From crafting elegant RESTful APIs to designing complex backend systems, Python has been my one of my favourite languages for developing efficient and maintainable solutions.\r\r\n\n

Beyond web development, Python has been instrumental in my journey into the realm of artificial intelligence. Leveraging its rich ecosystem of libraries such as NumPy, Pandas, and TensorFlow, I have developed sophisticated machine learning and deep learning models. From predictive analytics to natural language processing tasks, Python's versatility and expressiveness have enabled me to tackle diverse challenges in the field of artificial intelligence with confidence and precision.\r\r\n\n

As a seasoned Python developer, I am passionate about pushing the boundaries of what is possible with this versatile language. My hands-on experience in building projects using Flask and Django, coupled with my expertise in harnessing Python for artificial intelligence applications, positions me as a versatile and innovative professional ready to take on new and exciting challenges in the ever-evolving landscape of technology. Whether it's architecting scalable web applications or delving into cutting-edge AI research, I am committed to delivering exceptional results that drive value and innovation.`,
                contentjs:`
                I have over 2 years of experience working with JavaScript in a variety of projects, including web applications, mobile applications, and backends. I have a strong understanding of the fundamentals of JavaScript, as well as the latest technologies and frameworks.\r\r\n\n

                In my experience, I have used JavaScript to develop robust and scalable web applications, using frameworks like Vue.js to create interactive and engaging user interfaces. I have also worked with Node.js to create efficient and scalable backends, and I have integrated JavaScript with different databases, such as MySQL and MongoDB.\r\r\n\n

                In addition to my experience in web development, I have also worked on implementing AI models in web applications. I have experience using JavaScript libraries like TensorFlow.js to integrate machine learning and deep learning models that can run directly in the web browser.`,
                contentvue:`I am a highly motivated and experienced full-stack developer with over 2 years of professional experience using Vue.js. Vue.js is my favorite JavaScript framework, and I have used it to build a variety of web applications. I am proficient in all aspects of the Vue.js framework, including the core library, Vuex, Vue Router, and Vuetify. I am also familiar with best practices for front-end development, such as responsive design, unit testing, and performance optimization.\r\r\n\n
                
                In addition to my professional experience, I have also been using Vue.js for personal projects for over 4 years. This has given me the opportunity to experiment with different features of the framework and to learn from my mistakes. I am confident in my ability to use Vue.js to build high-quality, user-friendly web applications.`,
                contentai:`As I mentioned previously, I am proficient in several Python frameworks for artificial intelligence development, such as:\r\r\n\n

                -TensorFlow\r\r\n\n
                -Scikit-learn\r\r\n\n
                -H2o\r\r\n\n
                -Keras\r\r\n\n
                -Pandas\r\r\n\n
                I have extensive experience using these frameworks to build a variety of AI models, including:\r\r\n\n
                
                -Neural networks\r\r\n\n
                -Decision trees\r\r\n\n
                -K-nearest neighbors\r\r\n\n
                
                I have over 2 years of professional experience in AI development. In my previous role, I was responsible for developing and deploying AI models to improve the efficiency of our business operations. I have also worked on several academic projects involving AI, including:\r\r\n\n
                
                Developing a neural network to predict the number of litres of oil in an oil industry\r\r\n\n
                Building a decision tree to classify images\r\r\n\n
                Implementing a K-nearest neighbors algorithm for product recommendation\r\r\n\n
                Using opencv library to develop a system that can read the eyes and predict where they are looking\r\r\n\n
                I am confident in my ability to use AI to solve real-world problems. I am always looking for new challenges and opportunities to apply my skills and knowledge.`,
                contentothers:`
                Databases:\r\r\n\n
                I have experience using SQL and MongoDB databases. During my university career, I acquired a solid knowledge of SQL through various courses and academic projects. This training allowed me to understand the fundamentals of relational databases, including data structure creation, information management, and complex query execution.\r\r\n\n
                
                In the professional field, I have worked with MongoDB for a couple of years. This experience has allowed me to familiarize myself with the specific features of this type of NoSQL database, such as flexibility in data storage and horizontal scalability. I have used MongoDB for web application development, document management, and data analytics.\r\r\n\n
                
                Here are some specific examples of my experience:\r\r\n\n
                
                SQL:\r\r\n\n
                
                *Design and implementation of relational databases for academic projects.\r\r\n\n
                *Execution of complex queries to extract relevant information from databases.\r\r\n\n
                *Optimization of SQL query performance.\r\r\n\n
                -MongoDB:\r\r\n\n
                
                *Development of web applications that use MongoDB as a database.\r\r\n\n
                *Implementation of NoSQL data schemas to optimize flexibility and scalability.\r\r\n\n
                *Performing queries and data analysis in MongoDB.\r\r\n\n
                -Docker:\r\r\n\n
                During my academic training, I had the opportunity to gain experience with Docker. This experience was developed in the context of different courses and projects, where Docker was used to:\r\r\n\n
                
                Containerize applications: I implemented web and desktop applications in Docker containers, which allowed me to isolate them from the environment and facilitate their portability and scalability.\r\r\n\n
                
                Create replicable development environments: I used Docker to create identical development environments for each member of a team, which facilitated collaboration and reproducibility of results.\r\r\n\n
                
                Automate DevOps tasks: I implemented DevOps workflows using Docker to automate tasks such as building, integrating, and deploying applications.\r\r\n\n
                
                -GitHub: 4 years of career and 2 years professional\r\r\n\n
                I have extensive experience using GitHub, spanning 4 years of my university career and 2 years of professional work. During this time, I have used GitHub for a variety of purposes, both personal and professional.\r\r\n\n
                -Others:\r\r\n\n
                During my experience, in addition to the aforementioned, I have worked on other projects with different languages such as C, C#, or C++. However, I have not worked directly professionally in these fields, but I would not rule it out in the future.`,
                contentjava:`Skills and Expertise:\r\r\n\n

                *Web Development: I have utilized Java for dynamic web application development using servlets, frameworks like Spring, and JSP.\r\r\n\n
                *Model Integration: I possess experience integrating machine learning models like H2O into Java applications.\r\r\n\n
                *Algorithms: I have independently developed custom algorithms in Java, including decision trees and recursion algorithms.\r\r\n\n
                -Project Examples:\r\r\n\n
                
                *Hotel Booking Web Application: I developed a full-fledged web application using Java, Spring, and MySQL for searching hotels and events in a specific city.\r\r\n\n
                *Veterinary System: I implemented a system for appointment scheduling and client storage in a database using Java.`
            }
        }
    }
}
