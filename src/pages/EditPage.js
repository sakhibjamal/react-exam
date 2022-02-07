import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.css';
import CreateForm from './Form'

export default function EditPage() {
    return <div>
        <div className="py-5 container">
            <div className="d-flex justify-content-between">
                <h1>Furniutr.</h1>
                <p><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></p>
            </div>
            <h5 className="text-center mt-5">Barchasini ko’rish / qo’shish / o’zgartirish / o’chirish paneli</h5>
            <h1 className="text-center my-3 texto">O'zgartirish</h1>
            <CreateForm></CreateForm>
        </div>
    </div>;
}
