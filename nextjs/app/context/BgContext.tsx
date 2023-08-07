"use client";


export default function BgContext({
  children,
}: {
  children: React.ReactNode
}) {
    return (
      <div 
      className="bg-fixed bg-cover bg-center " 
      style={{ backgroundImage: "url(/images/GenAI.png)", 
      backgroundBlendMode: "multiply",
      backgroundColor: "grey" }}>
        {children}
      </div>
    );
}

   