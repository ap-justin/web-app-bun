import { Except } from "type-fest";
import { FV } from "./types";
import { Profile, profileIsCharity } from "services/types";
import { EndowmentProfileUpdate } from "types/aws";

type RequiredFields = Pick<EndowmentProfileUpdate, "id" | "owner">;
type Arg =
  | {
      type: "initial";
      data: Profile & RequiredFields;
    }
  | {
      type: "final";
      data: Except<FV, "id" | "owner" | "initial" | "type"> & RequiredFields;
      urls: { image: string; logo: string };
    };

export function toProfileUpdate(arg: Arg): EndowmentProfileUpdate {
  if (arg.type === "initial") {
    const { data: d } = arg;
    return {
      id: d.id,
      owner: d.owner,
      active_in_countries: d.active_in_countries ?? [],
      categories: { sdgs: d.sdgs ?? [], general: [] },
      charity_navigator_rating: "",
      contact_email: d.contact_email ?? "",
      contributor_verification_required:
        d.contributor_verification_required ?? false,
      endow_designation: profileIsCharity(d) ? d.endow_designation : "",
      hq_country: d.hq_country ?? "",
      image: d.image ?? "",
      kyc_donors_only: d.kyc_donors_only ?? false,
      logo: d.logo ?? "",
      name: d.name ?? "",
      overview: d.overview ?? "",
      program: [], //program is updated in /create-program
      program_id: "",
      published: d.published ?? false,
      registration_number: d.registration_number ?? "",
      sdgs: d.sdgs ?? [],
      social_media_urls: {
        facebook: d.social_media_urls?.facebook ?? "",
        instagram: d.social_media_urls?.instagram ?? "",
        linkedin: d.social_media_urls?.linkedin ?? "",
        twitter: d.social_media_urls?.twitter ?? "",
        discord: d.social_media_urls?.discord ?? "",
        youtube: d.social_media_urls?.youtube ?? "",
        tiktok: d.social_media_urls?.tiktok ?? "",
      },
      street_address: d.street_address ?? "",
      tagline: d.tagline ?? "",
      tier: 1,
      url: d.url ?? "",
    };
  }

  const { data: fv, urls } = arg;
  return {
    ...fv,
    program: [], //program is updated in /create-program
    image: urls.image,
    logo: urls.logo,
    hq_country: fv.hq_country.name,
    endow_designation: fv.endow_designation.value,
    sdgs: fv.sdgs.map((opt) => opt.value),
    active_in_countries: fv.active_in_countries.map((opt) => opt.value),
  };
}
