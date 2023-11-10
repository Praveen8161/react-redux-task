/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { createSlice, createSelector } from "@reduxjs/toolkit";

const cartReducerSlice = createSlice({
    name:"cartOperation",
    initialState:{
        data: [
            {
                "id": 1,
                "title": "iPhone 9",
                "description": "An apple mobile which is nothing like apple",
                "price": 549,
                "quantity":1,
                "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
            },
            {
                "id": 2,
                "title": "iPhone X",
                "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
                "price": 899,
                "quantity":1,
                "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
            },
            {
                "id": 3,
                "title": "Samsung Universe 9",
                "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
                "price": 1249,
                "quantity":1,
                "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
            },
            {
                "id": 4,
                "title": "OPPOF19",
                "description": "OPPO F19 is officially announced on April 2021.",
                "price": 280,
                "quantity":1,
                "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
            },
            {
                "id": 5,
                "title": "Huawei P30",
                "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
                "price": 499,
                "quantity":1,
                "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
            }
        ],
        
    },

    reducers:{
        handleDelete: (state,action) => {
            state.data = state.data.filter((d) => {
                return action.payload !== d.id;
            });
        },

        handleQty: (state,action) => {
            state.data = state.data.map((d) => {
                if(d.id === action.payload.id){
                    return {
                        ...d,
                        quantity:action.payload.qty,
                    }
                }else{
                    return d;
                }
            });
        }

    }

});

export const setTotalQty = createSelector(
    (state) => state.cartOperation.data,
    (data) => data.reduce((total,item) => total + item.quantity , 0)
);

export const setTotalPrice = createSelector(
    (state) => state.cartOperation.data,
    (data) =>  data.reduce((total,item) => total + (item.quantity * item.price) , 0)
);

export const { handleDelete, handleQty } = cartReducerSlice.actions;

export default cartReducerSlice.reducer;