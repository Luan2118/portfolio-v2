type FormFieldProps = {
  id: string
  label: string
  placeholder: string
}

function FormField({id, label, placeholder}: FormFieldProps) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" placeholder={placeholder} />
      <hr />
    </div>
  )
}

export default FormField;