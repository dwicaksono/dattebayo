import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Hero from "@/components/Hero";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Dimas Wicaksono | Learning Server Action & Middleware",
	description:
		"Explore the power of server actions and middleware in this learning journey. Discover how Next.js enables server-side functionalities, enhancing your web development skills.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<main className="max-w-7xl mx-auto">
					<div
						className="absolute inset-0 bg-cover bg-center"
						style={{
							backgroundImage: `url('/poster.png')`,
							opacity: 0.05,
						}}
					/>
					<Hero />
					{children}
				</main>
			</body>
		</html>
	);
}
