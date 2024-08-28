import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { fieldClass, labelClass, wrapperClass } from "./styles";
import Button from "../Button";

interface FormField extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: string;
  label: string;
  initialValue: string | number;
  placeholder?: string;
  validate?: (val: any) => boolean;
}

type FieldGroup = {
  groupName: string;
  fields?: FormField[];
  subgroup?: FieldGroup;
}[];

interface FormBuilderProps {
  // fields: FormField[];
  fields: FieldGroup;
  onSubmit: () => void;
  title: string;
}

export const FormBuilder: React.FC<FormBuilderProps> = (
  props
): React.ReactElement => {
  let initialValues = {} as { [k: string]: string | number };
  props.fields.forEach((field) => {
    initialValues[field.name] = field.initialValue;
  });

  return (
    <Formik initialValues={initialValues} onSubmit={props.onSubmit}>
      <Form>
        {props.fields.map((field) => {
          return (
            <div key={`${props.title}-${field.name}`} className={wrapperClass}>
              <label className={labelClass} htmlFor={field.name}>
                {field.label}
              </label>
              <Field className={fieldClass} {...field} />
              <ErrorMessage name={field.name} />
            </div>
          );
        })}
        <Button
          type="submit"
          as="button"
          className="w-full text-sm p-3 rounded bg-purple-500 hover:bg-purple-500/80 text-white"
        >
          Submit
        </Button>
      </Form>
    </Formik>
  );
};
