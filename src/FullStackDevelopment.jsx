import React from 'react';
import './AllCourses.css';
import Footer from './Footer';

const FullStackDevelopment = () => {
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
    ]

    return (
        <div>
            <h2>Full Stack Development</h2>
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


export default FullStackDevelopment;
