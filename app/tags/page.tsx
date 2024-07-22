import Link from "@/components/Link";
import Tag from "@/components/Tag";
import { genPageMetadata } from "app/seo";
import tagData from "app/tag-data.json";
import { slug } from "github-slugger";

export const metadata = genPageMetadata({
	title: "Tags",
	description: "Common topics in my blogs",
});

export default async function Page() {
	const tagCounts = tagData as Record<string, number>;
	const tagKeys = Object.keys(tagCounts);
	const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a]);
	return (
		<>
			<div className="flex flex-col items-start justify-start  dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0">
				<Link
					href="/blog"
					className="text-primary-500 text-md hover:underline sm:hidden"
				>
					Back to Blog
				</Link>
				<div className="space-x-2 pb-8 pt-6 md:space-y-5">
					<h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:border-r-2 md:px-6 md:text-6xl md:leading-14">
						Tags
					</h1>
				</div>
				<div className="flex max-w-lg flex-wrap">
					{tagKeys.length === 0 && "No tags found."}
					{sortedTags.map((t) => {
						return (
							<div key={t} className="mb-2 mr-5 mt-2">
								<Tag text={t} />
								<Link
									href={`/tags/${slug(t)}`}
									className="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300"
									aria-label={`View posts tagged ${t}`}
								>
									{` (${tagCounts[t]})`}
								</Link>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}
