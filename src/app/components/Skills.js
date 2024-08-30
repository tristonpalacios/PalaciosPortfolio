"use client";
import React, { useEffect, useState } from "react";

const Skills = () => {
  const skills = [
    "C#",
    "TensorFlow",
    "PySpark",
    "Clean Architecture",
    "Next.js",
    "Vue.js",
    "Azure DevOps",
    "Databricks",
    "Kafka",
    "JavaScript",
    "React",
    "Node.js",
    "Docker",
    "Python",
    "SQL",
    "NoSQL",
    "GraphQL",
    "RESTful APIs",
    "Git",
    "Machine Learning",
    "Artificial Intelligence",
    "Agile Methodologies",
    "SCRUM",
    "Sass",
    "PostgreSQL",
    "MongoDB",
    "Express.js",
    "Django",
    "React",
    "Apache Spark",
    "Power BI",
    "Selenium",
    "Terraform",
    "Unit Testing",
    "Regression Testing",
    "Integration Testing",
    "Grafana",
    "MVC",
    "Power Automate",
    "Automation Engineering",
    "Kibana",
  ];

  const [shuffledSkillsLeft, setShuffledSkillsLeft] = useState([]);
  const [shuffledSkillsRight, setShuffledSkillsRight] = useState([]);

  // Function to shuffle an array
  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  useEffect(() => {
    setShuffledSkillsLeft(shuffleArray(skills));
    setShuffledSkillsRight(shuffleArray(skills));
  }, []);

  return (
    <section className="skills">
      <div className="skills__header">My Expertise</div>
      <div className="skills__text skills__text--left">
        {shuffledSkillsLeft.map((skill, index) => (
          <React.Fragment key={index}>
            {skill}
            {index < shuffledSkillsLeft.length - 1 && (
              <span>&nbsp;&nbsp;&nbsp;</span>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="skills__text skills__text--right">
        {shuffledSkillsRight.map((skill, index) => (
          <React.Fragment key={index}>
            {skill}
            {index < shuffledSkillsRight.length - 1 && (
              <span>&nbsp;&nbsp;&nbsp;</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Skills;
