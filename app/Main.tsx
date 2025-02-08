"use client";

import { AttentionSeeker, Fade } from "react-awesome-reveal";

import Link from "next/link";
import NewsletterForm from "pliny/ui/NewsletterForm";
import Snowfall from "react-snowfall";
import Tag from "@/components/Tag";
import { formatDate } from "pliny/utils/formatDate";
import siteMetadata from "@/data/siteMetadata";

const MAX_DISPLAY = 5;

export default function Home({ posts }) {
	return (
		<>
			<Snowfall color="#c4c3be" />
			<div className="fade-in banner my-40 flex flex-1 flex-col justify-center px-6 dark:text-white lg:px-10">
				<h1 className="font-bold dark:text-white text-5xl">
					<AttentionSeeker effect={"tada"}>Shouryan Nikam</AttentionSeeker>
				</h1>
				<Fade cascade damping={0.5} delay={1000}>
					<p>Check out...</p>
					<p className="ml-20">
						the{" "}
						<Link
							target="_blank"
							href="https://app.thestorygraph.com/profile/shouryannikam"
							className="text-primary-500 hover:underline"
						>
							books
						</Link>{" "}
						I'm reading...
					</p>
					<p className="ml-20">
						the{" "}
						<Link href="/quotes" className="text-primary-500 hover:underline">
							quotes
						</Link>{" "}
						I enjoy...
					</p>
					<p className="mt-4">Or the other stuff you see in the menu above!</p>
				</Fade>
			</div>
			{/* {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )} */}
		</>
	);
}
