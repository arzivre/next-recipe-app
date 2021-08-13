import {
  createClient,
  createPreviewSubscriptionHook,
  createImageUrlBuilder,
  createPortableTextComponent,
} from "next-sanity";

const config = {
  projectId: "qp3mz40h",
  dataset: "production",
  apiVersion: "2021-03-25",
  useCdn: false
}

export const sanityClient = createClient(config);

export const usePreviewSubcription = createPreviewSubscriptionHook(config);

export const urlFor = (source) => createImageUrlBuilder(config).image(source);

export const PortableText = createPortableTextComponent({
  ...config,
  serializers: {}
});