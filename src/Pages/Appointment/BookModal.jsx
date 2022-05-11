
import { format } from "date-fns";
import React from "react";

const BookModal = ({ treatment ,date,setTreatment}) => {
  const { name, slots } = treatment;
  const handelSubmit =event=>{
      event.preventDefault();
      const slot= event.target.slot.value;
      console.log(slot);
      setTreatment(null)
  }
  return (
    <div>
      <input type="checkbox" id="BookModal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            for="BookModal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-lg">{name}</h3>
         <from onSubmit={handelSubmit} className='grid cols-1 justify-items-center mt-4'>
         <input
        value= {format(date, "PP")} disabled
            type="text"
            class="input input-bordered input-accent w-full max-w-xs py-4 mt-4"
          />
          
          <select class="select select-accent w-full max-w-xs mt-4">
  <option disabled selected>Dark mode or light mode?</option>
  {slots.map (slot=> <option value={slot}>{slot}</option>)}
</select>

         <input
            type="text"
            name='name'
            placeholder="Type here"
            class="input input-bordered input-accent w-full max-w-xs py-4 mt-4"
          />
         <input
         name='email'
            type="text"
            placeholder="Type here"
            class="input input-bordered input-accent w-full max-w-xs py-4 mt-4"
          />
         <input
         name='number'
            type="text"
            placeholder="Type here"
            class="input input-bordered input-accent w-full max-w-xs py-4 mt-4"
          />
         <input
            type="submit"
            value='Submit'
            class=" btn  w-full  mt-4 max-w-xs"
          />

         </from>
          
        </div>
      </div>
    </div>
  );
};

export default BookModal;
