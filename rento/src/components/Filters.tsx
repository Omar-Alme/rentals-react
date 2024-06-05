import { Form, useLoaderData, Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from './ui/button';
import { ProductsResponseWithParams } from '@/utils';
import FormInput from './FormInput';
import  FormSelect from './FormSelect';
import FormRange from './FormRange';
import FormCheckbox from './FormCheckbox';


function Filters() {
    const {meta, params} = useLoaderData() as ProductsResponseWithParams;
    const {search, company, category, shipping, order, price} = params;
    return (
        <Form className='border rounded-md px-8 py-4 grid gap-x-4 gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'>
            
            {/* Search Input */}
            <FormInput
                type='search'
                name='search'
                label='search products'
                defaultValue={search}
            />

            {/* CATEGORIES  */}
            <FormSelect
                name='category'
                label='select category'
                defaultValue={category}
                options={meta.categories}
            />

            {/* COMPANY */}
            <FormSelect
                name='company'
                label='select company'
                defaultValue={company}
                options={meta.companies}
            />

            {/* ORDER */}
            <FormSelect
                name='order'
                label='order by'
                defaultValue={order}
                options={['a-z', 'z-a', 'price-lowest', 'price-highest']}
            />

            {/* PRICE */}
            <FormRange 
                label='price' 
                name='price' 
                defaultValue={price} 
            />

            {/* SHIPPING */}
            <FormCheckbox 
                label='free shipping' 
                name='shipping' 
                defaultValue={shipping} 
            />




            <Button type='submit' size='sm' className='self-end mb-2'>
                Search
            </Button>
            <Button
                type='button'
                asChild
                size='sm'
                variant='ghost'
                className='self-end mb-2'
            >
                <Link to='/products'>Clear Filters</Link>
            </Button>

        </Form>
    )
}

export default Filters
