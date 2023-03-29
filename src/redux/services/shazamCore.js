import axios from "axios";
import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query';


export const shazamCoreApi=createApi({
  reducerPath:'shazamCoreApi',
  baseQuery:fetchBaseQuery({
    baseUrl:'https://shazam-core.p.rapidapi.com/v1/',
    prepareHeaders:(headers)=>{
      headers.set('X-RapidAPI-Key','697112545amsha623a479b80294ap1a39cfjsn597778a05d2b')
      return headers
    },
  }),
  endpoints:(builder)=>({
    getTopCharts:builder.query({query:'charts/world'})
  })
})
1