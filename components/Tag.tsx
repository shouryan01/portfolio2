import { slug } from "github-slugger";
import Link from "next/link";
interface Props {
	text: string;
}

const Tag = ({ text }: Props) => {
	return (
		<Link
			href={`/tags/${slug(text)}`}
			className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 hover:underline"
		>
			#{text.split(" ").join("-")}
		</Link>
	);
};

export default Tag;
