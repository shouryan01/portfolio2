import headerNavLinks from "@/data/headerNavLinks";
import siteMetadata from "@/data/siteMetadata";
import Image from "next/image";
import Link from "./Link";
import MobileNav from "./MobileNav";
import ThemeSwitch from "./ThemeSwitch";

const Header = () => {
	return (
		<header className="flex items-center justify-between py-10">
			<div>
				<Link href="/" aria-label={siteMetadata.headerTitle}>
					<div className="flex items-center justify-between">
						{/* <div className="mr-3">
							<Image
								src="/static/images/logo.png"
								width={40}
								height={40}
								alt="Site Logo"
							/>
						</div> */}
						{typeof siteMetadata.headerTitle === "string" ? (
							<div className="block h-6 text-2xl font-semibold hover:scale-125 duration-150 hover:text-emerald-500">
								{siteMetadata.headerTitle}
							</div>
						) : (
							siteMetadata.headerTitle
						)}
					</div>
				</Link>
			</div>
			<div className="flex items-center leading-5 space-x-4 sm:space-x-6">
				<div className="hidden sm:block">
					{headerNavLinks
						.filter((link) => link.href !== "/")
						.map((link) => (
							<Link
								key={link.title}
								href={link.href}
								className="rounded-xl p-1 sm:p-4 hover:bg-gray-200 dark:hover:bg-gray-800 font-medium text-gray-900 dark:text-gray-100"
							>
								{link.title}
							</Link>
						))}
				</div>
				{/* <SearchButton /> */}
				<ThemeSwitch />
				<MobileNav />
			</div>
		</header>
	);
};

export default Header;
