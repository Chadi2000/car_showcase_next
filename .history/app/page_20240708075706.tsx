import Image from "next/image";
import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from "@/components";
import { fetchCars } from "@/utils";
import { fuels, yearsOfProduction } from "@/constants";

export default async function Home({ searchParams }) {
  const AllCars = await fetchCars({
    manufacturer: searchParams.manufacturer || '',
    year: searchParams.year || 2024,
    fuel: searchParams.fuel || '',
    limit: searchParams.limit || 10,
    model: searchParams.model || '',
  });
  
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
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction}  />
          </div>
        </div>

        {!isDataEmpty ?(
          <section>
            <div className="home__cars-wrapper">
              {AllCars?.map((car)=>(
                <CarCard car={car} />
              ))}
            </div>

            <ShowMore 
              pageNumber={(searchParams.pageNumber || 10) / 10}
              isNext={(searchParams.limit || 10) >
                AllCars.length}
            />
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
