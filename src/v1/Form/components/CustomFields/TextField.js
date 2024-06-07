import React, { memo } from "react";

import { TextField as TextFieldMui, Grid } from "@mui/material";
import { getIn, Field } from "formik";

const TextFieldBase = ({ field, form, handleChange, handleBlur, ...rest }) => {
  const { onChange, onBlur } = field;

  return (
    <Grid item>
      <TextFieldMui
        id={field.name}
        variant="standard"
        error={Boolean(
          getIn(form.touched, field.name) && getIn(form.errors, field.name)
        )}
        helperText={
          getIn(form.touched, field.name) && getIn(form.errors, field.name)
        }
        fullWidth
        required
        {...field}
        {...rest}
        onChange={(e) => {
          onChange(e);
          handleChange && handleChange(e.target.value, field, form);
        }}
        onBlur={(e) => {
          onBlur(e);
          handleBlur && handleBlur(e.target.value, field, form);
        }}
      />
    </Grid>
  );
};

export const TextField = memo(({ tabname, name, ...rest }) => (
  <Field name={tabname + "." + name} {...rest} component={TextFieldBase} />
));

TextField.displayName = "TextField";
