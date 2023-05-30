/* eslint-disable no-undef */
import { zodResolver } from '@hookform/resolvers/zod'
import logo from '../../assets/logo.png'

import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { api } from '../../lib/axios'
import { useNavigate } from 'react-router-dom'

import { v4 as uuid } from 'uuid'


const createSchedulingFormScheduling = z.object({
    gender: z.string().nonempty('O genêro é obrigatório'),
    height: z.string().nonempty('A altura é obrigatório'),
    influenza_fever: z.string().nonempty('Campo é obrigatório'),
    blood_donation: z.string().nonempty('Campo é obrigatório'),
    dental_extraction: z.string().nonempty('Campo é obrigatório'),
    weight: z.string().nonempty('Campo é obrigatório'),
    age: z.string().nonempty('Campo é obrigatório'),
    got_tattoo: z.string().nonempty('Campo é obrigatório'),
    alcoholic_beverage: z.string().nonempty('Campo é obrigatório'),
})

export default function Scheduling() {
    const navigate = useNavigate()

    const { reset, register, handleSubmit, formState: {
        errors
    } } = useForm({ resolver: zodResolver(createSchedulingFormScheduling) })


    async function createScheduling(data) {
        await api.post('scheduling', {
            id: uuid(),
            ...data,
            createdAt: new Date(),
        })

        navigate('/schedulingHDH')
        reset()
    }


    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <img className='relative h-52 justify-center items-center' src={logo} alt="" />
                <p
                    className='relative text-white font-bold text-2xl text-center'>
                    GoodBlood
                </p>
                <p
                    className='relative text-white font-semibold text-sm text-center'
                >
                    Doe sangue, doe vida!
                </p>
                <p className="text-[#00FFFF] text-3xl pt-6">Obrigado por Participar! </p>
                <p className="text-white text-xl">Agora iremos fazer algumas perguntas para que facilite a triagem!</p>
                <p className="text-[#00FFFF] text-5xl pt-6">Agendamento</p>
            </div>
            <div className="content-center h-screen">
                <form
                    className='absolute p-10 grid grid-cols-4 gap-5' action=""
                    onSubmit={handleSubmit(createScheduling)}
                >

                    <div className="flex flex-col gap-2">
                        <label
                            className='text-white font-bold text-sm' htmlFor=""
                        // eslint-disable-next-line react/prop-types
                        >Qual é seu genêro?</label>
                        <input
                            className='border border-zinc-200 shadow-sm rounded w-64 h-7'
                            type="text"
                            {...register('gender')}
                        />
                        {errors.gender && <span className='text-white text-xs'>{errors.gender.message}</span>}

                    </div>


                    <div className="flex flex-col gap-2">
                        <label
                            className='text-white font-bold text-sm' htmlFor=""
                        // eslint-disable-next-line react/prop-types
                        >Qual é seu peso?</label>
                        <input
                            className='border border-zinc-200 shadow-sm rounded w-64 h-7'
                            type="text"
                            {...register('weight')}

                        />
                        {errors.weight && <span className='text-white text-xs'>{errors.weight.message}</span>}
                    </div>

                    <div className="flex flex-col gap-2">
                        <label
                            className='text-white font-bold text-sm' htmlFor=""
                        // eslint-disable-next-line react/prop-types
                        >Qual é sua altura?</label>
                        <input
                            className='border border-zinc-200 shadow-sm rounded w-64 h-7'
                            type="text"
                            {...register('height')}
                        />
                        {errors.height && <span className='text-white text-xs'>{errors.height.message}</span>}
                    </div>

                    <div className="flex flex-col gap-2">
                        <label
                            className='text-white font-bold text-sm' htmlFor=""
                        // eslint-disable-next-line react/prop-types
                        >Qual é sua idade?</label>
                        <input
                            className='border border-zinc-200 shadow-sm rounded w-64 h-7'
                            type="text"
                            {...register('age')}
                        />
                        {errors.age && <span className='text-white text-xs'>{errors.age.message}</span>}
                    </div>

                    <div className="flex flex-col gap-2">
                        <label
                            className='text-white font-bold text-sm' htmlFor=""
                        // eslint-disable-next-line react/prop-types
                        >Teve gripe, febre ou resfriado nos últimos 7 dias?</label>
                        <input
                            className='border border-zinc-200 shadow-sm rounded w-64 h-7'
                            type="text"
                            {...register('influenza_fever')}
                        />
                        {errors.influenza_fever && <span className='text-white text-xs'>{errors.influenza_fever.message}</span>}
                    </div>

                    <div className="relative flex flex-col gap-2 top-5">
                        <label
                            className='text-white font-bold text-sm' htmlFor=""
                        // eslint-disable-next-line react/prop-types
                        >Fez tatuagem nos últimos 6 meses?</label>
                        <input
                            className='border border-zinc-200 shadow-sm rounded w-64 h-7'
                            type="text"
                            {...register('got_tattoo')}
                        />
                        {errors.got_tattoo && <span className='text-white text-xs'>{errors.got_tattoo.message}</span>}
                    </div>

                    <div className="flex flex-col gap-2">
                        <label
                            className='text-white font-bold text-sm' htmlFor=""
                        // eslint-disable-next-line react/prop-types
                        >Quantas vezes fez doação de sangue esse ano?</label>
                        <input
                            className='border border-zinc-200 shadow-sm rounded w-64 h-7'
                            type="text"
                            {...register('blood_donation')}
                        />
                        {errors.blood_donation && <span className='text-white text-xs'>{errors.blood_donation.message}</span>}
                    </div>

                    <div className="flex flex-col gap-2">
                        <label
                            className='text-white font-bold text-sm' htmlFor=""
                        // eslint-disable-next-line react/prop-types
                        >Ingeriu bebida alcóolica nas últimas 12 horas?</label>
                        <input
                            className='border border-zinc-200 shadow-sm rounded w-64 h-7'
                            type="text"
                            {...register('alcoholic_beverage')}
                        />
                        {errors.alcoholic_beverage && <span className='text-white text-xs'>{errors.alcoholic_beverage.message}</span>}
                    </div>

                    <div className="flex flex-col gap-2">
                        <label
                            className='text-white font-bold text-sm' htmlFor=""
                        // eslint-disable-next-line react/prop-types
                        >Fez extração dentária nas últimas 72 horas?</label>
                        <input
                            className='border border-zinc-200 shadow-sm rounded w-64 h-7'
                            type="text"
                            {...register('dental_extraction')}
                        />
                        {errors.dental_extraction && <span className='text-white text-xs'>{errors.dental_extraction.message}</span>}
                    </div>

                    <div className='relative flex items-center justify-center top-7 left-80'>
                        <button
                            type="submit"
                            className='relative bg-red-500 rounded font-semibold text-white md:h-8 hover:bg-red-600 w-[15rem] top-16 right-36'
                        >Próxima Etapa</button>
                    </div>

                </form>

            </div>
        </>
    )
}