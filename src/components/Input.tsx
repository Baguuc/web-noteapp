function Input(
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) {
  return (
    <input
      {...props}
      className="bg-neutral-700 text-white px-2 py-1 rounded-lg"
    />
  );
}

export default Input;
