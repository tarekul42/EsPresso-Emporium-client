import './CoffeeCard.css'
import { EyeIcon, PencilIcon } from '@heroicons/react/24/solid'
import { FaTrashAlt } from "react-icons/fa";
import CommonName from '../../../../Shared/CommonName/CommonName';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


const CoffeeCard = ({ coffee, coffees, setCoffees }) => {

    const { _id, name, chef, category, photo } = coffee;

    const handleDeleteCoffee = (id) =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffees/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )
                            const remaining = coffees.filter(coffee => coffee._id !== _id);
                            setCoffees(remaining);
                        }
                    })

                }
            })
    }

    return (
        <>
            <div className="coffee-card-container flex flex-col xl:flex-row h-full xl:h-auto w-full items-start md:items-center justify-between gap-4 xl:gap-0 pb-4 md:p-8">
                <div><img className='h-30 lg:h-60 w-40 lg:w-64' src={photo} alt="" /></div>
                {/* <div className='flex flex-col md:flex-row '> */}
                <div className='w-full px-2 md:px-0'>
                    <div >
                        <div><span className='inline-block float-left'><CommonName>Name : </CommonName></span> <p className=' about-products-description text-lg lg:text-xl 2xl:text-2xl'>{name}</p> </div>
                        <div><span className='inline-block float-left'><CommonName>Chef : </CommonName></span> <p className='about-products-description text-lg lg:text-xl 2xl:text-2xl'>{chef}</p> </div>
                        <div><span className='inline-block float-left'><CommonName>Category : </CommonName></span> <p className='about-products-description text-lg lg:text-lg 2xl:text-2xl'>{category}</p> </div>
                    </div>
                </div>
                <div className='w-full xl:w-auto flex flex-row lg:flex-row xl:flex-col justify-around gap-4'>
                    <Link to={`viewCoffeeDetails/${_id}`}>
                        <EyeIcon className='h-10 w-10 bg-[#D2B48C] text-white p-2 rounded-md cursor-pointer' />
                    </Link>
                    <Link to={`updateExistingCoffee/${_id}`}>
                        <PencilIcon className='h-10 w-10 bg-[#3C393B] text-white p-2 rounded-md cursor-pointer' />
                    </Link>
                    <div title='This button in disabled for few times.' className='cursor-not-allowed'>

                    <FaTrashAlt onClick={() => handleDeleteCoffee(_id)} className='h-10 w-10 bg-[#EA4744] text-white p-2 rounded-md btn-disabled' />
                    </div>
                </div>
            </div>
            {/* </div> */}
        </>
    );
};

export default CoffeeCard;