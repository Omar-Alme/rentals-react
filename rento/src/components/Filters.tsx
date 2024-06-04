import { Form, useLoaderData, Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from './ui/button';
import { ProductsResponseWithParams } from '@/utils';


function Filters() {
    const {meta, params} = useLoaderData() as ProductsResponseWithParams;
    const {search} = params;
    return (
        <Form className='border rounded-md px-8 py-4 grid gap-x-4 gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'>
            <div className='mb-2'>
                <Label htmlFor='search'>Search Product</Label>
                <Input type='text' id='search' name='search' defaultValue={search} />
            </div>
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
