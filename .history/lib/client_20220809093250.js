import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "p5kmnlkh",
  dataset: "production",
  apiVersion: "2022-08-08",
  useCdn: true,
  token:
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
