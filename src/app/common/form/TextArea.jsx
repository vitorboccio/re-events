import React from 'react'
import { Form, Label } from 'semantic-ui-react';

const TextArea = ({input, rows, type, placeholder, meta: {touched, error}}) => {
  return (
      <Form.Field error={touched && !!error}>
        <textarea {...input} placeholder={placeholder} row={rows}>
            {touched && error && <Label basic color="red">{error}</Label>}
        </textarea>
      </Form.Field>
  )
}

export default TextArea
