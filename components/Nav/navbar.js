// navbar.js

import Nav from "./nav";

const Navbar = () => {
	return (
		<header className="mx-auto flex w-full max-w-3xl flex-row-reverse items-center justify-between px-6">
			<div>
				<p>Anthony Cross</p>
			</div>
			<Nav />
		</header>
	);
};

export default Navbar;
