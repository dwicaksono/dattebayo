"use server";
import CharacterCard from "@/components/CharacterCard";
import type { CharacterCardProp } from "@/types";

export async function fetchCharacter(page: number) {
	const res = await fetch(
		`https://dattebayo-api.onrender.com/characters?limit=8&page=${page}`
	);

	const { characters } = await res.json();
	return characters.map(
		({ id, images, name, tools }: CharacterCardProp, idx: number) => (
			<CharacterCard
				key={id}
				images={images}
				name={name}
				tools={tools}
				index={idx}
			/>
		)
	);
}
