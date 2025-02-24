import React, { useState, useEffect } from "react";

const WhyChooseUs = () => {
  const statsList = [
    { value: "70+", text: "🌟 Clients" },
    { value: "1200+", text: "🔥 Hours on brainstorming" },
    { value: "12+", text: "🚀 Team members" },
  ];

  const [stats, setStats] = useState([...statsList]);

  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prevStats) => {
        const newStats = [...prevStats];
        newStats.unshift(newStats.pop()); // Rotate the array
        return [...newStats];
      });
    }, 5000); // Change stats every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="comparison"
      aria-label="Why Choose Us"
      className="bg-slate-50 dark:bg-gray-800 py-20 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Why Choose Us?
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700 dark:text-gray-300">
            Experience the difference with our dedicated team, extensive research, and a strong client base.
          </p>
        </div>
        <ul
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {stats.map((stat, index) => (
            <li key={index}>
              <figure className="relative rounded-2xl bg-white dark:bg-gray-900 p-6 text-center shadow-xl shadow-slate-900/10 transform transition-all duration-500 hover:scale-105">
                <blockquote className="relative p-3">
                  <p className="text-6xl font-bold tracking-tight text-slate-900 dark:text-white">
                    {stat.value}
                  </p>
                </blockquote>
                <figcaption className="text-center mt-4">
                  <div className="font-display text-lg text-slate-900 dark:text-white">
                    {stat.text}
                  </div>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyChooseUs;
