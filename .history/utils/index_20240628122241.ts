export async function fetchCars(){
    const headers = {
            'x-rapidapi-key': 'b4c1a6f9d0msh4083791451cbcbdp19c482jsne169b206626f',
            'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',{
        headers: headers,
    });

    const result = await response.json();
	return result;
}