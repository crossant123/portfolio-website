// nav.js

import Link from "next/link";

const Nav = () => {
	return (
		<nav className=" flex items-center justify-between">
			<ul className="flex space-x-4">
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/about">About</Link>
				</li>
				<li>
					<Link href="/projects">Projects</Link>
				</li>
				<li>
					<Link href="/notes">Notes</Link>
				</li>
				<li>
					<Link href="/connections">Connections</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
