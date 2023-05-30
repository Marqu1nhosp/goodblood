import * as Dialog from '@radix-ui/react-dialog';
import { NavLink } from 'react-router-dom';
import { X } from '@phosphor-icons/react'

export default function DialogUserCompany() {
    return (
        <Dialog.Portal>
            <Dialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0" />
            <Dialog.Content className="bg-[#801216] data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] lg:w-[90vw] max-w-[400px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                <Dialog.Title className="text-mauve12 m-0 lg:text-[17px] lg:font-medium text-center text-white">
                    Selecione o seu Cadastro!
                </Dialog.Title>
                <Dialog.Description className="text-mauve11 mt-[10px] lg:mb-5 lg:text-[15px] leading-normal">

                </Dialog.Description>
                <div className="flex gap-12 justify-center items-center">
                    <NavLink to="/userRegistration">
                        <button
                            className='bg-white rounded font-semibold text-black h-14 w-40 hover:bg-red-600'
                        > Usuário</button> </NavLink>
                   <NavLink to="/userCompany">
                        <button
                            className='bg-white rounded font-semibold text-black h-14 w-40 hover:bg-red-600'
                        > Empresa</button> </NavLink>
                </div>
                <Dialog.Close asChild>
                    <button
                        className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                        aria-label="Close"
                    >
                        <X color='white'/>
                    </button>
                </Dialog.Close>
            </Dialog.Content>
        </Dialog.Portal>

    )
}