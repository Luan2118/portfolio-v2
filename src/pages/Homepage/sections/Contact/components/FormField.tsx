type FormFieldProps = {
  id: string
  label: string
  placeholder: string
  name: string
  type?: string
}

function FormField({ id, label, placeholder,name, type }: FormFieldProps) {
  return (
    <div className="flex flex-col gap-2 text-sm lg:text-lg font-[Inter]">
      <label htmlFor={id} className="mt-2">{label}</label>
      {id === 'message' ?
        <textarea name={id} id={id} placeholder={placeholder} className="h-[100px] border-0 outline-0"></textarea> :

        <input name={name} id={id} type={type} placeholder={placeholder} />
      }
      <hr />
    </div>
  )
}

export default FormField;