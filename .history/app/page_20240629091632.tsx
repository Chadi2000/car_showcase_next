import Image from "next/image";
import { CarCard, CustomFilter, Hero, SearchBar } from "@/components";
import { fetchCars } from "@/utils";

export default async function Home() {
  const AllCars = await fetchCars();
  
  const isDataEmpty = !Array.isArray(AllCars) || AllCars.length<1 || !AllCars;



  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">
            Car Catalogue
          </h1>
          <p>Explore the Cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>

        {!isDataEmpty ?(
          <section>
            <div className="home__cars-wrapper">
              {AllCars?.map((car)=>(
                <CarCard car={car} />
              ))}
            </div>
          </section>
        ):(
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            <p>{AllCars?.message}</p>
          </div>
        )}


      </div>
    </main>
  );
}
