import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// action returns promise
export const fetchproducts=createAsyncThunk("products/fetchproducts",async()=>{
    const result=await axios.get("https://dummyjson.com/products")
    console.log(result);
    return result.data.products
})

const productSlice=createSlice({
    name:"Products",
    initialState:{
        allProducts:[],
        loading:false,
        errorMsg:""
    },
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchproducts.fulfilled,(state,apiResult)=>{
            state.allProducts=apiResult.payload
            state.loading=false
            state.errorMsg=""
        })
        builder.addCase(fetchproducts.pending,(state,apiResult)=>{
            state.allProducts=[]
            state.loading=true
            state.errorMsg=""
        })
        builder.addCase(fetchproducts.rejected,(state,apiResult)=>{
            state.allProducts=[]
            state.loading=false
            state.errorMsg="API call failed"
        })
    }
})

export default productSlice.reducer