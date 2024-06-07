import { Grid } from "@mui/material";
import { TextField } from "../../../Form";

export const TabContent01 = () => (
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <TextField
        tabname={"tab1"}
        name="name"
        label="Name"
        handleChange={(value, field, form) => {
          form.setFieldValue("tab1.name2", value);
          form.setFieldValue("tab2.email", "jonatas@hotmail.com");
        }}
      />
    </Grid>
    <Grid item xs={12}>
      <TextField
        tabname={"tab1"}
        name="name2"
        label="Name 2"
        handleChange={(value, field, form) => {
          console.log(value, field, form);
          const { name, name2 } = form.values.tab1;
          form.setFieldValue("tab1.name3", name + name2);
        }}
      />
    </Grid>
    <Grid item xs={12}>
      <TextField tabname={"tab1"} name="name3" label="Name 3" />
    </Grid>
    {/* {formikProps.values.tab1.name && (
      <div>
        <p>Campo 1 preenchido</p>
      </div>
    )} */}
  </Grid>
);
