import { Form } from "../../v1/Form";
import { Tab } from "../../v1/Form/components/Tabs/Tab";
import {
  TabContent01,
  TabContent02,
  TabContent03,
  initialValues,
  onSubmit,
  validationSchema,
} from "../../v1/components/Form";

export default function Home() {
  return (
    <Form
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Tab name="tab1">
        <TabContent01 />
      </Tab>
      <Tab name="tab2">
        <TabContent02 />
      </Tab>
      <Tab name="tab3">
        <TabContent03 />
      </Tab>
    </Form>
  );
}
