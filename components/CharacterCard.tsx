"use client";
import type { CharacterCardProp } from "@/types";
import Image from "next/image";
import React from "react";
import { MotionCard } from "./MotionCard";

const variants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
};
const CharacterCard: React.FC<CharacterCardProp> = ({
	images,
	name,
	tools,
	index,
}) => {
	return (
		<MotionCard
			variants={variants}
			initial="hidden"
			animate="visible"
			transition={{
				delay: index * 0.1,
				ease: "easeInOut",
				duration: 0.2,
			}}
			viewport={{ amount: 0 }}
			className="rounded-lg shadow-lg overflow-hidden z-10 w-56 ">
			<div className="flex h-64 w-auto relative rounded-lg overflow-hidden">
				<Image
					alt="character-pic"
					src={images[0]}
					fill
					className="object-cover"
				/>
			</div>
			<div className="text-center my-3 text-lg font-semibold ">{name}</div>
			<div className="flex flex-wrap  ">
				{tools?.map((item: string, idx) => (
					<p className="text-xs" key={idx}>
						{item}
					</p>
				))}
			</div>
		</MotionCard>
	);
};

export default CharacterCard;
