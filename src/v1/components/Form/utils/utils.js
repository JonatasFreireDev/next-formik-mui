export const initialValues = {
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

export const onSubmit = (values, actions, ...rest) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
  }, 500);

  actions.resetForm();
};
