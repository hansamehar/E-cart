import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <>
    <Header/>
    <div>
        <>
        <h1 style={{paddingTop:'100px'}} className='px-5'>Cart Summary</h1>
        <div className='grid grid-cols-3 gap-4 mt-5'>
        <div className='col-span-2 rounded p-5 shadow'>
            <table className='table-auto w-full'>
                <thead>
                    <tr>
                        <td className='font-semi'>#</td>
                        <td className='font-semi'>Name</td>
                        <td className='font-semi'>Image</td>
                        <td className='font-semi'>Quantity</td>
                        <td className='font-semi'>Price</td>
                        <td className='font-semi'>...</td>
                    </tr>
                </thead>  
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Productname</td>
                        <td><img width={'70px'} height={'70px'} src="https://cdn.shopify.com/s/files/1/0070/7032/articles/ecommerce_20shopping_20cart_4c343e41-1041-49d3-bca8-3d7d1aa06d90.png?v=1729263457" alt="" /></td>
                        <td>
                            <div className='flex'>
                                <button className='font-bold'>-</button>
                                <input className='border p-1 rounded mx-2' value={2} readOnly style={{width:'40px'}} type="text" />
                                <button className='font-bold'>+</button>
                            </div>
                        </td>
                        <td>$100</td>
                        <td><button className='text-red-600'><i className='fa-solid fa-trash'></i></button></td>
                    </tr>
                </tbody> 
            </table>
            <div className='float-right mt-5'>
                <button className='bg-red-600 rounded p-2 text-white'>Empty Cart</button>
                <Link to={'/'} className='bg-blue-600 ms-3 rounded p-2 text-white'>Shop More..</Link>
            </div>
        </div>
        <div className='col-span-1'>
            <div className='border rounded shadow p-5'>
                <h2 className='text-2xl font-bold my-4'>Total Amount : <span className='text-red-600'>$9.99</span></h2>
                <button className='bg-green-600 rounded p-2 text-white w-full mt-4'>Check Out</button>
            </div>
        </div>
        </div>
        </>
    </div>
    </>
  )
}

export default Cart