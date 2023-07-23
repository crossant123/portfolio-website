import Navbar from "@/components/Nav/navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Anthony Cross | Portfolio",
	description: "Portfolio by Anthony Cross. Website uses Next.js 13.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className="light" style={{ colorScheme: "light" }}>
			<body className={inter.className} suppressHydrationWarning={true}>
				<Providers>
					<header className="py-6 bg-background dark:bg-darkbackground">
						<Navbar />
					</header>
					<main>{children}</main>
					<footer></footer>
				</Providers>
			</body>
		</html>
	);
}
