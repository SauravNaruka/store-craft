export type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
type Config = {
  method?: HTTPMethod
  body?: BodyInit | null
  headers?: {[key: string]: string}
}

// TODO: Remove the commented code if not required
// ${process.env.BASE_URL}

export function restClient<Response>(endpoint: string, config: Config = {}) {
  const finalConfig = combineDefaultConfigWith(config)

  return fetch(endpoint, finalConfig).then(async response => {
    if (response.ok) {
      return response.json().then(data => data as Response)
    } else {
      const errorMessage = await response.text()
      return Promise.reject(new Error(errorMessage))
    }
  })
}

function combineDefaultConfigWith({
  body,
  ...customConfig
}: Config): RequestInit {
  const headers = {'Content-Type': 'application/json'}
  const config = {
    method: body ? 'POST' : 'GET',
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
    ...(body ? {body: JSON.stringify(body)} : {}),
  }

  return config
}
