import Image from "next/image";
import React from "react";
import style from "styled-jsx/style";

const Hero = () => {
	return (
		<header>
			<div className="lg:flex-1 relative w-full h-[40vh] justify-center z-10">
				<Image
					src="/hero.png"
					alt="character"
					fill
					className="object-contain"
				/>
			</div>
			<div className="text-center uppercase font-bold text-7xl bg-gradient-to-r from-orange-600  text-transparent bg-clip-text py-4">
				dattebayo
			</div>
		</header>
	);
};

export default Hero;
