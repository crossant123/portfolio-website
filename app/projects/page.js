import React from "react";

function Projects() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-100 dark:bg-slate-900">
			<div className="container mx-auto px-4 py-8">
				<h1 className="text-3xl font-bold mb-4 dark:text-white">Projects</h1>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					{/* Project 1 */}
					<div className="bg-white dark:bg-slate-800 rounded shadow-md p-4">
						<h2 className="text-xl font-bold mb-2 dark:text-white">
							Netflix Website Clone
						</h2>
						<p className="text-gray-600 dark:text-gray-100">
							Created a Netflix Website clone using React + Redux. The clone
							features Functional signup/login connected to Firebase's Firestore
							DB. The Project also offers some Stripe payment setup to test
							Stripe inside Firebase extensions.
						</p>
						<a
							href="#"
							className="text-blue-500 hover:text-blue-700 mt-2 block"
						>
							View Project
						</a>
					</div>

					{/* Project 2 */}
					<div className="bg-white dark:bg-slate-800 rounded shadow-md p-4">
						<h2 className="text-xl font-bold mb-2 dark:text-white">
							Project 2
						</h2>
						<p className="text-gray-600 dark:text-gray-100">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
							ultricies nunc vel ex vulputate, eu sollicitudin eros porta.
						</p>
						<a
							href="#"
							className="text-blue-500 hover:text-blue-700 mt-2 block"
						>
							View Project
						</a>
					</div>

					{/* Project 3 */}
					<div className="bg-white dark:bg-slate-800 rounded shadow-md p-4">
						<h2 className="text-xl font-bold mb-2 dark:text-white">
							Project 3
						</h2>
						<p className="text-gray-600 dark:text-gray-100">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
							ultricies nunc vel ex vulputate, eu sollicitudin eros porta.
						</p>
						<a
							href="#"
							className="text-blue-500 hover:text-blue-700 mt-2 block"
						>
							View Project
						</a>
					</div>

					{/* Add more projects as needed */}
				</div>
			</div>
		</main>
	);
}

export default Projects;
