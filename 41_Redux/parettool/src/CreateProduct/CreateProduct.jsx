import { useForm } from 'react-hook-form';
import './CreateProduct.css';
import { useSelector, useDispatch } from 'react-redux';
import { addNewProduct } from '../redux/productsSlice';

export default function CreateProduct () {
    const form = useForm();
    const { register, handleSubmit, watch, formState: {errors} } = useForm();
    const products = useSelector(state => state.products.products);
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        addNewProduct(data);
    };

    return(
        <div className='form-wrap'>
        <form className='form-box' onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-3'>
                <label htmlFor="title" className='form-label'>Назва товару</label>
                <input id='title' className='form-control' {... register( "title", {required: 'Назва продукту на вказана!'} )} />
                {errors.title && (<div className='errors'>{errors.title.message}</div>)} 
            </div>
            <div className='mb-3'>
                <input type='file' className='form-control' { ... register ( "thumbnail" ) } /> 
            </div>
            <div className='mb-3' >
                <label htmlFor="price" className='form-label'>Ціна товару</label>
                <input type='number' id='price' className='form-control' { ... register( "price", {required: 'Вкажіть ціну за товар'} ) } /> 
                {errors.price && (<div className='errors'>{errors.price.message}</div>)} 
            </div>
            <input type="submit" />
        </form>  
        </div>
    );
};