import { Field, Form, Formik } from 'formik';
import React from 'react';

export default function UserForm() {
  return (
    <div>
      <Formik initialValues={{ hue: '', luminosity: '' }} onSubmit={() => {}}>
        <Form>
          <Field name="hue" type="text" />
          <Field name="luminosity" type="select">
            {/* <option value="dark">dark</option>
            <option value="light">light</option>
            <option value="bright">bright</option> */}
          </Field>
          <button>Submit</button>
        </Form>
      </Formik>
    </div>
  );
}
