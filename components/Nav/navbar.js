import Nav from "./nav";
import Themebutton from "./themebutton";

const Navbar = () => {
	return (
		<div className="flex flex-row-reverse items-center justify-center rounded-lg">
			<Themebutton />
			<Nav />
		</div>
	);
};

export default Navbar;
