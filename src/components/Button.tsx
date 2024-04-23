function Bar(
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) {
  return (
    <button
      {...props}
      className="px-6 py-1 bg-neutral-700 text-white rounded-lg"
    ></button>
  );
}

export default Bar;
