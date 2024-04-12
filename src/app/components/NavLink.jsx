import Link from "next/link";

const NavLink = ({ href, title, onClick }) => {
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    return (
        <a onClick={handleClick} href={href} className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">
            {title}
        </a>
    );
};

export default NavLink;