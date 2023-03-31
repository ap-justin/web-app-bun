import { UpdateEndowmentControllerMsg } from "types/contracts";
import { contracts } from "constants/contracts";
import Contract from "./Contract";

export default class SettingsController extends Contract {
  private static address = contracts["accounts/settings"];

  createEmbeddedUpdateEndowmentControllerMsg(
    payload: UpdateEndowmentControllerMsg
  ) {
    return this.createEmbeddedWasmMsg(SettingsController.address, {
      update_endowment_controller: payload,
    });
  }

  createUpdateEndowmentControllerMsg(payload: UpdateEndowmentControllerMsg) {
    return this.createExecuteContractMsg(SettingsController.address, {
      update_endowment_controller: payload,
    });
  }
}
