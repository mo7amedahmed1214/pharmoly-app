import Header from "@/components/PagesComponents/NavBar/Header";
import { headerData } from "@/lib/constant";

export default function Home() {
  return (
    <div>
      <Header {...headerData} />
    </div>
  );
}
