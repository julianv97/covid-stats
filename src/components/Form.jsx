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
      <Form className="pt-4 text-gray-900">
        <label htmlFor="country " className="font-bold pr-2">
          Country
        </label>
        <Field
          id="country"
          name="country"
          placeholder="Country"
          className="bg-gray-300 rounded-xl h-6 pl-2"
        />

        <label htmlFor="date " className="font-bold pl-1 pr-2">
          Date
        </label>
        <Field
          id="date"
          name="date"
          type="date"
          className="bg-gray-300 rounded-xl h-6 pl-2"
        />

        <button type="submit " className="font-bold pl-1 hover:text-brown">
          Search
        </button>
      </Form>
    </Formik>
  );
};

export default FormCountry;
