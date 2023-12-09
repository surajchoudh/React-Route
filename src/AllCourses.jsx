import React from 'react';
import './AllCourses.css';
import Footer from './Footer';

const AllCourses = () => {
    const courses = [
        {
            id: 1,
            title: 'Course 1',
            image: 'https://www.guvi.in/blog/wp-content/uploads/2023/12/UI-Vs-UX_-Which-is-the-best-career_-2.webp',
            content: 'UI Vs UX: Which is the Best Career For You? UI (User Interface) and UX (User Experience) are the most commonly misunderstood terms in design',
        },
        {
            id: 2,
            title: 'Course 2',
            image: 'https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp',
            content: 'Data Engineering Projects: How to Build Real-time Streaming Data Pipelines In the world of data engineering, building real-time streaming data pipelines is a challenging yet',

        },
        {
            id: 3,
            title: 'Course 3',
            image: 'https://www.guvi.in/blog/wp-content/uploads/2023/12/ux-2.png',
            content: 'In today’s digital age, the intersection of economics and technology offers exciting career opportunities',

        },
        {
            id: 4,
            title: 'Course 4',
            image: 'https://www.guvi.in/blog/wp-content/uploads/2023/12/ux-1.png',
            content: 'Blockchain technology has garnered significant attention in recent years due to its potential to revolutionize',

        },
        {
            id: 5,
            title: 'Course 5',
            image: 'https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Data-Engineering-Projects-How-to-Build-Real-time-Streaming-Data-Pipelines.webp',
            content: 'Ever noticed how technology is making learning way cooler? Well, guess what’s making it even',

        },
        {
            id: 6,
            title: 'Course 6',
            image: 'https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Economics-Students.webp',
            content: 'With the rapid advancement of technology, the demand for IT professionals has soared in recent',

        },
        {
            id: 7,
            title: 'Course 7',
            image: 'https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-AWS-vs-Azure-vs-Google-Cloud-Comparing-the-Top-Cloud-Service-Providers.webp',
            content: 'Cloud computing has revolutionized the way organizations work, propelling us into a new era ',

        },
        {
            id: 8,
            title: 'Course 8',
            image: 'https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp',
            content: 'Top 9 AI Tools for Content Creation That You Shouldn’t Miss AI (Artificial Intelligence) is taking over the world by storm and it is high time',

        },
        {
            id: 9,
            title: 'Course 9',
            image: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/Interviewing-Techniques-for-Technical-Skill-Assessment-feature-image.webp',
            content: 'Blockchain technology has garnered significant attention in recent years due to its potential to revolutionize',

        },
        {
            id: 10,
            title: 'Course 10',
            image: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/Devops-best-practices.png',
            content: 'With the rapid advancement of technology, the demand for IT professionals has soared in recent',

        },
        {
            id: 11,
            title: 'Course 11',
            image: 'https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Steps-In-The-UX-Design-Process.webp',
            content: 'Cloud computing has revolutionized the way organizations work, propelling us into a new era ',

        },
        {
            id: 12,
            title: 'Course 12',
            image: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/ai_tools_for_content_creation.webp',
            content: 'Top 9 AI Tools for Content Creation That You Shouldn’t Miss AI (Artificial Intelligence) is taking over the world by storm and it is high time',

        },
    ];

    return (
        <div>
            <h2>All Courses</h2>
            <div className="courses">
                {courses.map((course) => (
                    <div key={course.id} className="course">
                        <img src={course.image} alt={course.title} />
                        <h3>{course.title}</h3>
                        <p>{course.content}</p>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
};


export default AllCourses;
