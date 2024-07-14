import { genPageMetadata } from "app/seo";
import { quotes } from "@/data/quotesData";

export const metadata = genPageMetadata({
	title: "Quotes",
	description: "Quotes I like to think about",
});

export default function Quotes() {
	return (
		<>
			<div className="mx-auto max-w-2xl">
				<div className="space-y-2 pt-6 pb-8 md:space-y-5">
					<h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
						Quotes
					</h1>
					<p className="text-md leading-7 text-gray-500 dark:text-gray-400">
						Here is a collection of my favorite quotes. I hope you find them as
						interesting as I do.
					</p>
				</div>
				<div className="mt-6 flex flex-col gap-y-14">
					{quotes.map((item) => (
						<li
							key={item.quote}
							className="flex cursor-default flex-col duration-150 hover:scale-105"
						>
							<blockquote className="rounded-md bg-gray-200 p-6 dark:bg-gray-800">
								<div className="text-md relative md:flex-grow">
									<svg
										className="absolute top-0 left-0 h-8 w-8 -translate-x-9 -translate-y-9 transform text-gray-500 dark:text-gray-300"
										fill="currentColor"
										viewBox="0 0 32 32"
										aria-hidden="true"
									>
										<path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
									</svg>
									<p className="relative text-neutral-700 dark:text-neutral-200">
										{item.quote}
									</p>
								</div>

								<footer className="mt-1">
									<p className="text-sm text-neutral-500 dark:text-neutral-500">
										- {item.author}
									</p>
								</footer>
							</blockquote>
						</li>
					))}
				</div>
			</div>
		</>
	);
}
