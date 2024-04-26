import Image from "next/image";
import { cardContent, FAQ } from "./utils/const";
import Card from "./components/Card";

export default function Home() {
  return (
    <main>
      <section className='w-full h-[600px] bg-gray-800 text-white'>
        <div className='container flex items-center justify-center pt-[80px]'>
          <div className='flex flex-col items-center text-center gap-[30px] w-[70%]'>
            <h1 className='text-[2rem] font-bold'>Simple Pricing!</h1>
            <p className="text-[1rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus pretium quam vulputate dignissim suspendisse in est. Mi bibendum neque egestas congue quisque.</p>
          </div>
        </div>
      </section>

      <section className="pb-[50px] relative w-full bg-gray-100 flex flex-col items-center justify-center">
        <div className="container absolute -top-[200px]">
          <div className="flex items-center justify-between">
            {cardContent.map((item, idx) => {
              return (
                <Card key={idx} title={item.title} discount={item.discount} price={item.price} pages={item.pages} projects={item.projects} storage={item.storage}/>
              )
            })}
          </div>
        </div>

        <div className="container w-[70%] mt-[400px] flex flex-col items-center gap-[50px]">
          <h1 className="text-[2rem]">Frequently Ask Questions</h1>
          <div className="flex items-center justify-between gap-[20px]">
            {
              FAQ.map((item, idx) => {
                return (
                  <div key={idx} className="flex flex-col gap-[20px]">
                    <h1 className="text-[1rem] font-bold">{item.title}</h1>
                    <p className="text-[.8rem]">{item.paragraph}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
    </main>
  );
}
