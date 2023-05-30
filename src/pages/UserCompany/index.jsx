
import { Controller, useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from '../../lib/axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import { Eye, EyeSlash } from '@phosphor-icons/react'
import { IMaskInput } from 'react-imask'


const createUserCompanyFormSchema = z.object({
    cnpj: z.string().nonempty('O cnpj é obrigatório'),
    razao_social: z.string().nonempty('A razão social é obrigatório'),
    password: z.string().min(6, 'A senha precisa de minimo 6 caracteres'),
    confirmPassword: z.string(),
    email: z.string()
        .nonempty('O e-mail é obrigatório')
        .email('Formato de e-mail inválido')
        .toLowerCase(),
    cep: z.string().nonempty('O cep é obrigatório'),
    state: z.string().min(2, '2 caracteres'),
    city: z.string().nonempty('A cidade é obrigatório'),
    district: z.string().nonempty('O cidade é obrigatório'),
    number: z.string().nonempty('O número é obrigatório'),
    complement: z.string(),

}).refine((data) => data.password === data.confirmPassword, {
    message: "As senhas precisam ser iguais!",
    path: ["confirmPassword"],

})


export default function UserCompany() {
    const [visible, setVisible] = useState(false)
    const navigate = useNavigate()
   
    const { control, reset, register, handleSubmit, formState: {
        errors
    } } = useForm({
        resolver: zodResolver(createUserCompanyFormSchema)
    })

    async function CreateUserCompany(data) {

        await api.post('usersCompany', {
            id: uuid(),
           ...data,
           createdAt: new Date(),
        })

        navigate('/confirmUser')
        reset()
        setTimeout(() => {
            navigate('/')
        }, 4000)
    }

    return (

        <>
            <div className="relative flex justify-center top-4">
            <p className="text-white text-3xl font-serif">Cadastra-se a sua empresa</p>
            </div>

            <div className="relative top-7 h-screen flex justify-center pb-52">
            
                <form
                    className='grid grid-cols-3 gap-4' action=""
                    onSubmit={handleSubmit(CreateUserCompany)}
                >
                      <div className='flex flex-col gap-2'>
                      <label
                                className='text-white font-bold text-sm' htmlFor=""
                            // eslint-disable-next-line react/prop-types
                            >CNPJ</label>
                            <Controller
                            control={control}
                            name="cnpj"
                            rules={{ required: true}}
                            render={({ 
                                field: { onChange, onBlur, value },
                            }) => (
                                        <IMaskInput
                                            onChange={onChange}
                                            onBlur={onBlur}
                                            selected={value}
                                            mask="00.000.000/0000-00"
                                           
                                        />   
                            )}
                            
                        />
                    {errors.cnpj && <span className='text-white text-sm'>O cnpj é obrigatório</span>}

                      </div>
                          
                      <div className='flex flex-col gap-2'>
                        <label
                                className='text-white font-bold text-sm' htmlFor=""
                            // eslint-disable-next-line react/prop-types
                            >Razão Social</label>

                            <input
                                className='border border-zinc-200 shadow-sm rounded w-64'
                                type="text"
                                {...register('razao_social')}
                            />
                            {errors.razao_social && <span className='text-white text-sm'>{errors.razao_social.message}</span>}
                        </div>
                            <div className='flex flex-col gap-2'>
                        <label
                            className='text-white font-bold text-sm' htmlFor=""
                        // eslint-disable-next-line react/prop-types
                        >Senha</label>
                        <input
                            className='border border-zinc-200 shadow-sm rounded w-64'
                            type={visible ? "text" : "password"}
                            {...register('password')}

                        />
                        <div className="relative ml-56 bottom-7" onClick={() => setVisible(!visible)}>
                            {visible ? <Eye /> : <EyeSlash />}
                        </div>
                        {errors.password && <span className='relative bottom-6 text-white text-sm'>{errors.password.message}</span>}
                    </div>


                    <div className='flex flex-col gap-2'>
                        <label
                            className='relative bottom-5 text-white font-bold text-sm' htmlFor=""
                        // eslint-disable-next-line react/prop-types
                        >Repete a senha</label>
                        <input
                            className='relative bottom-5 border border-zinc-200 shadow-sm rounded w-64'
                            type={visible ? "text" : "password"}
                            {...register('confirmPassword')}
                        />
                        {errors.confirmPassword && <span className='relative bottom-5 text-white text-sm'>{errors.confirmPassword.message}</span>}
                    </div>


                    <div className='flex flex-col gap-2'>
                        <label
                            className='relative bottom-5 text-white font-bold text-sm' htmlFor=""
                        // eslint-disable-next-line react/prop-types
                        >E-mail</label>
                        <input
                            className=' relative bottom-5 border border-zinc-200 shadow-sm rounded w-64'
                            type="email"
                            {...register('email')}
                        />

                        {errors.email && <span className='relative bottom-5 text-white text-sm'>{errors.email.message}</span>}
                    </div>

                    <div className='relative flex flex-col gap-2 bottom-5'>
                        <label
                            className='text-white font-bold text-sm' htmlFor=""
                        // eslint-disable-next-line react/prop-types
                        >CEP</label>
                        <input
                            className='border border-zinc-200 shadow-sm rounded w-64'
                            type="text"
                            {...register('cep')}
                        />
                        {errors.cep && <span className='text-white text-sm'>{errors.cep.message}</span>}
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label
                            className='text-white font-bold text-sm' htmlFor=""
                        // eslint-disable-next-line react/prop-types
                        >Estado</label>
                        <input
                            className='border border-zinc-200 shadow-sm rounded w-64'
                            type="text"
                            {...register('state')}
                        />
                        {errors.state && <span className='text-white text-sm'>{errors.state.message}</span>}
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label
                            className='text-white font-bold text-sm' htmlFor=""
                        // eslint-disable-next-line react/prop-types
                        >Cidade</label>
                        <input
                            className='border border-zinc-200 shadow-sm rounded w-64'
                            type="text"
                            {...register('city')}
                        />
                        {errors.city && <span className='text-white text-sm'>{errors.city.message}</span>}
                    </div>


                    <div className='flex flex-col gap-2'>
                        <label
                            className='text-white font-bold text-sm' htmlFor=""
                        // eslint-disable-next-line react/prop-types
                        >Bairro</label>
                        <input
                            className='border border-zinc-200 shadow-sm rounded w-64'
                            type="text"
                            {...register('district')}
                        />
                        {errors.district && <span className='text-white text-sm'>{errors.district.message}</span>}
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label
                            className='text-white font-bold text-sm' htmlFor=""
                        // eslint-disable-next-line react/prop-types
                        >Número</label>
                        <input
                            className='border border-zinc-200 shadow-sm rounded w-64'
                            type="text"
                            {...register('number')}
                        />
                        {errors.number && <span className='text-white text-sm'>{errors.number.message}</span>}
                    </div>

                    <div className='flex flex-col gap-2'>

                        <label
                            className='text-white font-bold text-sm' htmlFor=""
                        // eslint-disable-next-line react/prop-types
                        >Complemento</label>
                        <input
                            className='border border-zinc-200 shadow-sm rounded w-64'
                            type="text"
                            {...register('complement')}
                        />
                        {errors.complement && <span className='text-white text-sm'>{errors.complement.message}</span>}
                    </div>

                    <div className='relative flex items-center justify-center top-20 right-56'>
                    <button
                        type="submit"
                        className='relative bg-red-500 rounded font-semibold text-white md:h-8 hover:bg-red-600 w-[16rem]'
                    >Cadastrar</button>
                     </div>
                        

                       
                   
                    </form>
                </div>
            
        </>

    )
}