type FormFieldProps = {
  id: string
  label: string
  placeholder: string
}

function FormField({ id, label, placeholder }: FormFieldProps) {
  return (
    <div className="flex flex-col gap-2 text-sm lg:text-lg font-[Inter]">
      <label htmlFor={id} className="mt-2">{label}</label>
      {id === 'message' ?
        <textarea name={id} id={id} placeholder={placeholder} className="h-[100px]"></textarea> :

        <input id={id} type="text" placeholder={placeholder} />
      }
      <hr />
    </div>
  )
}

export default FormField;