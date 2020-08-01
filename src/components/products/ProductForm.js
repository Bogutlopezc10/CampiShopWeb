import React from 'react'
import { useForm } from 'react-hook-form'
import SpecificationsCreateProductListContainer from '../../containers/specifications/SpecificationsCreateProductListContainer'

const ProductForm = ({ categories, onChangeFilter, loading, onSubmitInfo }) => {
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('photo', data.photo[0]);
    onSubmitInfo(data, formData);
  }
  const onChangeFilterCategory = (e) => {
    onChangeFilter(e);
  }

  const renderCategories = () => {
    if (categories.length === 0 && loading) {
      return (<div>loading.......</div>)
    }
    else if (categories.length === 0 && !loading) {
      return (<div>No hay Categorias</div>)
    }
    return (
      <>
        <select
          name="categoryId"
          className="form-control mb-2"
          onChange={(e) => onChangeFilterCategory(e.target.value)}
          ref={register({
            required: {
              value: true,
              message: 'Category is required'
            }
          })}
        >
          <option value="">Seleccione una categoria</option>
          {
            categories.map(category =>
              <option value={category.id} key={category.id}>{category.name}</option>
            )
          }
        </select>
        <span className="text-danger text-small d-block mb-2">
          {errors?.categoryId?.message}
        </span>
      </>
    )
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="Name"
        className="form-control mb-2"
        name="name"
        ref={register({
          required: {
            value: true,
            message: 'Name is required'
          }
        })}
      />
      <span className="text-danger text-small d-block mb-2">
        {errors?.name?.message}
      </span>
      <input
        placeholder="Price"
        className="form-control mb-2"
        type="number"
        name="price"
        ref={register({
          required: {
            value: true,
            message: 'Price is required'
          }
        })}
      />
      <span className="text-danger text-small d-block mb-2">
        {errors?.price?.message}
      </span>
      <input
        placeholder="Amount"
        className="form-control mb-2"
        type="number"
        name="amount"
        ref={register({
          required: {
            value: true,
            message: 'Amount is required'
          }
        })}
      />
      <span className="text-danger text-small d-block mb-2">
        {errors?.amount?.message}
      </span>
      <textarea
        placeholder="Description"
        className="form-control mb-2"
        name="description"
        ref={register({
          required: {
            value: true,
            message: 'Description is required'
          }
        })}
      >
      </textarea>
      <span className="text-danger text-small d-block mb-2">
        {errors?.description?.message}
      </span>
      <input type="text"
        placeholder="Enter a Color"
        className="form-control mb-2"
        name="color"
        ref={register({
          required: {
            value: true,
            message: 'Color is required'
          }
        })}
      />
      <span className="text-danger text-small d-block mb-2">
        {errors?.color?.message}
      </span>
      <input
        placeholder="Photo"
        className="form-control mb-2"
        type="file"
        name="photo"
        accept="image/x-png,image/gif,image/jpeg"
        ref={register({
          required: {
            value: true,
            message: 'photo is required'
          }
        })}
      />
      <span className="text-danger text-small d-block mb-2">
        {errors?.photo?.message}
      </span>
      {renderCategories()}
      <SpecificationsCreateProductListContainer
        register={register}
      />
      <button type="submit" className="btn btn-primary">
        Send
    </button>
    </form>
  )
}

export default ProductForm;
