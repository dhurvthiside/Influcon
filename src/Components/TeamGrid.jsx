import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const TeamSection = () => {
  return (
    <motion.div
      className="relative w-full text-center py-20 bg-[#c3e7ff] overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-6xl font-bold text-[#0d2489]" style={{ fontFamily: "Brick Sans, sans-serif" }}>
        OUR TEAM
      </h2>
    </motion.div>
  );
};

const ParallaxTeam = () => {
  const { scrollY } = useScroll();
  const translateY1 = useTransform(scrollY, [0, 500], [0, -50]);
  const translateY2 = useTransform(scrollY, [0, 500], [0, 50]);

  const teamMembers = [
    { name: 'Dedy', role: 'Web Developer', image: 'https://a-us.storyblok.com/f/1017006/912x1120/8e93856f41/dedy.jpg/m/456x560/filters:quality(80)' },
    { name: 'Jasmine', role: 'UX Designer', image: 'https://a-us.storyblok.com/f/1017006/912x1120/c9f043a605/jasmine.jpg/m/456x560/filters:quality(80)' },
    { name: 'Lee', role: 'Marketing Lead', image: 'https://a-us.storyblok.com/f/1017006/912x1120/47b81c46eb/lee.jpg/m/456x560/filters:quality(80)' },
    { name: 'Ross', role: 'Back-end Developer', image: 'https://a-us.storyblok.com/f/1017006/912x1120/7838314376/ross.jpg/m/456x560/filters:quality(80)' },
    { name: 'Alistair', role: 'Creative Head', image: 'https://a-us.storyblok.com/f/1017006/1000x1240/84371d22de/alistair.jpg/m/456x560/filters:quality(80)' },
    { name: 'Paul', role: 'Project Manager', image: 'https://a-us.storyblok.com/f/1017006/912x1120/3760bec06e/paul.jpg/m/456x560/filters:quality(80)' },
    { name: 'Georgie', role: 'HR Specialist', image: 'https://a-us.storyblok.com/f/1017006/1000x1240/59749d6691/georgie.jpg/m/456x560/filters:quality(80)' },
    { name: 'DT', role: 'Data Analyst', image: 'https://a-us.storyblok.com/f/1017006/912x1020/95c9d31261/dt.jpg/m/456x560/filters:quality(80)' },
    { name: 'Jay', role: 'UI Designer', image: 'https://a-us.storyblok.com/f/1017006/912x1020/4c13c81536/jay.jpg/m/456x560/filters:quality(80)' },
    { name: 'Sam', role: 'Front-end Developer', image: 'https://a-us.storyblok.com/f/1017006/912x1020/74836f4fc8/sam.jpg/m/456x560/filters:quality(80)' },
    { name: 'Matt', role: 'Back-end Developer', image: 'https://a-us.storyblok.com/f/1017006/912x1120/57692a1897/matt.jpg/m/456x560/filters:quality(80)' },
    { name: 'Sherilynn', role: 'Project Manager', image: 'https://a-us.storyblok.com/f/1017006/912x1120/c54203b73d/sherilynn.jpg/m/456x560/filters:quality(80)' },
    { name: 'Dan', role: 'Creative Director', image: 'https://a-us.storyblok.com/f/1017006/912x1020/d782481c32/dan.jpg/m/456x560/filters:quality(80)' },
    { name: 'Sharné', role: 'People & Culture', image: 'https://a-us.storyblok.com/f/1017006/912x1120/3b316d68a4/sharne.jpg/m/456x560/filters:quality(80)' },
    { name: 'Lia', role: 'Front-end Developer', image: 'https://a-us.storyblok.com/f/1017006/1000x1240/05fba9e65f/lia.jpg/m/456x560/filters:quality(80)' },
    { name: 'Niaal', role: 'Agency Director', image: 'https://a-us.storyblok.com/f/1017006/912x1120/fb0ce76564/niaal.jpg/m/456x560/filters:quality(80)' },
  ];

  return (
    <div className="relative min-h-screen bg-gray-100 flex justify-center items-center px-6 md:px-12 overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="relative h-[550px] w-full bg-white rounded-lg shadow-lg overflow-hidden group"
            style={{ transform: `translateY(${index % 2 === 0 ? translateY1 : translateY2}px)` }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Image with hover effect */}
            <motion.img
              src={member.image}
              alt={member.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90"></div>

            {/* Text with animation */}
            <motion.div
              className="absolute bottom-6 left-6 backdrop-blur-md p-4 rounded-lg bg-white/20 border border-white/40 transition-transform duration-500 group-hover:translate-y-[-10px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white">{member.name}</h3>
              <p className="text-lg text-gray-300">{member.role}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const TeamPage = () => {
  return (
    <div>
      <TeamSection />
      <ParallaxTeam />
    </div>
  );
};

export default TeamPage;
