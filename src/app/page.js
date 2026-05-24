import Navbar from "@/components/Navbar";
import Image from "next/image";
import HomePage from "./home/page";
import Topbookcard from "@/components/Topbookcard";

export default async function Home() {
  const res = await fetch("https://boi-bondu-app.vercel.app/data.json");
  const data = await res.json();
  const topBooks = data.slice(0, 4);
  console.log(data);
  return (
    <div>
      <HomePage />
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
        {
          topBooks.map((item) => <Topbookcard key={item.id} data={item} />)
            
        }
      </div>
    </div>
  );
}
