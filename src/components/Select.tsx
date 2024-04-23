function Input(
  props: React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  >
) {
  return (
    <select
      {...props}
      className="bg-neutral-700 text-white px-2 py-1 rounded-lg"
    >
      {props.children}
    </select>
  );
}

export default Input;
