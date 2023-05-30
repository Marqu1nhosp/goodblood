import { useForm, Controller } from 'react-hook-form';
import logo from '../../assets/logo.png'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Calendar } from '@phosphor-icons/react';
import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR';
import { api } from '../../lib/axios';
import { v4 as uuid } from 'uuid'
import { useNavigate } from 'react-router-dom';
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';


const createSchedulingFormScheduling = z.object({
    hospitalsSelect: z.string().nonempty('O hospital é obrigatório'),
    dateSchedulingHour: z.date(),
})

export function SchedulingHourDateHospital() {
    const navigate = useNavigate()

    const { register, handleSubmit, control, formState: {
        errors
    } } = useForm({resolver: zodResolver(createSchedulingFormScheduling)})

   async function CreateSchedulingHourDate(data) {
        //Desestruturação, peguei só o campo da data 
        const { dateSchedulingHour } = data
     
        //Formatando a data
        const DateSchedulingHourFormat = format(
            dateSchedulingHour, 
            "'Dia' dd 'de' MMMM', às ' HH:mm'h'",
            { locale: ptBR }
          );

          await api.post('schedulingHourDate', {
            id: uuid(),
            ...data,
            DateSchedulingHourFormat,
            createdAt: new Date(),
        })

        navigate('/commonQuestions')
        
    }


    return (
        <div className="relative top-5 flex flex-col justify-center items-center gap-7">
            <div className="flex flex-col justify-center items-center">
                <img className='relative h-28' src={logo} alt="" />
                <p
                    className='relative text-white font-bold text-xl text-center'>
                    GoodBlood
                </p>
                <p
                    className='relative text-white font-semibold lg:text-sm text-center'
                >
                    Doe sangue, doe vida!
                </p>
                  <h1 className="relative text-[#00FFFF] text-xl top-2">
                            Agende sua data e seu horário para a doação de sangue!
                   </h1>
                  
            </div>

            <div className="bg-white rounded-lg h-[19rem] w-[30rem]">
                <div className='flex flex-col'>
                    
                    <form action="" onSubmit={handleSubmit(CreateSchedulingHourDate)}>
                        <div className="relative top-10 w-64 left-28">
                            <select className="py-3 px-4 pr-9 block w-full border-4 border-red-700 rounded-full text-sm"
                                {...register('hospitalsSelect', {validate: (value) => {
                                    return value != "0";
                                 }})}
                            >
                                <option selected value="0">Selecione um Hospital</option>
                                <option value="Hospital de Base | Endereço: Av. Filipinas, S/n ">Hospital de Base | Endereço: Av. Filipinas, S/n </option>
                                <option value="IBR | Endereço: R. Góes Calmon, 235 - Centro">IBR | Endereço: R. Góes Calmon, 235 - Centro</option>
                                <option value="IBR | Endereço: R. Góes Calmon, 235 - Centro">Hospital São Vicente de Paulo | Endereço: Praça Hercílio Lima, 95 - Centro</option>
                            </select>
                            {errors.hospitalsSelect && <span className='text-black text-xs'>{errors.hospitalsSelect.message}</span>}
                        </div>
                       
                        <div className="relative left-28 top-20">
                            <div className="flex flex-col gap-2">
                                <label className="font-semibold leading-tight text-base" htmlFor="">Selecione uma data e um horário: </label>
                                
                                <Controller
                                    control={control}
                                    name="dateSchedulingHour"
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <div className="flex justify-between">
                                            <div>
                                                <DatePicker
                                                    onChange={onChange}
                                                    onBlur={onBlur}
                                                    selected={value}
                                                    locale={ptBR}
                                                    showTimeSelect
                                                    dateFormat="dd/MM/yyyy"
                                                    className='rounded-lg w-64 border-4 border-red-700 text-black placeholder:text-black' />
                                                    {errors.dateSchedulingHour && <span className='text-black text-xs'>Selecione uma data e um horário</span>}
                                            </div>
                                            <div className="relative right-[230px] top-1">
                                                <Calendar size={24} />
                                            </div>
                                            
                                        </div>
                                    )}
                                />

                            </div>
                        </div>

                        <div className='relative left-40 top-32'>
                            <button
                                type="submit"
                                className='relative bg-red-500 rounded font-semibold text-white md:h-8 hover:bg-red-600 w-[10rem]'
                            >Agendar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}