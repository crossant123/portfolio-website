import React from "react";

function about() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24 bg-background dark:bg-darkbackground">
			<div className="container mx-auto px-4 py-8">
				<h1 className="text-3xl font-bold mb-4 text-text dark:text-darktext w-60  rounded-md">
					About Me
				</h1>
				<p className=" text-sm italic text-text dark:text-darktext">
					This section displays a short description of my education,
					qualifications, and experiences.
				</p>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
					{/* Project 1 */}
					<div
						className="bg-secondary dark:bg-darksecondary rounded shadow-md p-4"
						id="timeline-container"
					>
						<div id="timeline-header">
							{/* Think into adding icon next to header */}
							<h2 className=" text-lg font-semibold text-black dark:text-gray-400">
								Education:
							</h2>
							{/* Add date */}
						</div>
						<div className=" m-2" id="timeline-content">
							{/* Add seperator details / design overarching timeline dots */}
							<h3 className=" text-md font-medium mb-1">Bachelor's Degree:</h3>
							<p>
								-I have a bachelor's degree in Computer Information Systems from
								Davenport University.
								<br />
								-I studied programming fundamentals and learned multiple coding
								languages throughout my four-year degree.
								<br />
								-I worked with C# and the .Net Framework to create academic
								projects, such as Working store pages and APIs.
								<br />
								-I Learned HTML and CSS to create beautiful websites and studied
								local large companies website designs to imitate and replicate.
								<br />
								-Throughout University, I learned how to use 4 core languages
								<span> (C#, HTML/CSS, Java, SQL).</span>
								<br />
								-However, through Internship I learned Javascript and more
								Modern SQL practices and Alternatives.
							</p>
						</div>
					</div>

					{/* Project 2 */}
					<div
						className="bg-secondary dark:bg-darksecondary rounded shadow-md p-4"
						id="timeline-container"
					>
						<div id="timeline-header">
							{/* Think into adding icon next to header */}
							<h2 className=" text-2x1 font-semibold mb-4 text-black dark:text-gray-400">
								Early Upbringing:
							</h2>
							{/* Add date */}
						</div>
						<div className=" mb-2" id="timeline-content">
							{/* Add seperator details / design overarching timeline dots */}
							<h3 className=" text-md font-medium mb-1">Highschool Diploma:</h3>
							<p>
								-I grew up with my Father in Allendale, Michigan. I graduated
								highschool from Allendale Public Schools in 2018
							</p>
						</div>
					</div>

					{/* Project 3 */}
					<div
						className="bg-secondary dark:bg-darksecondary rounded shadow-md p-4"
						id="timeline-container"
					>
						<div id="timeline-header">
							{/* Think into adding icon next to header */}
							<h2 className=" text-2x1 font-semibold mb-4 text-black dark:text-gray-400"></h2>
							{/* Add date */}
						</div>
						<div className=" mb-2" id="timeline-content">
							{/* Add seperator details / design overarching timeline dots */}
							<h3 className=" text-md font-medium mb-1"></h3>
							<p></p>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}

export default about;
