import React from "react";

function Notes() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-100 dark:bg-slate-900">
			<div className="container mx-auto px-4 py-8">
				<h1 className="text-3xl font-bold mb-4 dark:text-white">
					Recent Notes
				</h1>

				<div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
					{/* Project 1 */}
					<div className="bg-white dark:bg-slate-800 rounded shadow-md p-4"></div>

					{/* Project 2 */}
					<div className="bg-white dark:bg-slate-800 rounded shadow-md p-4"></div>

					{/* Project 3 */}
					<div className="bg-white dark:bg-slate-800 rounded shadow-md p-4"></div>
				</div>
			</div>
		</main>
	);
}

export default Notes;
