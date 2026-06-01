export default function Home() {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-[16px] row-start-2 items-center sm:items-start">
				<h1 className="text-4xl font-bold font-[family-name:var(--font-geist-mono)]">
					MELCARIUM
				</h1>

				<p className="text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
					The privacy-first internet infrastructure layer that generates high-fidelity network intelligence is under construction.
				</p>

			</main>
		</div>
	);
}
