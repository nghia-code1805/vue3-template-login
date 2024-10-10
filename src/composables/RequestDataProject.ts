import { UseAxiosOptions ,useAxios } from "@vueuse/integrations/useAxios";
import { AxiosRequestConfig } from "axios";
import _ from "lodash";

const API_CONFIG: AxiosRequestConfig = {
    baseURL: 'https://dummyjson.com',
  }
  
  const USE_AXIOS_OPTIONS: UseAxiosOptions = {
    immediate: false,
  }

function request(url: string, options: AxiosRequestConfig = {}, useAxiosOptions: UseAxiosOptions) {
    options = _.omitBy(Object.assign({}, API_CONFIG, options), _.isNil)
    const  { response, error, isLoading} = useAxios(url, options, useAxiosOptions)
    console.log(useAxios(url, options, useAxiosOptions))
    return {
      response,
      error,
      isLoading
    }
}

export default function requestData(url: string, options: AxiosRequestConfig = {}, useAxiosOptions: UseAxiosOptions = USE_AXIOS_OPTIONS) {
    return request(url, options, useAxiosOptions)
}