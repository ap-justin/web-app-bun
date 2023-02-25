import Icon from "@giving/components/Icon";
import { Cells } from "@giving/components/TableSection";
import { adminRoutes } from "@giving/constants/routes";
import { Link } from "react-router-dom";
import { EndowmentProposal } from "@giving/types/aws";
import { statusColors } from "../constants";

export default function AppRow(props: EndowmentProposal) {
  return (
    <Cells type="td" cellClass="px-2 py-3" key={props.PK}>
      <>{props.OrganizationName}</>
      <>{props.Email}</>
      <>{new Date(props.RegistrationDate).toDateString()}</>
      <span
        className={`${
          statusColors[props.RegistrationStatus].text
        } uppercase text-sm`}
      >
        {props.RegistrationStatus}
      </span>

      <Link
        to={`${adminRoutes.proposal}/${props.poll_id}`}
        className="uppercase text-sm hover:text-blue active:text-orange flex gap-1 items-center"
      >
        <span>Review</span>
        <Icon type="Forward" />
      </Link>
    </Cells>
  );
}
