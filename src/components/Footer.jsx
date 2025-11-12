import {resourcesLinks, platformLinks, communityLinks} from "../constants";

const Footer = () => {
  return (
    <footer className="mt-32 border-t border-neutral-800 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-8">
            <div>
                <h3 className="text-sm font-semibold mb-4 text-neutral-300">Resources</h3>
                <ul className="space-y-3">
                    {resourcesLinks.map((link, index) => (
                        <li key={index}>
                            <a className="text-sm text-neutral-400 hover:text-white transition-colors"
                               href={link.href}>
                                {link.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h3 className="text-sm font-semibold mb-4 text-neutral-300">Platforms</h3>
                <ul className="space-y-3">
                    {platformLinks.map((link, index) => (
                        <li key={index}>
                            <a className="text-sm text-neutral-400 hover:text-white transition-colors"
                               href={link.href}>
                                {link.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h3 className="text-sm font-semibold mb-4 text-neutral-300">Community</h3>
                <ul className="space-y-3">
                    {communityLinks.map((link, index) => (
                        <li key={index}>
                            <a className="text-sm text-neutral-400 hover:text-white transition-colors"
                               href={link.href}>
                                {link.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        <div className="pt-8 border-t border-neutral-800 text-center text-sm text-neutral-500">
            <p>© 2024 DevFlow. All rights reserved.</p>
        </div>
    </footer>
  )
};

export default Footer;
