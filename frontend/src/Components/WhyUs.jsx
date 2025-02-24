const WhyUs = () => {
    const features = [
      {
        title: "You can afford us",
        description: "No cap! We have a solution for all budgets.",
        bgColor: "bg-yellow-400",
        textColor: "text-white",
      },
      {
        title: "We work with you",
        description: "We don't work for you, we work with you to build your brand.",
        bgColor: "bg-blue-600",
        textColor: "text-white",
      },
      {
        title: "We do it all",
        description: "We got all your needs covered, you can forget working with multiple partners.",
        bgColor: "bg-red-500",
        textColor: "text-white",
      },
      {
        title: "We deliver results",
        description: "We don't just promise, we execute.",
        bgColor: "bg-purple-700",
        textColor: "text-white",
      },
    ];
  
    return (
      <section className="w-full h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
        <h2 className="text-5xl font-extrabold mb-12 uppercase tracking-wide">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-11/12 max-w-7xl">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-10 rounded-2xl ${feature.bgColor} ${feature.textColor} shadow-2xl transform transition-all hover:scale-105`}
            >
              <h3 className="text-3xl font-bold mb-4">{feature.title}</h3>
              <p className="text-lg font-medium">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default WhyUs;
  