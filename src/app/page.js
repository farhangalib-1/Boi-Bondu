import Navbar from "@/components/Navbar";
import Image from "next/image";
import HomePage from "./home/page";
import Topbookcard from "@/components/Topbookcard";
import Customer from "@/components/Customer";

export default async function Home() {
  const res = await fetch("https://boi-bondu-app.vercel.app/data.json");
  const  data = await res.json();
  const topBooks = data.slice(0, 4);
  console.log(data);
  const customerReviews = [
  {
    id: 1,
    name: "আরিফ হাসান",
    profession: "বিশ্ববিদ্যালয় শিক্ষার্থী",
    review:
      "বই খুঁজে পাওয়া এবং ধার নেওয়ার পুরো প্রক্রিয়াটা অনেক সহজ। ডিজাইনটাও খুব সুন্দর লেগেছে।",
    rating: 5,
  },
  {
    id: 2,
    name: "সাবিহা রহমান",
    profession: "কলেজ শিক্ষার্থী",
    review:
      "আমি খুব সহজেই আমার পছন্দের গল্পের বই খুঁজে পেয়েছি। ওয়েবসাইটটা ব্যবহার করতে অনেক স্মুথ লাগে।",
    rating: 4,
  },
  {
    id: 3,
    name: "শায়ান কবির",
    profession: "ডেভেলপার",
    review:
      "UI ডিজাইনটা অনেক প্রিমিয়াম লাগছে।",
    rating: 5,
  },
];
  return (
    <div>
      <HomePage />
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
        {
          topBooks.map((item) => <Topbookcard key={item.id} data={item} />)
            
        }
      </div>
      <div>
        <h1 className="text-center font-bold text-4xl mt-10">Famous Publication</h1>
        <div className="flex flex-col items-center md:flex-row justify-center gap-20 ">
          <Image src="https://publishers.com.bd/Image/Thumb/300/001/012/11885.jpeg" alt="ononna publication" width={120} height={120} />
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY-n5Qg_Kc7KgorGdAcxoufDewIN1rxTnjxw&s" alt="ononna publication" width={100} height={20}  />
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6O0Ywrwr1MM1V0XnZWrVjRswC1zxcMpGcRQ&s" alt="ononna publication" width={90} height={90} />
          <Image src="https://bdbooks.bintel.cloud/ecom/uploads/sellers/2021/08/18/Tamrolipi_1629268785.webp" alt="ononna publication" width={90} height={90} />
           <Image src="https://bdbooks.bintel.cloud/ecom/uploads/sellers/2021/08/18/Addhayan_1629274533.webp" alt="ononna publication" width={90} height={90} />
           <Image src="https://bdbooks.bintel.cloud/ecom/uploads/sellers/2024/02/27/seller_746771709012303.webp" alt="ononna publication" width={90} height={90} />
        </div>
      </div>
      <h1 className="text-center text-4xl font-bold mt-7">Customer Review</h1>
      <div className="grid grid-cols-1  md:grid-cols-3 text-center p-10 gap-4">
        
        {
          customerReviews.map(el=><Customer key={el.id} el={el} />)
        }
      </div>
    </div>
  );
}
