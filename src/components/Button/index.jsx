/* eslint-disable react/prop-types */
export default function Button(props) {
    return (
        <div>
            <button
                type="submit"
                className='bg-red-500 rounded font-semibold text-white h-8 hover:bg-red-600 w-[15rem]'
            >{props.name}</button>
        </div>
    )
}