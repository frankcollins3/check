import { DefaultApi } from 'finnhub-ts'

const finnhubClient = new DefaultApi({
    apiKey: 'cpj29l9r01qlu187k6ggcpj29l9r01qlu187k6h0',
    isJsonMime: (input) => {
      try {
        JSON.parse(input)
        return true
      } catch (error) {}
      return false
    },
  })

export default finnhubClient;