import { sanityClient } from "$lib/sanity/sanityClient";
import type { CompanyListBlock } from "$lib/types/sanity/CompanyListBlock";

const globalBlockPropertyQuery = `{
  _id,
  title,
  slug,
  companies[]->{
    _id,
    name,
    website,
    logo{
      asset->{
        url
      }
    },
    description,
    role,
    timeFrom,
    timeTo
  }
}`;

export const fetchCompanyListBlock = async (slug: string): Promise<CompanyListBlock | null> => {
	const query = `*[_type == "companyListBlock" && slug.current == $slug][0] ${globalBlockPropertyQuery}`;
	const data = await sanityClient.fetch(query, { slug });
	return data ? (data as CompanyListBlock) : null;
};
