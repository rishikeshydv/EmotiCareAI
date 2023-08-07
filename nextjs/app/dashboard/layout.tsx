import SideBar from "./components/SideBar";
import Header from "./components/Header";

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-row w-full">
      <SideBar />
      <div className="w-full">
        <Header />
        {children}
      </div>
    </main>
  );
}
