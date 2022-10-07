import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import { ProfileFormValues, ProfileWithSettings } from "pages/Admin/types";
import { ProfileResponse } from "types/contracts";
import { useAdminResources } from "pages/Admin/Guard";
import { useEndowmentProfileQuery } from "services/juno/account";
import { FormError, FormSkeleton } from "components/admin";
import Form from "./Form";
import { schema } from "./schema";

export default function EditProfile() {
  const { endowmentId } = useAdminResources();
  const {
    data: profile,
    isLoading,
    isError,
  } = useEndowmentProfileQuery({ id: endowmentId });

  if (isLoading)
    return <FormSkeleton classes="max-w-4xl justify-self-center mt-6" />;
  if (isError || !profile)
    return <FormError errorMessage="Failed to load profile" />;

  return <FormWithContext {...{ ...profile, id: endowmentId }} />;
}

function FormWithContext(props: ProfileResponse & { id: number }) {
  //initialize falsy values
  const initial: Required<ProfileWithSettings> = {
    id: props.id,
    overview: props.overview,
    url: props.url || "",
    registration_number: props.registration_number || "",
    street_address: props.street_address || "",
    country_of_origin: props.country_of_origin || "",
    contact_email: props.contact_email || "",
    facebook: props.social_media_urls.facebook || "",
    twitter: props.social_media_urls.twitter || "",
    linkedin: props.social_media_urls.linkedin || "",
    number_of_employees: props.number_of_employees || 1,
    average_annual_budget: props.average_annual_budget || "",
    annual_revenue: props.annual_revenue || "",
    charity_navigator_rating: props.charity_navigator_rating || "",

    //endowment settings
    name: props.name,
    logo: { name: "", publicUrl: props.logo },
    image: { name: "", publicUrl: props.image },
    sdgNum: props.categories.sdgs[0] || 0,
  };
  const methods = useForm<ProfileFormValues>({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      ...initial,
      initial,
    },
    resolver: yupResolver(schema),
  });
  return (
    <FormProvider {...methods}>
      <Form />
    </FormProvider>
  );
}
