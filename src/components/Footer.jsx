import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div style={{height:'300px'}} className='mt-5 w-100  bg-violet-600 p-5'>
    <div className='flex justify-between p-4'>
      <div style={{width:'400px', color:'white'}}>
        <h5 className='pb-3'><i class="fa-solid fa-music me-3"></i>
        Media Player</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, corrupti! Doloremque similique dolore </p>
        <p>code licensed MIT docs CC BY 3.0</p>
        <p>currently v5.3.3</p>
      </div>
      <div className='flex flex-col'>
          <h5 className='text-xl text-white pb-3'>Links</h5>
          <Link to={'/'} style={{textDecoration:'none', color:'white'}}>Landing Page</Link>
          <Link to={'/'} style={{textDecoration:'none', color:'white'}}>Home Page</Link>
          <Link to={'/'} style={{textDecoration:'none', color:'white'}}>Watch History Page</Link>

      </div>
      <div className='flex flex-col'>
        <h5 className='text-xl text-white pb-3'>Guides</h5>
        <a target='-blank' href="https://react.dev/" style={{textDecoration:'none', color:'white'}}>React</a>
        <a target='-blank' href="https://reactrouter.com/" style={{textDecoration:'none', color:'white'}}>ReactBootstrap</a>
        <a target='-blank' href="https://reactrouter.com/" style={{textDecoration:'none', color:'white'}}>ReactRuouter</a>
      </div>
      <div className='flex flex-col'>
        <h5 className='text-xl text-white pb-3'>Contacts</h5>
        <div className='flex '>
          <input type="text" placeholder='Enter your email' className='form-control me-2' />
          <button className='btn btn-info '>&#8594;</button>
        </div>
        <div className='flex justify-evenly mt-3'>
        <a  href="https://reactrouter.com/" style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-x-twitter"></i></a>
        <a  href="https://reactrouter.com/" style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-instagram"></i></a>
        <a  href="https://reactrouter.com/" style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-linkedin"></i></a>
        <a  href="https://reactrouter.com/" style={{textDecoration:'none', color:'white'}} ><i class="fa-brands fa-facebook"></i></a>
        <a  href="https://reactrouter.com/" style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-github"></i></a>
        <a  href="https://reactrouter.com/" style={{textDecoration:'none', color:'white'}}><i class="fa-solid fa-phone"></i></a>

        </div>
      </div>
    </div>
    <p className='text-center mt-5 text-white'>Copyright &copy May 2024 Batch,Media Player,Built with react</p>
  </div>
  )
}

export default Footer