import { Form, useLoaderData, Link } from 'react-router-dom';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import FormRange from './FormRange';
import FormCheckbox from './FormCheckBox';

function Filters() {
  const { meta, products, urlParams } = useLoaderData();
  const { categories, companies, pagination } = meta;
  const { category, company, order, price, search, shipping } = urlParams;

  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* SEARCH */}
      <FormInput
        type="search"
        label="Search product"
        name="search"
        size="input-sm"
        defaultValue={search}
      />
      {/* Select Cat */}
      <FormSelect
        label="Select Category"
        name="category"
        list={categories}
        size="select-sm"
        defaultValue={category}
      />
      {/* Select Comp */}
      <FormSelect
        label="Select Category"
        name="company"
        list={companies}
        size="select-sm"
        defaultValue={company}
      />
      {/* Select SortBy */}
      <FormSelect
        label="Sort By"
        name="order"
        list={['a-z', 'z-a', 'high', 'low']}
        size="select-sm"
        defaultValue={order}
      />
      {/* Range Select Price */}
      <FormRange
        name="price"
        label="Select Price"
        size="range-sm"
        price={price}
      />
      {/* ChkBx Free Shipping */}
      <FormCheckbox
        label="Free Shipping"
        name="shipping"
        size="checkbox-sm"
        defaultValue={shipping}
      />
      {/* BUTTONS */}
      <button type="submit" className="btn btn-primary btn-sm ">
        search
      </button>
      <Link to="/products" className="btn btn-accent btn-sm">
        reset
      </Link>
    </Form>
  );
}
export default Filters;
