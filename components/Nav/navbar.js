// navbar.js

import Nav from "./nav";

const Navbar = () => {
	return (
		<header className="mx-auto flex w-full max-w-3xl flex-row-reverse items-center justify-between px-6">
			<button
				className={`w-fit right-5 top-2 p-2 rounded-md hover:scale-110 active:scale-100 duration-200 bg-slate-200 dark:bg-[#212933]`}
			>
				Boop
			</button>
			<Nav />
		</header>
	);
};

export default Navbar;
