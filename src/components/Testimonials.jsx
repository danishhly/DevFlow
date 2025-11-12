import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <div className="mt-32">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-4">
          What people are saying
        </h2>
        <p className="text-neutral-400 max-w-2xl mx-auto">
          See what our users have to say about DevFlow
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="p-6 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors"
          >
            <p className="text-neutral-300 mb-6 leading-relaxed">
              "{testimonial.text}"
            </p>
            <div className="flex items-center">
              <img
                className="w-12 h-12 rounded-full object-cover mr-3"
                src={testimonial.image}
                alt={testimonial.user}
              />
              <div>
                <h6 className="font-semibold">{testimonial.user}</h6>
                <span className="text-sm text-neutral-400">
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
