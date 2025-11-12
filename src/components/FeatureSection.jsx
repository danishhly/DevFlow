import { features } from "../constants";

const FeatureSection = () => {
  return (
    <div className="mt-32 pb-20 border-b border-neutral-800">
        <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold">
                Easily Build Your Code
            </h2>
            <p className="mt-4 text-neutral-400 max-w-2xl mx-auto">
              Everything you need to build and deploy your applications
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
                <div key={index} className="p-6 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors">
                    <div className="w-12 h-12 rounded-lg bg-neutral-900 flex items-center justify-center text-neutral-300 mb-4">
                        {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.text}</h3>
                    <p className="text-neutral-400 leading-relaxed">
                        {feature.description}
                    </p>
                </div>
            ))}
        </div>
    </div>
  );
};

export default FeatureSection;