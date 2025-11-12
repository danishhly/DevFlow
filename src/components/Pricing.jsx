import {pricingOptions} from "../constants";
import { CheckCircle2 } from "lucide-react";

const Pricing = () => {
  return (
    <div className="mt-32">
        <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-4">
                Pricing
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Choose the plan that works best for you
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pricingOptions.map((option, index) => (
                <div key={index} className={`p-8 rounded-xl border ${option.title === "Pro" ? "border-neutral-700 bg-neutral-900/50" : "border-neutral-800"}`}>
                    <div className="mb-6">
                        <h3 className="text-2xl font-semibold mb-2">
                            {option.title}
                            {option.title === "Pro" && (
                                <span className="ml-2 text-sm text-neutral-400 font-normal">
                                    (Most Popular)
                                </span>
                            )}
                        </h3>
                        <div className="mt-4">
                            <span className="text-4xl font-semibold">{option.price}</span>
                            <span className="text-neutral-400 ml-2">/Month</span>
                        </div>
                    </div>
                    <ul className="space-y-3 mb-8">
                        {option.features.map((feature, index) => (
                            <li key={index} className="flex items-center text-neutral-300">
                                <CheckCircle2 size={18} className="mr-3 text-green-400 flex-shrink-0" />
                                <span className="text-sm">{feature}</span>
                            </li>
                        ))}
                    </ul>
                    <a href="#" className={`block w-full text-center py-3 rounded-lg font-medium transition-colors ${
                        option.title === "Pro" 
                            ? "bg-white text-black hover:bg-neutral-200" 
                            : "border border-neutral-700 hover:border-neutral-600"
                    }`}>
                        Subscribe
                    </a>
                </div>
            ))}
        </div>
    </div>
  )
};

export default Pricing;
