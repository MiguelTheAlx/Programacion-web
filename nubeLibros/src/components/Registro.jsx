import React from 'react'
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography, 
    Select,
    Option, 
  } from "@material-tailwind/react";
   

function Registro() { 

  return (
    < >
        <div className='h-screen grid place-items-center bg-[#FDFEFE]'>
        <Card color="transparent" shadow={true} className='p-7 bg-[#EAFBFB]'>
        <Typography variant="h4" color="blue-gray">
          Registro Libros
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          En esta Web podras Gestionar tus libros.
        </Typography>
        <br/>

        <form className='nv-4 w-[500px] grid grid-cols-2 gap-6'>

            <div className="flex flex-col align-middle justify-evenly">
              <div className='p-2'><Input type='text' size='lg' label='Nombre Libro'></Input></div>
              <div className='p-2'><Input type='text' size='lg' label='Editorial'></Input></div>                
              
            </div>
            
            <div className="flex flex-col justify-evenly">
              <div className='basis-16 p-2'><Input type='date' size='lg' label='Fecha Publicación'></Input></div>
              <div className='basis-1/2 p-2'><Select color="purple" label="Genero">
                      <Option>Material Tailwind HTML</Option>
                      <Option>Material Tailwind React</Option>
                      <Option>Material Tailwind Vue</Option>
                      <Option>Material Tailwind Angular</Option>
                      <Option>Material Tailwind Svelte</Option>
                  </Select>
              </div>
            </div>

            <hr className="my-2 border-blue-gray-50" />
            <hr className="my-2 border-blue-gray-50" />
            
            <div className="flex flex-col justify-between">
              <Typography color="gray" className="mt-1 font-normal text-center text-2xl">
                   
                   Info del Autor.
              </Typography>
              <div className='p-4'><Input type='text' size='lg' label='Nombres'></Input></div>
                
              <div className='p-4'><Input type='date' size='lg' label='Fecha Nacimiento'></Input></div>
              <div className='p-4'><Input type='date' size='lg' label='Fecha Fallecimiento'></Input></div>

            </div>

            <div className="flex flex-col justify-between w-60">
                <div className='p-4'><Input type='text' size='lg' label='Apellidos'></Input></div>
                
                <div class="flex items-center justify-center w-full px-7">
                        <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                </svg>
                                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400 text-center"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                <p class="text-xs text-gray-500 dark:text-gray-400 text-center">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                            </div>
                            <input id="dropzone-file" type="file" class="hidden" />
                        </label>
                </div> 

              </div>    
                
                

                
        

        </form>
      </Card>
        </div>
        
    </>
  )
}

export default  Registro