import { Link } from 'react-router-dom';
import CommonName from '../../Shared/CommonName/CommonName';
import CommonTitl2 from '../../Shared/CommonTitles/CommonTitle2/CommonTitl2';
import CommonTitle3 from '../../Shared/CommonTitles/CommonTitle3/CommonTitle3';
import './AddNewCoffee.css'
import { FaArrowLeft } from 'react-icons/fa';
import Swal from 'sweetalert2'

const handleAddNewCoffee = event =>{
    event.preventDefault();
        
        const form = event.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = {name, chef, supplier, taste, category, details, photo};
        console.log(newCoffee);

        // send data to server
        fetch('http://localhost:5000/coffees', {
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee added successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  })
                }
                form.reset(); 
        })
        .catch((err) =>{
            console.log(err);
        })

}

const AddNewCoffee = () => {
    return (
        <div className="bg-[#FFF] py-7 xl:p-20">
            <div className='min-h-min w-11/12 md:w-5/6 mx-auto'>
                <div className='add-new-coffee-form'>
                    {/* back button */}
                    <Link to='/'>
                    <div className='back-to-home inline-flex items-center cursor-pointer rounded-xl mb-7 xl:mb-20'>
                            <FaArrowLeft className='common-title2 pb-2 text-2xl md:text-3xl lg:text-4xl xl:text-5xl lg:pb-4' />
                        <CommonTitl2>
                            Back to home</CommonTitl2>
                    </div>
                    </Link>
                    {/* the body start form here */}
                    <div className='form-container bg-[#F4F3F0] rounded-md'>

                        <form onSubmit={handleAddNewCoffee} className='px-4 py-5 md:px-10 md:py-6 lg:px-20 lg:py-12 xl:px-32 xl:py-20'>
                            <div className='text-center py-1 md:px-14 md:py-2 lg:px-28 xl:px-40 lg:py-3 xl:py-5'>
                            <CommonTitle3 className="text-3xl font-extrabold mb-5">Add a Coffee</CommonTitle3>
                            <p className='about-products-description text-base'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                            </div>
                            {/* form name and Chef row */}
                            <div className="md:flex mb-4 gap-4">
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <CommonName className="label-text">Coffee Name</CommonName>
                                    </label>
                                    <input type="text" name="name" placeholder="Enter Coffee Name" className="input input-bordered w-full bg-white" />
                                </div>
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <CommonName className="label-text">Chef</CommonName>
                                    </label>
                                    <input type="text" name="chef" placeholder="Enter Coffee Chef" className="input input-bordered w-full bg-white" />
                                </div>
                            </div>
                            {/* form supplier and taste row */}
                            <div className="md:flex mb-4 gap-4">
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <CommonName className="label-text">Supplier Name</CommonName>
                                    </label>
                                    <input type="text" name="supplier" placeholder="Enter Coffee Supplier" className="input input-bordered w-full bg-white" />
                                </div>
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <CommonName className="label-text">Taste</CommonName>
                                    </label>
                                    <input type="text" name="taste" placeholder="Enter Coffee Taste" className="input input-bordered w-full bg-white" />
                                </div>
                            </div>
                            {/* form category and details row */}
                            <div className="md:flex mb-4 gap-4">
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <CommonName className="label-text">Category</CommonName>
                                    </label>
                                    <input type="text" name="category" placeholder="Enter Coffee Category" className="input input-bordered w-full bg-white" />
                                </div>
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <CommonName className="label-text">Details</CommonName>
                                    </label>
                                    <input type="text" name="details" placeholder="Enter Coffee Details" className="input input-bordered w-full bg-white" />
                                </div>
                            </div>
                            {/* form photo url row */}
                            <div className="mb-4">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <CommonName className="label-text">Photo URL</CommonName>
                                    </label>
                                    <input type="text" name="photo" placeholder="Enter Photo URL" className="input input-bordered w-full bg-white" />
                                </div>
                            </div>
                            {/* submit button here */}
                            <input type="submit" className="add-new-coffee-button text-base md:text-2xl h-10 lg:h-12 cursor-pointer" value="Add Coffee" />
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AddNewCoffee;