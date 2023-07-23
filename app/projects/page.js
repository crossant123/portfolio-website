import React from "react";

function Projects() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24 bg-background dark:bg-darkbackground">
			<div className="container mx-auto px-4 py-8">
				<h1 className="text-3xl font-bold mb-4 text-text dark:text-darktext w-60  rounded-md">
					Projects
				</h1>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
					{/* Project 1 */}
					<div>
						<div className="bg-secondary dark:bg-darksecondary rounded shadow-md p-4">
							<h2 className="text-xl font-bold mb-2 text-text dark:text-darktext">
								Netflix Website Clone
							</h2>
							<p className="text-text dark:text-darktext">
								Created a Netflix Website clone using React + Redux. The clone
								features Functional signup/login connected to Firebase's
								Firestore DB. The Project also offers some Stripe payment setup
								to test Stripe inside Firebase extensions.
							</p>
						</div>

						<button className="bg-primary dark:bg-darkprimary rounded-md mt-4 px-2 hover:-translate-y-1">
							<a href="#" className="text-text dark:text-darktext mt-1 block">
								View Project
							</a>
						</button>
					</div>

					{/* Project 2 */}
					<div id="project-2">
						<div className="bg-secondary dark:bg-darksecondary rounded shadow-md p-4">
							<h2 className="text-xl font-bold mb-2 dark:text-darktext">
								Project 2
							</h2>
							<p className="text-text dark:text-darktext">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
								ultricies nunc vel ex vulputate, eu sollicitudin eros porta.
							</p>
						</div>

						<button className="bg-primary dark:bg-darkprimary rounded-md mt-4 px-2 hover:-translate-y-1">
							<a href="#" className="text-text dark:text-darktext mt-1 block">
								View Project
							</a>
						</button>
					</div>

					{/* Project 3 */}
					<div id="project-3">
						<div className="bg-secondary dark:bg-darksecondary rounded shadow-md p-4">
							<h2 className="text-xl font-bold mb-2 dark:text-darktext">
								Project 3
							</h2>
							<p className="text-text dark:text-darktext">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
								ultricies nunc vel ex vulputate, eu sollicitudin eros porta.
							</p>
						</div>

						<button className="bg-primary dark:bg-darkprimary rounded-md mt-4 px-2 hover:-translate-y-1">
							<a href="#" className="text-text dark:text-darktext mt-1 block">
								View Project
							</a>
						</button>
					</div>

					{/* Add more projects as needed */}
				</div>
			</div>
		</main>
	);
}

export default Projects;
