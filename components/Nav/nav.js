// nav.js

import Link from "next/link";

const Nav = () => {
	return (
		<nav className=" flex items-center justify-between mx-4 rounded-lg bg-background dark:bg-darkbackground">
			<div className="flex space-x-4 p-2 ">
				<Link
					className="px-2 rounded-md bg-background hover: text-text dark:text-darktext dark:bg-darkbackground hover:-translate-y-1 hover:bg-secondary "
					href="/"
				>
					Home
				</Link>

				<Link
					className="px-2 rounded-md bg-background text-text dark:text-darktext dark:bg-darkbackground hover:-translate-y-1 hover:bg-secondary "
					href="/about"
				>
					About
				</Link>
				<Link
					className="px-2 rounded-md bg-background text-text dark:text-darktext dark:bg-darkbackground hover:-translate-y-1 hover:bg-secondary "
					href="/notes"
				>
					Notes
				</Link>

				<Link
					className="px-2 rounded-md bg-background  text-text dark:text-darktext dark:bg-darkbackground hover:-translate-y-1 hover:bg-secondary "
					href="/connections"
				>
					Connections
				</Link>
				<Link
					className="px-2 rounded-md bg-primary text-text dark:text-darktext dark:bg-darkprimary hover:-translate-y-1 hover:bg-secondary "
					href="/projects"
				>
					Projects
				</Link>
			</div>
		</nav>
	);
};

export default Nav;
