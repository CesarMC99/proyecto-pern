import { infoColumnsLinks } from "../constants/info-columns-links";

export const InfoColumnsLinks = () => (
  // <div className='sm:m-auto'>
  <div
    className="grid grid-cols-2 gap-4 
                sm:grid-cols-4 sm:gap-1
                md:flex md:justify-between
                lg:w-full lg:gap-10"
  >
    {infoColumnsLinks.map(({ title, links }) => (
      <div key={title}>
        <h3 className="mb-2 font-medium tracking-[0.2em] text-sm">{title}</h3>
        <ul className="flex flex-col gap-2">
          {links.map(({ name, link }) => (
            <li key={name}>
              <a
                href={link}
                target="_blank"
                className="text-sm text-black/60"
                rel="noreferrer"
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
  // </div>
);
