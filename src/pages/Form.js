import form from './Info';
import { NavLink } from 'react-router-dom';
import { useForm } from "react-hook-form";

const CreateForm = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        form.push(data)
        console.log(data)
    };

    const back = () => {

    }
    const save = () => {

    }

    console.log(form);
    return (
        <div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <div className="row">
                        <div className="col-6 mb-3">
                            <input className="w-100 p-3 borrad" placeholder='Mahsulot rasmi' {...register("url", { required: false })} />
                        </div>
                        <div className="col-6 mb-3">
                            <input className="w-100 p-3 borrad" placeholder='Mahsulot nomi' {...register("name", { required: true })} />
                        </div>
                        <div className="col-6 mb-3">
                            <input className="w-100 p-3 borrad" placeholder='Mahsulot narxi' {...register("cost", { required: true })} />
                        </div>
                    </div>
                </div>
                <input type="submit" />
            </form>

            <div className='button d-flex justify-content-center align-items-center'>
                <NavLink to={'/'}>

                    <button onClick={back()} className="btn btn-dark me-4">Orga qaytish</button>
                    <button onClick={save()} className="btn btn-dark" >Saqlash</button>


                </NavLink>
            </div>
        </div>
    );
};

export default CreateForm;