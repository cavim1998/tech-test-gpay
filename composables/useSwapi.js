export const useSwapi = () => {
  const config = useRuntimeConfig()
  
  const fetchStarships = async () => {
    const { data } = await useFetch('https://swapi.dev/api/starships/')
    return data.value?.results || []
  }

  return { fetchStarships }
}