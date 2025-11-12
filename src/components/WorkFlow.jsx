import { CheckCircle2 } from "lucide-react";
import { checklistItems } from "../constants";
import codeimg from "../assets/code.jpg";

const WorkFlow = () => {
  return (
    <div className="mt-32">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl text-center font-semibold mb-4">
            Accelerate your coding workflow
        </h2>
        <p className="text-center text-neutral-400 mb-16 max-w-2xl mx-auto">
          Streamline your development process with powerful tools
        </p>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
                <img src={codeimg} alt="code" className="rounded-xl border border-neutral-800"/>
            </div>
            <div className="order-1 lg:order-2 space-y-8">
                {checklistItems.map((item, index) => (
                    <div key={index} className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-neutral-900 flex items-center justify-center text-green-400">
                            <CheckCircle2 size={20} />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-neutral-400 leading-relaxed">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
};

export default WorkFlow;
