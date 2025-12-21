type ButtonProps = {
  children: React.ReactNode;
};
export default function Button({ children }: ButtonProps) {
  return (
    <button className="p-3 rounded-full bg-gray-200 text-black">
      {children}
    </button>
  );
}
