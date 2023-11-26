"use client";

import type { CharacterJX } from "@/types";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { fetchCharacter } from "@/server/action.character";
import { useInView } from "react-intersection-observer";

let page = 2;
const LoadMore = () => {
	const { inView, ref } = useInView();
	const [characters, setCharacters] = useState<CharacterJX[]>([]);

	useEffect(() => {
		fetchCharacter(page).then((res) => {
			setCharacters([...characters, ...res]);
			page++;
		});
	}, [inView]);

	return (
		<>
			<section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
				{characters}
			</section>
			<section className="flex justify-center items-center w-full mt-8">
				<div ref={ref}>
					<Image
						src="./loading.svg"
						alt="spinner"
						width={56}
						height={56}
						className="object-contain"
					/>
				</div>
			</section>
		</>
	);
};

export default LoadMore;
