import React from "react";

function Connections() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24 bg-background dark:bg-darkbackground">
			<div className="container mx-auto px-4 py-8">
				<h1 className="text-3xl font-bold mb-4 text-text dark:text-darktext  rounded-md">
					Connections
				</h1>

				<div className="flex flex-col md:flex-row gap-4 justify-center items-center">
					{/* Project 1 */}
					<div className="flex flex-col items-center bg-secondary dark:bg-darksecondary rounded shadow-md p-4 w-60">
						{/*  Icon*/}
						<div id="facebook-icon" className=" mx-auto pb-5">
							<i>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="128"
									height="128"
									class="bi bi-facebook fill-text dark:fill-darktext"
									viewBox="0 0 16 16"
								>
									<path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />{" "}
								</svg>
							</i>
						</div>
						{/*  Site*/}
						<div>
							<h3 className="text-text dark:text-darktext">
								Follow me on Facebook
							</h3>
						</div>

						{/*  Username*/}

						{/*  Content*/}
						<div>
							<p className="text-center text-text dark:text-darktext">
								I mostly post PC parts and project updates
							</p>
						</div>

						{/* Link*/}
						<button className="bg-primary dark:bg-darkprimary rounded-md mt-4 px-2 hover:-translate-y-1">
							<a
								href="https://www.facebook.com/marketplace/profile/100001435333007"
								target="_blank"
								className="text-text dark:text-darktext hover:text-blue-700 mt-1 block"
							>
								Visit
							</a>
						</button>
					</div>

					{/* Project 2 */}
					<div className="flex flex-col items-center bg-secondary dark:bg-darksecondary rounded shadow-md p-4 w-60">
						{/*  Icon*/}
						<div id="threads-icon" className=" mx-auto pb-5">
							<i>
								<svg
									aria-label="Threads"
									viewBox="0 0 192 192"
									xmlns="http://www.w3.org/2000/svg"
									class=" w-32 h-h32 stroke-text fill-text dark:stroke-darktext dark:fill-darktext"
								>
									<path
										class="x19hqcy"
										d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z"
										id="mainIconPathAttribute"
									></path>
								</svg>
							</i>
						</div>
						{/*  Site*/}
						<div>
							<h3 className="text-text dark:text-darktext">
								Follow me on Threads
							</h3>
						</div>

						{/*  Username*/}

						{/*  Content*/}
						<div>
							<p className="text-center text-text dark:text-darktext">
								I post life updates and project ideas here
							</p>
						</div>

						{/* Link*/}
						<button className="bg-primary dark:bg-darkprimary rounded-md mt-4 px-2 hover:-translate-y-1">
							<a
								href="https://www.threads.net/@crossant_official"
								target="_blank"
								className="text-text dark:text-darktext hover:text-blue-700 mt-1 block"
							>
								Visit
							</a>
						</button>
					</div>

					{/* Project 3 */}
					<div className="flex flex-col items-center bg-secondary dark:bg-darksecondary rounded shadow-md p-4 w-60">
						{/*  Icon*/}
						<div id="email-icon" className=" mx-auto pb-5">
							<i>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									class=" w-32 h-h32 stroke-text dark:stroke-darktext"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
									/>
								</svg>
							</i>
						</div>

						{/*  Site*/}
						<div>
							<h3 className="text-text dark:text-darktext">
								Email me for inquery
							</h3>
						</div>

						{/*  Username*/}

						{/*  Content*/}
						<div>
							<p className="text-center text-text dark:text-darktext">
								This email is for business and opportunity
							</p>
						</div>

						{/* Link*/}
						<button className="bg-primary dark:bg-darkprimary rounded-md mt-4 px-2 hover:-translate-y-1">
							<a
								href="mailto: crossant123@gmail.com"
								className="text-text dark:text-darktext hover:text-blue-700 mt-1 block"
							>
								Email Me Directly
							</a>
						</button>
					</div>
				</div>
			</div>
		</main>
	);
}

export default Connections;
