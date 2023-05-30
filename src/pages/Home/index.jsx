import doando from '../../assets/doando.png'

import { useForm } from "react-hook-form";
import * as Dialog from '@radix-ui/react-dialog';
import DialogUserCompany from '../../components/DialogUserCompany';
import Logo from '../../components/Logo';
import { api } from '../../lib/axios';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Button from '../../components/Button';

import { Eye, EyeSlash} from '@phosphor-icons/react'


export default function Home() {
    // const [output, setOutput] = useState('')
    const [visible, setVisible] = useState(false)
    const [users, setUser] = useState('')
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm()

    useEffect(() => {
        api.get('users').then(({ data }) => {
            setUser(data)
        })
    }, [])

    async function handleSignIn(data) {
        const { email, password } = data
        console.log(data)
        users.map(((user) => {
            console.log(user)
            if (user.email === email && user.password === password) {
                navigate('/scheduling')
            }
        }))

    }

    return (
        <div className='w-absolute lg:flex lg:justify-between'>
            <img className='relative lg:top-9 lg:w-8/12 h-3/4' src={doando} alt="" />
            <div className='grid grid-cols-1 gap-2 content-around'>
                <Logo />
                <div className='lg:relative right-14'>
                    <form
                        onSubmit={handleSubmit(handleSignIn)}
                        className='flex flex-col gap-4' action="">

                        <div className='flex flex-col gap-3 items-center'>

                            <div className='flex flex-col gap-1'>
                                <label
                                    className='text-white font-bold text-sm' htmlFor=""
                                >Login</label>
                                <input
                                    className='border border-zinc-200 shadow-sm rounded w-[15rem] h-8'
                                    type="email"
                                    {...register('email')}
                                />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label className='text-white font-bold text-sm' htmlFor="">Senha</label>
                                <input
                                    className='border border-zinc-200 shadow-sm rounded w-[15rem] h-8'
                                    type={visible ? "text" : "password"} 
                                    {...register('password')}
                                />
                                <div className="relative ml-[215px] bottom-7" onClick={() => setVisible(!visible)}>
                                    { visible ? <Eye/> : <EyeSlash/>}     
                                </div>
                            </div>

                       

                        <div className='relative flex flex-col bottom-5'>
                            <Button name='Entrar' />
                        </div>

                        </div>
                        <a
                            className='text-white text-center'
                            href=""
                        >Esqueceu a senha?</a>
                        <Dialog.Root>
                            <Dialog.Trigger asChild>
                                <p className='text-white text-center'>Não tem uma conta?
                                    <button className='text-[#121AEA]'>
                                        Cadastre-se
                                    </button>
                                </p>
                            </Dialog.Trigger>
                            <DialogUserCompany />
                        </Dialog.Root>

                    </form>
                    <pre>

                    </pre>
                </div>
            </div>
        </div >
    )
}


