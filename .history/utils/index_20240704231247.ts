import { CarProps } from "@/types";

export async function fetchCars(){
    const headers = {
            'x-rapidapi-key': 'b4c1a6f9d0msh4083791451cbcbdp19c482jsne169b206626f',
            'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carrera',{
        headers: headers,
    });

    const result = await response.json();
	return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50;
    const mileageFactor = 0.1;
    const ageFactor = 0.05;

    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
  };

  export const generateCarImageUrl = (car: CarProps, angle: string = 'front') => {
    const url = new URL("https://cdn.imagin.studio/getimage");
    const { make, year, model } = car;

    url.searchParams.append('customer', 'hrjavascript-mastery');
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(" ")[0]);
    url.searchParams.append('zoomType', 'fullScreen');
    url.searchParams.append('modelYear', `${year}`);
    url.searchParams.append('angle', angle);

    console.log("Generated URL:", url.toString());

    return url.toString();
};