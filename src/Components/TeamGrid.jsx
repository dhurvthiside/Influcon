import React, { useEffect, useState } from "react";

const TeamGrid = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollSpeeds = [-0.2, 0.2, -0.15, 0.15]; // Different speeds for each column

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

  const columns = [[], [], [], []];
  teamMembers.forEach((member, index) => {
    columns[index % 4].push(member);
  });

  return (
    <div className="min-h-screen bg-gray-100 overflow-hidden pt-20">
      <h2 className="text-center text-5xl font-extrabold mb-12">
        <span className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text">
          OUR TEAM
        </span>
      </h2>
      <div className="grid grid-cols-4 gap-8 px-12">
        {columns.map((column, index) => (
          <div
            key={index}
            className="space-y-8"
            style={{
              transform: `translateY(${scrollY * scrollSpeeds[index]}px)`, // Parallax effect applied here
              transition: "transform 0.1s ease-out",
            }}
          >
            {column.map((member, idx) => (
              <div
                key={idx}
                className="relative h-[700px] bg-white rounded-lg overflow-hidden shadow-lg group hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
                <div className="absolute bottom-6 left-6 z-10">
                  <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                  <p className="text-lg text-gray-300">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Extra space for overflow */}
      <div className="h-[600px]"></div> {/* Adjust this height as needed */}
    </div>
  );
};

export default TeamGrid;
