import LoadMore from "@/components/LoadMore";
import { fetchCharacter } from "@/server/action.character";

export default async function Home() {
	const data = await fetchCharacter(1);
	return (
		<main className="flex justify-center item-center flex-col py-6 gap-10">
			<section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
				{data}
			</section>
			<LoadMore />
		</main>
	);
}
