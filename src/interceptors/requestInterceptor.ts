import axios, { type InternalAxiosRequestConfig } from 'axios'

export const requestInterceptor = (): void => {
  axios.interceptors.request.use((req: InternalAxiosRequestConfig<any>) => {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (req?.headers) {
      req.headers.Authorization = 'auth-token'
      req.headers['Content-Type'] = 'application/json'
    }
    return req
  })
}
