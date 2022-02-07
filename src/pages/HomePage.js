import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Button from './Button';
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTimes, faTrash, faSearch } from '@fortawesome/free-solid-svg-icons';
import Form from './Info';
import '../index.css'
import '../section.css';

function HomePage() {
    return <section>
        <div className="container">
            <div className="d-flex justify-content-between">
                <h1>Furniutr.</h1>
                <p><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></p>
            </div>
            <h5 className="text-center mt-5">Barchasini ko’rish / qo’shish / o’zgartirish / o’chirish paneli</h5>

            <h1 className="text-center my-3 texto">Mahsulotlar</h1>
            <NavLink to='/add' className="text-center">
                <Button />
            </NavLink>

            <div className="row mt-4 ps-3">
                {
                    Form.map(item => {
                        return <div className="col-sm-6 col-md-4 col-lg-3 py-3">
                            <div className='card'>
                                <img src={item.url} alt="img" />
                                <p className="text-center fw-800">{item.name}</p>
                                <span className="text-center fw-200"> {item.cost} </span>
                                <div className='hovered'>
                                    <NavLink to={'/edit'}>
                                        <button className='red'>
                                            <FontAwesomeIcon icon={faPen} />
                                        </button>
                                    </NavLink>
                                    <button>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
            <span className='span'></span>
            <footer className="text-center">
                <img src="https://www.algorismic.uz/images/algorismic-02.svg" alt="" className='w-25 h-25' />
            </footer>
        </div>
    </section>;
}

export default HomePage;