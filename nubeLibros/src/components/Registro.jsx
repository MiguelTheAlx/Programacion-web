import {React, useState} from 'react'
import {
    Card,
    Input,
    Checkbox,
    Avatar,
    Button,
    Typography, 
    Select,
    Option, 
  } from "@material-tailwind/react";
import { useForm, Controller } from "react-hook-form"

function Registro() { 
  //funciones de react-hoock-form
  const { control, handleSubmit, reset, formState: {errors}, } = useForm({})

  const onSubmit = (data) => {
    //validacion de datos de fecha de fallecimiento
    data.FechaF = data.FechaF ? data.FechaF : 'Sin fecha existente';
    console.log(data);//envio de datos al formulario
  }
  

  
    const [imageSelected, setImageSelected] = useState(false);

    const handleImageSelect = (event) => {
      const file = event.target.files[0];
      console.log(file.type);
      setImageSelected(!!file);
      return file;
    };
    


  return (
    < >   
        <br/>

        <form 
          className='nv-4 w-[500px] grid grid-cols-2 gap-6'
          onSubmit={handleSubmit(onSubmit)} >

            <div className="flex flex-col align-middle justify-evenly">
              <div className='p-2'>
                <Controller
                  name='Titulo'
                  rules={{
                    required: 'Titulo es requerido',
                    minLength: {
                      value: 3,
                      message: 'Minimo 3 letras es requerido'
                    },
                    validate: {
                      maxWords: value => value.split(' ').length <= 3 || 'Maximo 3 palabras'
                    }
                  }}
                  control={control}
                  render={({field}) => (
                    <Input color='blue' type='text' size='lg' {...field} label='Titulo Libro' 
                    error={Boolean(errors?.Titulo?.message)}/>
                  )}
                />
                {errors?.Titulo?.message &&(
                  <span className='text-red-900'>{errors?.Titulo?.message}</span>
                )}
              </div>

              <div className="flex flex-col align-middle justify-evenly">
                <div className='p-2'>
                  <Controller
                    name='Editorial'
                    rules={{
                      required: 'Nombre Editorial es requerida',
                      minLength: {
                        value: 3,
                        message: 'Minimo 3 letras es requerido'
                      },
                      validate: {
                        maxWords: value => value.split(' ').length <= 3 || 'Maximo 3 palabras'
                      }
                    }}
                    control={control}
                    render={({field}) => (
                      <Input color='blue' type='text' size='lg' {...field} label='Editorial' error={Boolean(errors?.Editorial?.message)}/>
                    )}
                  />
                   {errors?.Editorial?.message &&(
                  <span className='text-red-900'>{errors?.Editorial?.message}</span>
                )}
                </div>         
              </div>

            </div>
            
            <div className="flex flex-col justify-evenly">

              <div className='basis-16 p-2'>
                <Controller
                  name='FechaPublicacion'
                  rules={{
                    required: 'Fecha de publicación es requerida',
                    validate: {
                      notFutureDate: value => new Date(value) <= new Date() || 'La fecha no puede ser futura',
                      notTooOld: value => new Date(value) >= new Date('1985-07-07') || 'La fecha no puede ser anterior al 7 de julio de 1985'
                    }
                  }}
                  control={control}
                  render={({field}) => (
                    <Input color='blue' type='date' size='lg' {...field} label='Fecha Publicación' error={Boolean(errors?.FechaPublicacion?.message)}/>
                  )}
                />
                {errors?.FechaPublicacion?.message &&(
                  <span className='text-red-900'>{errors?.FechaPublicacion?.message}</span>
                )}
              </div>

              <div className='basis-1/2 p-2'>
                <Controller
                  name='Genero'
                  rules={{
                    required: 'Debes seleccionar un género'
                  }}
                  control={control}
                  render={({field}) => (
                    <Select color="blue" {...field} label="Genero">
                      <Option value="Historia">Historia</Option>
                      <Option value="Fantasía">Fantasía</Option>
                      <Option value="Misterio">Misterio</Option>
                      <Option value="Ciencia ficción">Ciencia ficción</Option>
                      <Option value="Romance">Romance</Option>
                      <Option value="Autoayuda">Autoayuda</Option>
                      <Option value="Biografía">Biografía</Option>
                    </Select>
                  )}
                />
                {errors?.Genero?.message &&(
                  <span className='text-red-900'>{errors?.Genero?.message}</span>
                )}
              </div>
            </div>

            <div className="col-span-2 grid grid-cols-2 gap-1">
              <hr className="my-2 border-blue-gray-50" />
              <hr className="my-2 border-blue-gray-50" />
              
            </div>

            <div className="flex flex-col justify-between">
              <Typography color="gray" className="mt-1 font-normal text-center text-2xl">
                  
                  Info del Autor.
              </Typography>
              

              <div className='p-4'>
                <Controller
                  name='Nombres'
                  rules={{
                    required: 'Nombre Autor es requerido',
                    minLength: {
                      value: 3,
                      message: 'Minimo 3 letras es requerido'
                    },
                    maxLength:{
                      value: 20,
                      message: 'Maximo 20 letras para el nombre'
                    },
                    validate: {
                      maxWords: value => value.split(' ').length <= 3 || 'Maximo 3 palabras'
                    }
                  }}
                  control={control}
                  render={({field}) => (
                    <Input color='blue' type='text' size='lg' {...field} label='Nombres' error={Boolean(errors?.Nombres?.message)}/>
                  )}
                />
                 {errors?.Nombres?.message &&(
                  <span className='text-red-900'>{errors?.Nombres?.message}</span>
                )}
              </div>

              <div className='p-4'>
                <Controller
                  name='FechaN'
                  rules={{
                    required: 'Fecha de Nacimiento es requerida',
                    validate: {
                      notFutureDate: value => new Date(value) <= new Date() || 'La fecha no puede ser futura',
                      notTooOld: value => new Date(value) >= new Date('1963-10-07') || 'La fecha no puede ser anterior al 07 de Octubre de 1963'
                    }
                  }}
                  control={control}
                  render={({field}) => (
                    <Input color='blue' type='date' size='lg' {...field} label='Fecha Nacimiento' error={Boolean(errors?.FechaN?.message)}/>
                  )}
                />
                {errors?.FechaN?.message &&(
                  <span className='text-red-900'>{errors?.FechaN?.message}</span>
                )}
              </div>

              <div className='p-4'>
                <Controller
                  name='FechaF'
                  rules={{
                    validate: {
                      notFutureDate: value => !value || new Date(value) <= new Date() || 'La fecha no puede ser futura',
                      notTooOld: value => !value || new Date(value) >= new Date('1991-02-07') || 'La fecha no puede ser anterior al 07 de febrero de 1991'
                    }
                  }}
                  control={control}
                  render={({field}) => (
                    <Input color='blue' type='date' size='lg' {...field} label='Fecha Fallecimiento' error={Boolean(errors?.FechaN?.message)}/>
                  )}
                />
                 {errors?.FechaF?.message &&(
                  <span className='text-red-900'>{errors?.FechaF?.message}</span>
                )}
              </div>


            </div>

            <div className="flex flex-col justify-between w-60">
                <div className='p-4'>
                  <Controller
                    name='Apellidos'
                    rules={{
                      required: 'Apellidos del Autor es requerido',
                      minLength: {
                        value: 3,
                        message: 'Minimo 3 letras es requerido'
                      },
                      maxLength:{
                        value: 20,
                        message: 'Maximo 20 letras para los Apellidos'
                      },
                      validate: {
                        maxWords: value => value.split(' ').length <= 3 || 'Maximo 3 palabras'
                      }
                    }}
                    control={control}
                    render={({field}) => (
                      <Input color='blue' type='text' size='lg' {...field} label='Apellidos' error={Boolean(errors?.Apellidos?.message)}/>
                    )}
                  />
                   {errors?.Apellidos?.message &&(
                  <span className='text-red-900'>{errors?.Apellidos?.message}</span>
                )}
                </div>


                <div class="flex items-center justify-center w-full px-7">
                  <label for="dropzone-file" class="group flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300  rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600   hover:border-blue-500 border-solid">
                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                      <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg class={`w-8 h-8 mb-4 ${imageSelected ? 'text-green-500' : 'text-gray-500'}  dark:text-gray-400 group-hover:w-16 group-hover:text-blue-900 animate-pulse transitio duration-500`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                </svg>
                                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400 text-center group-hover:text-black transitio duration-500"><span class="font-semibold group-hover:text-blue-600 transitio duration-500 ">{imageSelected? 'Listo':'Click para Subir'} <br/> <span class='font-semibold text-blue-200 group-hover:text-blue-900 transitio duration-500'>Portada Libro</span>
                                
                                  {errors?.Imagen?.message &&(
                                  <span className='text-red-900'>{errors?.Imagen?.message}</span>
                                  )}


                                 </span> <br/>
                                 
                                  {imageSelected? '': 'o'}
                                  
                                 <br/>{imageSelected? '':'Arrastra y Suelta'}</p>
                                <p class="text-xs text-gray-500 dark:text-gray-400 text-center"> {imageSelected? '':'PNG, JPG (MAX. 800x400px)'}</p>
                      </div>
                    </div>
                    <Controller
                      name="Imagen"
                      rules={{
                        validate: {
                          
                          isImage: (value) => {
                            if (value && value[0]) {
                              console.log(value[0].type); // Imprime el tipo de archivo en la consola
                              return ['image/png', 'image/jpeg'].includes(value[0].type) || 'El archivo debe ser una imagen PNG o JPG.';
                            }
                          
                          },
                          isCorrectSize: value => {
                            if (value && value[0]) {
                              const img = new Image();
                              img.src = URL.createObjectURL(value[0]);
                              return img.onload = () => img.width <= 800 && img.height <= 400 || 'La imagen debe tener un tamaño máximo de 800x400px.';
                            }
                            return true;
                          }
                        }
                      }}
                      
                      control={control}
                      render={({ field }) => (
                        <input id="dropzone-file" type="file" class="hidden" onChange={(e) => {
                          field.onChange(handleImageSelect(e));
                        }} />
                        
                      )}
                      
                    />
                  </label>
                </div> 
              
            </div>

            <div className="col-span-2 grid grid-cols-2 gap-3">
              <Button type='button' variant='outlined' onClick={() => {reset({ 
                      Titulo: '', 
                      Editorial: '', 
                      FechaPublicacion: '', 
                      Genero: '', 
                      Nombres: '',
                      FechaN: '',
                      FechaF: '',
                      Apellidos: '',
                      Imagen: null});
                      setImageSelected(false); // le dice a la funcion que ya no hay imagen guardada
                    
              }}> Reiciar</Button>

              <Button type='submit' > Guardar Libro</Button>
            </div>       


        </form>
        
    </>
  )
}

export default  Registro