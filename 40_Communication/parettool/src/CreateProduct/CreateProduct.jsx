import { useForm } from 'react-hook-form';
import './CreateProduct.css';

export default function CreateProduct (props) {

    const form = useForm();
    const { 
        register,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm();

    const onSubmit = (data) => {
        props.addNewProduct(data);
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