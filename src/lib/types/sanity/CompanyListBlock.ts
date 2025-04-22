import type { Company } from "./Company";

export interface CompanyListBlock {
	_id: string;
	title: string;
	companies: Company[];
}
