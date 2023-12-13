import Header from "@/components/Layout/Header";
import Hero from "@/components/Layout/Hero";
import HomeMenu from "@/components/Layout/HomeMenu";
import SectionHeaders from "@/components/Layout/SectionHeaders";

export default function Home() {
  return (
   <>
   <Header />
   <Hero />
   <HomeMenu />
   <section className="text-center my-16">
    <SectionHeaders 
      subHeader={'our story'}
      mainHeader={'About Us'}
    />
    <div className="text-gray-500 max-w-md mx-auto
    mt-4 flex flex-col gap-4">
      <p>
        Consequat sit sunt pariatur dolor id dolor incididunt. 
        Velit ullamco esse occaecat dolore est ut do. 
        Id qui qui ut cupidatat culpa occaecat qui.Veniam proident adipisicing 
        proident fugiat laborum duis aliquip enim culpa aute occaecat eiusmod laboris velit.
      </p>
      <p>
        Consequat sit sunt pariatur dolor id dolor incididunt. 
        Velit ullamco esse occaecat dolore est ut do. 
        Id qui qui ut cupidatat culpa occaecat qui.Veniam proident adipisicing 
        proident fugiat.
      </p>
      <p>
        Consequat sit sunt pariatur dolor id dolor incididunt. 
        Velit ullamco esse occaecat dolore est ut do. 
        Id qui qui ut cupidatat culpa occaecat qui.Veniam proident adipisicing.
      </p>
    </div>
   </section>
   <section className="text-center my-8">
    <SectionHeaders 
      subHeader={'Don\'t hesitate'}
      mainHeader={'Contact us'}
    />
    <div className="mt-8">
      <a className="text-3xl underline text-gray-500" href="tel:+95123123123">+95 123 123 123</a>
    </div>
   </section>
   <footer className="border-t p-8 text-center text-gray-500 mt-16">
      &copy; All right reserved
   </footer>
   </>
  )
}
