import { Formik, Form, Field } from "formik";
import ItemOne from "../../v1/components/Forms/ItemOne";
import BasicTabs from "../../v1/components/Tabs/BasicTabs";
import { validationSchema } from "../../v1/validations/login";
import TextField from "../../v1/components/CustomFields/TextField";

const tabs = (formikProps) => [
  {
    label: "tab1",
    component: <ItemOne form={formikProps} />,
  },
  {
    label: "tab2",
    component: <Field name="tab2.email" label="email" component={TextField} />,
  },
  {
    label: "tab3",
    component: (
      <Field name="tab3.password" label="Password" component={TextField} />
    ),
  },
];

const initialValues = {
  tab1: {
    name: "",
    name2: "",
    name3: "",
  },
  tab2: {
    email: "",
  },
  tab3: {
    password: "",
  },
};

const onSubmit = (values, actions, ...rest) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
  }, 500);

  actions.resetForm();
};

export default function Home() {
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        render={(formikProps) => (
          <Form noValidate={true}>
            <BasicTabs tabs={tabs(formikProps)} formikProps={formikProps} />
            <button type="submit">submit</button>
          </Form>
        )}
      ></Formik>
    </div>
  );
}
