import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import NavBar from '../navBar/NavBar';

const AddItems = () => {
    const user = useAuthState(auth)
    const email = user[0]?.email
    console.log(email)
    const onSubmit = (e) => {
        e.preventDefault();

        // set input data from input fild  
        const inputdata = {
            name: e.target.name.value,
            price: e.target.price.value,
            Quntity: e.target.Quntity.value,
            Sapliername: e.target.Sapliername.value,
            Image: e.target.imgUrl.value,
            Discription: e.target.Discription.value,
            email: email
        }
        fetch('https://shielded-woodland-29897.herokuapp.com/add', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inputdata),
        })
            .then(response => response.json())
            .then(data => {
                const inserted = data.acknowledged;
                if (inserted) {
                    alert('Yes your data is inserted , thanks')
                }
                else {
                    alert("Sorry sir data isn't inserted , thanks")
                }
            });

    }

    return (
        <div>
            <NavBar></NavBar>
            {/* adding section  */}
            <div className='card-details'>
                <h4 className='text-center text-white'>ADD NEW ITEMS</h4>
                <form onSubmit={onSubmit}>
                    <div className="mb-3 d-md-flex ">
                        {/* items name  */}
                        <input type="text" className="form-control mt-3 mb-md-3 me-md-3" id="exampleFormControlInput1" placeholder="Items Name" name='name' required />
                        {/* items price */}
                        <input type="number" className="form-control mt-3 mb-md-3 ms-md-3" id="exampleFormControlInput1" placeholder="price" name='price' required />
                    </div>
                    <div className="mb-3 d-md-flex ">
                        {/* items Quntity */}
                        <input type="number" className="form-control mt-3 mb-md-3 me-md-3" id="exampleFormControlInput1" placeholder="Quntity" name='Quntity' required />
                        {/* items saplierName */}
                        <input type='text' className="form-control mt-3 mb-md-3 ms-md-3" id="exampleFormControlInput1" placeholder="Saplier Name" name='Sapliername' required />
                    </div>
                    <div className="mb-3 ">
                        {/* items Image URL */}
                        <input type="text" className="form-control mt-3" id="exampleFormControlInput1" placeholder="Image URL" name='imgUrl' required />
                    </div>
                    <div >
                        {/* items Discription */}
                        <textarea className="form-control mt-3 " id="exampleFormControlTextarea1" placeholder='Discription' rows="2" name='Discription' required></textarea>
                    </div>
                    <div className='d-flex justify-content-center mt-5'>
                        {/* button  */}
                        <button type="submit" className='card-button px-5'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddItems;