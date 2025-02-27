import Card from "@/components/Card";
import { genPageMetadata } from "app/seo";
import projectsData from "@/data/booksData";

export const metadata = genPageMetadata({ title: "Books" });

export default function Books() {
	return (
		<>
			<div className="divide-y divide-gray-200 dark:divide-gray-700">
				<div className="space-y-2 pb-8 pt-6 md:space-y-5">
					<h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
						Books
					</h1>
				</div>
				<div className="container py-12">
					<div className="-m-4 flex flex-wrap">
						{projectsData.map((d) => (
							<Card
								key={d.title}
								title={d.title}
								description={d.description}
								imgSrc={d.imgSrc}
								github={d.github}
								href={d.href}
								tech1={d.tech1}
								tech2={d.tech2}
								tech3={d.tech3}
								tech4={d.tech4}
							/>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
