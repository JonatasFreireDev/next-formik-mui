import { memo } from "react";
import { Formik, Form as FormMik } from "formik";
import { Form } from "./Form";

export const FormWrapper = memo(({ children, ...rest }) => (
  <Formik {...rest}>
    {(props) => (
      <FormMik noValidate={true}>
        <Form formikProps={props}>{children}</Form>
      </FormMik>
    )}
  </Formik>
));

FormWrapper.displayName = "FormWrapper";
