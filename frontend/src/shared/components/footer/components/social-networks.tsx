import { socialLinks } from "../constants/social-links";

export const SocialNetworks = () => (
    <ul className='flex gap-4 my-2'>
        {socialLinks.map(({ name, icon: Icon, link }) => (
            <li
                key={name}
                className='group bg-white border border-black/20 p-1.5 rounded-full transition-all duration-400 hover:bg-black hover:border-black '
            >
                <a
                    href={link}
                    aria-label={name}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-sm group-hover:text-white transition-all duration-400'
                >
                    <Icon />
                </a>
            </li>
        ))}
    </ul>
)
