import logo from '../../assets/logo.png'

export default function Logo() {
    return (
        <div className='relative lg:right-14 flex flex-col items-center lg:justify-center'>
            <img className='relative h-52' src={logo} alt="" />
            <p
                className='relative text-white font-bold text-2xl text-center'>
                GoodBlood
            </p>
            <p
                className='relative text-white font-semibold lg:text-sm text-center'
            >
                Doe sangue, doe vida!
            </p>
        </div>
    )
}