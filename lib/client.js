import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "p5kmnlkh",
  dataset: "production",
  apiVersion: "2022-08-08",
  useCdn: true,
  token:
    "sk82Xv2HLg7i27Tb7Qkrj2dxvG7sCFp79vOMU0xKmrKK0IFfeF6K9dXiMacJRERv9uUCd9b7mlsUL292Pa0v2CN2aZvHOZGzfGthzwGhFBOq9qS7mPxQlt6HUCvHfHEwIDdeGExMsl9dRVA77I2ErBRvu78OfI1jBSUZKDNY7WnarVw2abnG",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
