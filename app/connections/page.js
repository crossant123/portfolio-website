import React from "react";

function Connections() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24 bg-background dark:bg-darkbackground">
			<div className="container mx-auto px-4 py-8">
				<h1 className="text-3xl font-bold mb-4 text-text dark:text-darktext w-60  rounded-md">
					Connections
				</h1>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
					{/* Project 1 */}
					<div className="bg-secondary dark:bg-darksecondary rounded shadow-md p-4"></div>

					{/* Project 2 */}
					<div className="bg-secondary dark:bg-darksecondary rounded shadow-md p-4"></div>

					{/* Project 3 */}
					<div className="bg-secondary dark:bg-darksecondary rounded shadow-md p-4"></div>
				</div>
			</div>
		</main>
	);
}

export default Connections;
