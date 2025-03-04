import { createClient } from "@sanity/client";

export const sanityClient = createClient({
	projectId: "2h23z5nc",
	dataset: "production",
	apiVersion: "2024-09-01",
	useCdn: false
});
