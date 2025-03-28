import React from "react";
import styles from "./About.module.css";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion.js";
import ServiceCard from "../ServiceCard/ServiceCard.jsx";
import { backend, creator } from "../../assets/index.js";
import Card from "../UI/Card.jsx";

const serviceData = [
  { title: "Backend Developer", icon: backend },
  { title: "Frontend Developer", icon: creator },
];

const About = () => {
  return (
    <Card>
      <motion.p
        className={styles["about-me-long"]}
        variants={fadeIn("", "", 0.1, 1)}
      >
        Identifying myself as a coding-entusiast coming from Civil Engineering
        field has largely shaped my perspectives and aspirations. I understand
        how it feels to be in a new field at the age of 23 and starting learning
        new things and dealing with financial/food insecurity or without
        opportunity and go above and beyond when an opportunity arises. I take
        great pride in persistence, diligence, and empathy. This is why I love
        coding and its functions as societal tools that allow
        individuals/corporations to overcome hurdles and accelerate growth. I
        also credit my resourceful working style for my love of guitar. Life has
        taught me to seek out opportunities, whether or not they are risky.
        Please feel free to contact me via LinkedIn or email. I'm always looking
        forward to an insightful conversation over coffee, or even better, a
        round of paragliding.
      </motion.p>
      <div className={styles["service-card"]}>
        {serviceData.map((data, index) => (
          <ServiceCard
            key={index}
            index={index}
            title={data.title}
            icon={data.icon}
          />
        ))}
      </div>
    </Card>
  );
};

export default About;
