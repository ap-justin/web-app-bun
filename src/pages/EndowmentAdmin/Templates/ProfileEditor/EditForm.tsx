import { UpdateProfileValues as UV } from "pages/EndowmentAdmin/types";
import Submitter from "pages/Admin/Templates/Submitter";
import Label from "pages/Admin/components/Label";
import {
  FormContainer,
  GroupContainer,
} from "pages/Admin/components/TemplateContainer";
import TextInput from "pages/Admin/components/TextInput";
import CountrySelector from "components/CountrySelector/CountrySelector";
import RichTextEditor from "components/RichTextEditor";
import ImgEditor from "./ImgEditor/ImgEditor";
import SDGSelector from "./SDGSelector";
import useEditForm from "./useEditProfile";

export default function EditForm() {
  const { editProfile, isSubmitDisabled } = useEditForm();
  return (
    <FormContainer onSubmit={editProfile}>
      <TextInput<UV> title="Proposal Title" name="title" required />
      <TextInput<UV>
        title="proposal description"
        name="description"
        wide
        required
      />
      <Label className="text-angel-grey -mb-2">Banner</Label>
      <ImgEditor />
      <Label className="text-angel-grey -mb-2">SDG#</Label>
      <SDGSelector />
      <TextInput<UV>
        name="name"
        title="Charity Name"
        placeholder="The charitable charity"
      />
      <TextInput<UV>
        name="registration_number"
        title="Registration number"
        placeholder="AP2022HLO"
      />
      <TextInput<UV>
        name="street_address"
        title="Street address"
        placeholder="Manila, Philippines"
      />
      <Label className="text-angel-grey -mb-2">Country</Label>
      <CountrySelector<UV> fieldName="country_of_origin" classes="mb-6 z-10" />
      <Label className="text-angel-grey -mb-2">Overview</Label>
      <RichTextEditor<UV>
        fieldName="overview"
        classes={{
          container: "p-3 rounded-md bg-light-grey shadow-inner-white-grey",
          error:
            "font-mono font-semibold text-right text-red-400 text-xs m-1 -mt-3",
        }}
      />

      <Label className="text-angel-grey -mb-2">Organization</Label>
      <GroupContainer>
        <TextInput<UV>
          name="average_annual_budget"
          title="Annual budget"
          placeholder="$100,000"
          plain
        />
        <TextInput<UV>
          name="annual_revenue"
          title="Annual revenue"
          placeholder="$120,000"
          plain
        />
        <TextInput<UV>
          name="number_of_employees"
          title="Number of employeees"
          placeholder="50 - 100"
          plain
        />
      </GroupContainer>

      <Label className="text-angel-grey -mb-2">Social Media</Label>
      <GroupContainer>
        <TextInput<UV>
          name="url"
          title="Website"
          placeholder="https://website.org"
          plain
        />
        <TextInput<UV>
          name="facebook"
          title="Facebook"
          placeholder="https://facebook.com/angelprotocol"
          plain
        />
        <TextInput<UV>
          name="twitter"
          title="Twitter"
          placeholder="https://twitter.com/angelprotocol"
          plain
        />
        <TextInput<UV>
          name="linkedin"
          title="Linkedin"
          placeholder="https://linkedin.com/angelprotocol"
          plain
        />
      </GroupContainer>

      <TextInput<UV>
        name="contact_email"
        title="Contact email"
        placeholder="hello@angelprotocol.io"
      />
      <Submitter disabled={isSubmitDisabled} type="submit">
        Submit proposal
      </Submitter>
    </FormContainer>
  );
}
