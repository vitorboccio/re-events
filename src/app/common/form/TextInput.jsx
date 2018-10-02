import React from 'react'
import { Field, Label } from 'semantic-ui-react'

const TextInput = ({input, width, title, placeholder, meta: {touched, error}}) => {
  return (
    <Form.field error={touched && !!error} width={width}>
        <input {...input} placeholder={placeholder} type={type} />
        {touched && error && <Label basic color="red">{error}</Label>}
    </Form.field>
  )
}

export default TextInput
