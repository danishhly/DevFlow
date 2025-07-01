import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <div className="mt-20 tracking-wide px-4">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20 font-bold text-white">
        What people are saying
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-neutral-800 rounded-2xl p-6 border border-neutral-700 text-white shadow-md hover:shadow-lg transition duration-300"
          >
            <p className="text-base mb-6">{testimonial.text}</p>

            <div className="flex items-center">
              <img
                className="w-14 h-14 mr-4 rounded-full border border-neutral-400 object-cover"
                src={testimonial.image}
                alt={testimonial.user}
              />
              <div>
                <h6 className="text-lg font-semibold">{testimonial.user}</h6>
                <span className="text-sm font-normal italic text-neutral-400">
                  {testimonial.company}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
