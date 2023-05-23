export default function ContactWays({href, email, title, icon, target, link, phone}) {
    return (
        <article
            className="flex items-center justify-center md:justify-start rounded-full border-y border-r border-primary bg-gradient-to-r from-primary via-gray-900
               to-primary text-center shadow-xl duration-300 hover:bg-gradient-to-r hover:from-gray-900 hover:to-gray-900"
        >
            <a
                className="rounded-full border border-black bg-primary p-2 lg:p-3 m-2 text-white hover:border hover:border-white"
                href={href}
                target={target}
                rel="noreferrer"
            >
                {icon}
            </a>
            <div className="hidden md:flex w-2/3 md:w-3/4 flex-col text-white">
                <h4 className="px-2 font-semibold uppercase">{title}</h4>
                {email && <div>
                    <a href={href} className="px-2 font-medium text-sm">{email}</a>
                </div>}
                {link && <div>
                    <a href={href} target='_blank' className="px-2 font-medium text-sm">{link}</a>
                </div>}
                {phone && <div>
                    <a href={href} target='_blank' className="px-2 font-medium text-sm">{phone}</a>
                </div>}
            </div>
        </article>
    );
}
