function Button(props) {

    return ( 
        <button className={`relative p-2 text-xl border w-40 font-medium rounded-[10px] cursor-pointer transition-colors duration-500
                         hover:bg-white hover:text-black max-sm:bg-white max-sm:text-black  ${props.className} `}>
            {props.name}
        </button>
     );
}

export default Button;