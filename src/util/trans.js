import { FormattedMessage } from "react-intl";

export default function trans(id, values = null) {
  return <FormattedMessage id={id} values={values} />;
}
