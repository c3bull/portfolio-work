export default function ContactWays({href, name, title, icon, name2, target, link}) {
    return (
        <article
            className="flex items-center rounded-full border-y border-r border-primary bg-gradient-to-r from-primary via-gray-900
               to-primary text-center shadow-xl duration-300 hover:bg-gradient-to-r hover:from-gray-900 hover:to-gray-900"
        >
            <a
                className="rounded-full border border-black bg-primary p-5 m-2 text-white hover:border hover:border-white"
                href={href}
                target={target}
                rel="noreferrer"
            >
                {icon}
            </a>
            <div className="flex w-4/5 flex-col text-white">
                <h4 className="px-2 font-semibold uppercase">{title}</h4>
                <h5 className="px-2 font-medium">{name}</h5>
                <h5 className="px-2 font-medium">{name2}</h5>
                {link && <div>
                    <a href={link} target='_blank' className="px-2 font-medium">{link}</a>
                </div>}
            </div>
        </article>
    );
}
