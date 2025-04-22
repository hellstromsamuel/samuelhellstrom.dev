import type { Asset } from "./Asset";

export interface Company {
	_id: string;
	name: string;
	website: string;
	logo?: Asset;
	role: string;
	timeFrom: string;
	timeTo: string;
	description: string;
}
