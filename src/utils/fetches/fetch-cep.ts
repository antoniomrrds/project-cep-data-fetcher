import axios from 'axios'

export const fetchCep = async (cep: string) => {
  try {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    return response.data
  } catch (error) {
    return { error: 'Erro ao buscar CEP' }
  }
}
