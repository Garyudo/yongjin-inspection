import CrudEXAmple from '@/app/shared/crud-example'
import UnderConstruction from '@/app/shared/under-construction'
import UserDropdown from '@/app/shared/user-dropdown'
import React from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'

export default function InspectionPage() {
  return (
    <div>
      <div className="border-b-2 w-full py-4 flex items-center justify-between">
        <p className="font-bold text-3xl">Inspections</p>
        <UserDropdown />
      </div>

      <div className='flex w-full gap-2 my-4'>
        <button className='btn btn-primary'><AiOutlinePlusCircle />  New Inspection</button>

      </div>

      <div className='border rounded-lg w-full p-4'>
          <CrudEXAmple />
      </div>
    </div>
  )
}
