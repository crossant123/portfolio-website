// nav.js

import Link from "next/link";

const Nav = () => {
	return (
		<nav className=" flex items-center justify-between mx-4 ">
			<ul className="flex space-x-4 p-2 rounded-lg bg-slate-100 dark:bg-[#212933] text-black dark:text-white">
				<li className="hover:bg-gray-400 dark:hover:bg-[#3a4858]">
					<Link href="/">Home</Link>
				</li>
				<li className="hover:bg-gray-400 dark:hover:bg-[#3a4858]">
					<Link href="/about">About</Link>
				</li>
				<li className="hover:bg-gray-400 dark:hover:bg-[#3a4858]">
					<Link href="/projects">Projects</Link>
				</li>
				<li className="hover:bg-gray-400 dark:hover:bg-[#3a4858]">
					<Link href="/notes">Notes</Link>
				</li>
				<li className="hover:bg-gray-400 dark:hover:bg-[#3a4858]">
					<Link href="/connections">Connections</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
