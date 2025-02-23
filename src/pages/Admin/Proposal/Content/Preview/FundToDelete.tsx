import { ID } from "types/tx";
import KeyValue from "./common/KeyValue";
import PreviewContainer from "./common/PreviewContainer";

export default function FundToDelete({ id }: ID) {
  return (
    <PreviewContainer>
      <KeyValue _key="fund id">{id}</KeyValue>
    </PreviewContainer>
  );
}
