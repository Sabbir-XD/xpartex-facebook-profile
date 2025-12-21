type CardProps = {
  children: React.ReactNode;
};

export default function Card({ children }: CardProps) {
  return (
     <div className="bg-white rounded-lg p-4 shadow-sm">
      {children}
    </div>
  )
}


