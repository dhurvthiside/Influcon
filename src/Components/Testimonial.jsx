import React from "react";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      text: "I love the fitness apparel and gear I purchased from this site. The quality is exceptional and the prices are unbeatable.",
      name: "Sheryl Berge",
      image: "https://randomuser.me/api/portraits/men/15.jpg",
    },
    {
      id: 2,
      text: "As a professional athlete, I rely on high-performance gear for my training. This site offers a great selection of top-notch products.",
      name: "Leland Kiehn",
      image: "https://randomuser.me/api/portraits/women/15.jpg",
    },
    {
      id: 3,
      text: "The customer service was outstanding, and the delivery was prompt. I am extremely satisfied with my purchase and highly recommend this site.",
      name: "Robin Roberts",
      image: "https://randomuser.me/api/portraits/men/16.jpg",
    },
  ];

  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            What Our Customers Are Saying
          </h2>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((testimonial) => (
            <li key={testimonial.id}>
              <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                <svg
                  aria-hidden="true"
                  width="105"
                  height="78"
                  className="absolute left-6 top-6 fill-slate-100"
                >
                  <path d="M25.086 77.292..."></path>
                </svg>
                <blockquote className="relative">
                  <p className="text-lg tracking-tight text-slate-900">
                    {testimonial.text}
                  </p>
                </blockquote>
                <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                  <div>
                    <div className="font-display text-base text-slate-900">
                      {testimonial.name}
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-full bg-slate-50">
                    <img
                      alt={testimonial.name}
                      className="h-14 w-14 object-cover"
                      src={testimonial.image}
                    />
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

export default Testimonial;
