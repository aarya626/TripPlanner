import React from 'react'
import { Button } from '../ui/button'
function Header() {
  return (
    <div className='P-3 flex justify-between items-center px-5'>
        <img src="/logo.svg" alt="" srcset="" />
        <div>
            <Button>Sign In</Button>
        </div>
    </div>
  )
}

export default Header