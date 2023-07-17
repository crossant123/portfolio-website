// nav.js

import Link from "next/link";

const Nav = () => {
	return (
		<nav className=" flex items-center justify-between mx-4 rounded-lg bg-slate-200 dark:bg-slate-700">
			<ul className="flex space-x-4 p-2 ">
				<li className="py-1 px-1 rounded-md text-slate-400 hover:underline active:bg-slate-500">
					<Link href="/">Home</Link>
				</li>
				<li className="py-1 px-1 rounded-md text-slate-400 hover:underline active:bg-slate-500">
					<Link href="/about">About</Link>
				</li>
				<li className="py-1 px-1 rounded-md text-slate-400 hover:underline active:bg-slate-500">
					<Link href="/projects">Projects</Link>
				</li>
				<li className="py-1 px-1 rounded-md text-slate-400 hover:underline active:bg-slate-500">
					<Link href="/notes">Notes</Link>
				</li>
				<li className="py-1 px-1 rounded-md text-slate-400 hover:underline active:bg-slate-500">
					<Link href="/connections">Connections</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
