const API_ENDPOINT = "https://api.thecatapi.com/v1";

const request = async (url) => {
    try{
        const response = await fetch(url);
        if(response.ok){
            const data = await response.json();
            return data;
        }else{
            const errorData = await response.json();
            throw errorData;
        }
    }catch(error){
        throw {
            message:error.message,
            status:error.status
        };
    }
};

export const api = {
    fetchCat: async (keyword) => {
        try{
            const breeds = await request(`${API_ENDPOINT}/breeds/search?q=${keyword}`);
            const requests = breeds.map(async breed => {
                return await request(`${API_ENDPOINT}/images/search?limit=20&breed_ids=${breed.id}`);
            });
            const responses = await Promise.all(requests);
            const result = Array.prototype.concat.apply([], responses);
            return {
                isError: false,
                data: result
            };
        }catch(error){
            return {
                isError:true,
                data:error
            };
        }
    }
};