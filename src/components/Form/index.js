'use client'
import { useForm } from "react-hook-form";
import styles from './Form.module.scss';
import Image from "next/image";
import { assets } from "@/components/Helper";
import { useDeleteUser, useUpdateUser } from "@/components/Hooks/Users";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Form = ( { userData } ) => {
  const { mutate, isSuccess } = useUpdateUser();
  const { mutate : deleteUser , isSuccess : successfullyDeleted } = useDeleteUser();
  const router = useRouter()

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = ( data ) => {
    mutate( { data: data, id: userData.id } )
  }
  useEffect( () => {
    if ( isSuccess ) {
      // @todo add toast
      alert( 'successfully updated' )
    }
  }, [isSuccess] )

  useEffect( () => {
    if ( successfullyDeleted ) {
      // @todo add toast
      alert( 'successfully deleted' )
      router.push('/')
    }
  }, [successfullyDeleted] )

  const Input = ( { label, register, required, name, defaultValue } ) => (
    <div className={ styles.inputController }>
      <label className={ styles.label }>{ label }</label>
      <input defaultValue={ defaultValue } { ...register( name, { required } ) } />
    </div>
  );

  return (
    <div className={ styles.wrapper }>
      <span className={ styles.title }>ویرایش کاربر</span>
      <div className={ styles.imageWrapper }>
        <Image fill src={ assets( `/images/image.png` ) } alt={ "avatar" }/>
      </div>
      <form onSubmit={ handleSubmit( onSubmit ) } className={ styles.form }>
        <div className={ styles.topBox }>
          <Input register={ register } label={ 'نام' } defaultValue={ userData?.name } name={ 'name' }
                 required={ true }/>
          <Input register={ register } label={ 'ایمیل' } defaultValue={ userData?.email } name={ 'email' }
                 required={ true }/>
          <Input register={ register } label={ 'تاریخ تولد' } defaultValue={ userData?.dateOfBirth }
                 name={ 'dateOfBirth' }
                 required={ true }/>
          <Input register={ register } label={ 'شماره تماس' } defaultValue={ userData?.phoneNumber }
                 name={ 'phoneNumber' }
                 required={ true }/>
        </div>
        <div className={ styles.bottomBox }>
          <Input register={ register } label={ 'کشور' } defaultValue={ userData?.country } name={ 'country' }
                 required={ true }/>
          <Input register={ register } label={ 'شهر' } defaultValue={ userData?.city } name={ 'city' }
                 required={ true }/>
          <Input register={ register } label={ ' خیابان' } defaultValue={ userData?.street } name={ 'street' }
                 required={ true }/>
          <Input register={ register } label={ 'کد پستی' } defaultValue={ userData?.zipcode } name={ 'zipcode' }
                 required={ true }/>

        </div>
        <Input register={ register } label={ 'شرکت' } defaultValue={ userData?.company } name={ 'company' }
               required={ true }/>
        {/* errors will return when field validation fails  */ }
        { errors.exampleRequired && <span className={ styles.errors }>This field is required</span> }
        <div className={ styles.buttonGroup }>
          <input className={ styles.editButton } type="submit" value={ 'ویرایش' }/>
          <button type={ 'button' } className={ styles.removeButton } onClick={()=> deleteUser(userData.id) }>حذف</button>
        </div>

      </form>
    </div>

  )
}
export default Form