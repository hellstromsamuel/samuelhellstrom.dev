import type { Image } from "lucide-svelte";
import type { Company } from "./Company";
import type { Keyword } from "./Keyword";
import type { Slug } from "./Slug";
import type { Asset } from "./Asset";

export interface Project {
	_id: string;
	name: string;
	slug: Slug;
	role: string;
	description: string;
	keywords: Keyword[];
	link?: string;
	company?: Company;
	image?: Asset;
	fromDate?: string;
	toDate?: string;
	highlight: boolean;
}
