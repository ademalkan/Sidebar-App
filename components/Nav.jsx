import clsx from 'clsx'
import React from 'react'

const NavActions = ({backgroundColor}) => <li className={clsx("h-3 w-3 rounded-full bg-black",backgroundColor)}></li>



const Nav = () => {
  return (
    <ul className='flex gap-2'>
        <NavActions backgroundColor={"bg-red-500"}/>
        <NavActions backgroundColor={"bg-yellow-500"}/>
        <NavActions backgroundColor={"bg-green-500"}/>
    </ul>
  )
}

export default Nav