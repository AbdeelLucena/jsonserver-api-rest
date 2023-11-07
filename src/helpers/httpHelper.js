// Define uma função chamada httpHelper
export const httpHelper = () => {
  // Define uma função chamada customFetch que é usada internamente para realizar as requisições HTTP
  const customFetch = async (url, options = {}) => {
    // Define os valores padrão para o método e cabeçalhos da requisição
    const defaultMethod = "GET"
    const defaultHeaders = {
      "Content-Type": "application/json",
      Accept: "application/json",
    }

    // Cria um objeto de AbortController para permitir o cancelamento da requisição
    const controller = new AbortController()
    options.signal = controller.signal

    // Define o método da requisição com base nas opções ou usa o padrão se não especificado
    options.method = options.method || defaultMethod

    // Combina os cabeçalhos padrão com quaisquer cabeçalhos fornecidos nas opções
    options.headers = options.headers
      ? { ...defaultHeaders, ...options.headers }
      : defaultHeaders

    // Converte o corpo da requisição em formato JSON, se especificado
    options.body = JSON.stringify(options.body) || false
    if (!options.body) delete options.body

    // Define um temporizador para cancelar a requisição após 3 segundos
    setTimeout(() => {
      controller.abort()
    }, 3000)

    try {
      // Realiza a requisição usando o Fetch API e aguarda a resposta
      const response = await fetch(url, options)
      return await response.json()
    } catch (err) {
      // Captura erros na requisição e os retorna
      return err
    }
  }

  // Define funções para os principais métodos HTTP (GET, POST, PUT, DELETE)
  const get = (url, options = {}) => customFetch(url, options)
  const post = (url, options) => {
    options.method = "POST"
    return customFetch(url, options)
  }
  const put = (url, options) => {
    options.method = "PUT"
    return customFetch(url, options)
  }
  const del = (url, options) => {
    options.method = "DELETE"
    return customFetch(url, options)
  }

  // Retorna um objeto com as funções definidas para os métodos HTTP
  return {
    get,
    post,
    put,
    del,
  }
}
