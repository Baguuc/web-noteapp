function Bar({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row gap-2 px-4 py-2 rounded-lg bg-neutral-800 text-white items-center w-full">
      {children}
    </div>
  );
}

export default Bar;
