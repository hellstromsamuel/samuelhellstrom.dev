import type { Asset } from "./Asset";

export interface Company {
	_id: string;
	name: string;
	website: string;
	logo?: Asset;
	description: string;
}
