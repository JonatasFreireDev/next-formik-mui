import React, { memo, useEffect } from "react";

import { TextField as TextFieldMui, Grid } from "@mui/material";
import { getIn } from "formik";

const TextField = ({ field, form, handleChange, handleBlur, ...rest }) => {
  const { onChange, onBlur } = field;

  useEffect(() => {
    if (form.isValidating && field.value === "") {
      form.setFieldError(field.name);
    }
  }, [form, field]);

  return (
    <Grid item>
      <TextFieldMui
        id={field.name}
        variant="standard"
        error={
          getIn(form.touched, field.name) && getIn(form.errors, field.name)
        }
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

export default memo(TextField);
