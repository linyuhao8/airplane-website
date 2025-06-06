import Side from "@/componenets/side/Side";
import MainContent from "@/componenets/main/Main";

export default function App() {
  return (
    <div className="flex h-screen flex-row flex-nowrap w-full overflow-x-hidden bg-[#fff] max-sm:flex-col">
      <Side />
      <MainContent />
    </div>
  );
}
