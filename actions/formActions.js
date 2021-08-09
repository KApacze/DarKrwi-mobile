import { SUBMIT_FORM } from "./types";

export function submitDonorForm(form) {
  return (dispatch) =>
    dispatch({
      type: SUBMIT_FORM,
      form: form,
    });
}
