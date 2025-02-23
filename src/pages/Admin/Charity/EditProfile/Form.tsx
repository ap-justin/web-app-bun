import { FormHTMLAttributes } from "react";
import { Link } from "react-router-dom";
import { FV } from "./types";
import { UNSDG_NUMS } from "types/lists";
import ActivityCountries from "components/ActivityCountries";
import CountrySelector from "components/CountrySelector";
import Icon from "components/Icon";
import ImgEditor from "components/ImgEditor";
import { RichTextEditor } from "components/RichText";
import { MultiSelector, Selector } from "components/Selector";
import Toggle from "components/Toggle";
import { Tooltip } from "components/admin";
import { Field, Label } from "components/form";
import { ENDOW_DESIGNATIONS } from "constants/common";
import { appRoutes } from "constants/routes";
import { unsdgs } from "constants/unsdgs";
import Group from "./common/Group";
import { getSDGLabelValuePair } from "./getSDGLabelValuePair";
import { MAX_SIZE_IN_BYTES, VALID_MIME_TYPES } from "./schema";
import useEditProfile from "./useEditProfile";

const sdgOptions = Object.entries(unsdgs).map(([key, { title }]) =>
  getSDGLabelValuePair(key, title)
);

export default function Form({
  tooltip,
}: FormHTMLAttributes<HTMLFormElement> & { tooltip?: string }) {
  const { isSubmitting, id, type, editProfile, reset } = useEditProfile();
  return (
    <form
      onReset={(e) => {
        e.preventDefault();
        reset();
      }}
      onSubmit={editProfile}
      className="w-full max-w-4xl justify-self-center grid content-start gap-6 mt-6 font-body"
    >
      <fieldset disabled={!!tooltip} className="group contents">
        <Link
          to={`${appRoutes.marketplace}/${id}`}
          className="text-blue hover:text-orange text-sm flex items-center gap-1"
        >
          <Icon type="Back" />
          <span>Back to profile</span>
        </Link>
        {tooltip && <Tooltip tooltip={tooltip} />}
        <Toggle<FV> name="published" classes={{ container: "ml-auto text-sm" }}>
          Publish profile
        </Toggle>
        <Group
          title="Public profile information"
          description="The following information will be used to populate your public
          profile."
        >
          <Field<FV>
            classes="field-admin"
            name="name"
            label="Name of your organization"
            required
          />
          <Field<FV>
            classes="field-admin"
            name="tagline"
            label="Tagline of your organization"
            required
          />
          <Field<FV>
            classes="field-admin"
            name="registration_number"
            label="Organization’s registration number"
          />
          <Label className="-mb-4">Banner image of your organization</Label>
          <ImgEditor<FV, "image">
            name="image"
            accept={VALID_MIME_TYPES}
            aspect={[4, 1]}
            classes={{ container: "mb-4", dropzone: "w-full aspect-[4/1]" }}
          />
          <Label className="-mb-4">Logo of your organization</Label>
          <ImgEditor<FV, "logo">
            name="logo"
            accept={VALID_MIME_TYPES}
            aspect={[1, 1]}
            classes={{
              container: "mb-4",
              dropzone: "w-28 sm:w-48 aspect-square",
            }}
            maxSize={MAX_SIZE_IN_BYTES}
          />
          <Label className="-mb-4">Description of your organization</Label>
          <RichTextEditor<FV>
            fieldName="overview"
            placeHolder="A short overview of your organization"
            charLimit={4000}
            classes={{
              container:
                "rich-text-toolbar border border-prim text-sm grid grid-rows-[auto_1fr] rounded bg-gray-l6 dark:bg-blue-d5 p-3 min-h-[15rem]",
              error: "static field-error -mt-4",
              charCounter: "text-gray-d1 dark:text-gray",
            }}
          />
          <Field<FV>
            classes="field-admin"
            name="url"
            label="Website of your organization"
            placeholder="https://website.org"
          />
        </Group>

        <Group title="Organization">
          {type === "charity" && (
            <>
              <Label className="-mb-4" required>
                Aligned SDG#
              </Label>
              <MultiSelector<FV, "sdgs", UNSDG_NUMS>
                name="sdgs"
                options={sdgOptions}
                classes={{ button: "field-input-admin" }}
              />
              <Label className="-mb-4" required>
                Endowment Designation
              </Label>
              <Selector<FV, "endow_designation", string>
                name="endow_designation"
                options={ENDOW_DESIGNATIONS.map((option) => ({
                  label: option.label,
                  value: option.value,
                }))}
              />
            </>
          )}

          <Label className="-mb-4">Headquarters</Label>
          <CountrySelector<FV, "hq_country">
            placeholder="Select a country"
            fieldName="hq_country"
            classes={{
              container: "px-4 bg-gray-l6 dark:bg-blue-d5",
              input: "text-sm py-3.5",
              error: "field-error",
            }}
          />
          <Label className="-mb-4">Active countries</Label>
          <ActivityCountries<FV, "active_in_countries">
            name="active_in_countries"
            classes={{
              container: "bg-white dark:bg-blue-d6",
              button: "field-input-admin",
            }}
          />
          <Field<FV>
            classes="field-admin"
            name="street_address"
            label="Address"
          />
        </Group>

        <Group title="Social Media">
          <Field<FV>
            classes="field-admin"
            name="social_media_urls.facebook"
            label="Facebook"
            placeholder="https://facebook.com/"
          />
          <Field<FV>
            classes="field-admin"
            name="social_media_urls.linkedin"
            label="Linkedin"
            placeholder="https://linkedin.com/"
          />
          <Field<FV>
            classes="field-admin"
            name="social_media_urls.twitter"
            label="Twitter"
            placeholder="https://twitter.com/"
          />
          <Field<FV>
            classes="field-admin"
            name="social_media_urls.discord"
            label="Discord"
            placeholder="https://discord.com/"
          />
          <Field<FV>
            classes="field-admin"
            name="social_media_urls.instagram"
            label="Instagram"
            placeholder="https://instagram.com/"
          />
          <Field<FV>
            classes="field-admin"
            name="social_media_urls.youtube"
            label="YouTube"
            placeholder="https://youtube.com/"
          />
          <Field<FV>
            classes="field-admin"
            name="social_media_urls.tiktok"
            label="Tiktok"
            placeholder="https://tiktok.com/"
          />
        </Group>

        <div className="flex gap-3 group-disabled:hidden">
          <button
            disabled={isSubmitting}
            type="reset"
            className="px-6 btn-outline-filled text-sm"
          >
            Reset changes
          </button>
          <button
            disabled={isSubmitting}
            type="submit"
            className="px-6 btn-orange text-sm"
          >
            Submit changes
          </button>
        </div>
      </fieldset>
    </form>
  );
}
