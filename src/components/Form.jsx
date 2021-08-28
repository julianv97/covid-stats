import React, { useContext } from "react";
import { Formik, Field, Form } from "formik";

import CountriesContext from "../context/CountriesContext";

const FormCountry = () => {
  const { handleDispatch } = useContext(CountriesContext);
  return (
    <Formik
      initialValues={{
        country: "",
        date: "",
      }}
      onSubmit={(values) => {
        handleDispatch("SET_COUNTRY", values);
      }}
    >
      <Form>
        <label htmlFor="country">Country</label>
        <Field id="country" name="country" placeholder="Country" />

        <label htmlFor="date">Date</label>
        <Field id="date" name="date" type="date" />

        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
};

export default FormCountry;
