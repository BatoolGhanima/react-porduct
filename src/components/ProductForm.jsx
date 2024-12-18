import React from 'react'
import { useForm } from 'react-hook-form';
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
    name: z.string().min(1, { message: " Product name is required" }),
    price: z.number({ invalid_type_error: "Price is required" })
        .min(1, { message: "Price must be greater than 0" }),
})


const Product = ({ onAdd }) => {
    const { register, handleSubmit, reset, formState: { errors }, } = useForm({ resolver: zodResolver(schema) });
    const onSubmit = (data) => {
        onAdd({ ...data });
        reset();
    };


    return (
        <>
            <div className='max-w-sm mx-auto'>


                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className='mb-5'>
                        <label htmlFor="productName" className='block mb-2 text-xl font-medium text-gray-900'>Product Name </label>
                        <input {...register("name")}
                            type="text" id='productName'

                            className='bg-white border border-gray-500 focus:border-black rounded-lg w-full h-12 p-2' placeholder='Enter product name' />
                        {errors.name && <p className='text-red-600'> {errors.name.message} </p>}
                    </div>
                    <div className='mb-5'>
                        <label htmlFor="productPrice" className='block mb-2 text-xl font-medium text-gray-900'>Product Price </label>
                        <input  {...register("price", { valueAsNumber: true })} type="number" id='productPrice'

                            className='bg-white border border-gray-500 focus:border-black rounded-lg w-full h-12 p-2' placeholder='Enter product price' />
                        {errors.price && <p className='text-red-600'> {errors.price.message} </p>}

                    </div>
                    <input type='submit'
                        value={"Add Product"}
                        className='bg-green-500 w-32 h-12 rounded-md text-white hover:bg-green-600'
                    />
                </form>
            </div>





        </>
    )
}

export default Product;
