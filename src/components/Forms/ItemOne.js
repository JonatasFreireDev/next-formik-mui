import React from "react";

import { Grid } from "@mui/material";
import { Field } from "formik";
import TextField from "../CustomFields/TextField";

export default function ItemOne({ form }) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Field
          name="tab1.name"
          label="Name"
          handleChange={(value, field, form) => {
            form.setFieldValue("tab1.name2", value);
            form.setFieldValue("tab2.email", "jonatas@hotmail.com");
          }}
          component={TextField}
        />
      </Grid>
      <Grid item xs={12}>
        <Field
          name="tab1.name2"
          label="Name 2"
          handleChange={(value, field, form) => {
            const { name, name2 } = form.values.tab1;
            form.setFieldValue("tab1.name3", name + name2);
          }}
          component={TextField}
        />
      </Grid>
      <Grid item xs={12}>
        <Field name="tab1.name3" label="Name 3" component={TextField} />
      </Grid>
      {form.values.tab1.name && (
        <div>
          <p>Campo 1 preenchido</p>
        </div>
      )}
    </Grid>
  );
}
