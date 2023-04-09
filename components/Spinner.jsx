import react from "react";
import Image from "next/image";
import spinnerimg from '../public/spinner.gif'
const Spinner = ({data}) => {
    console.log(data);
    return (
        <>
            <Image className="w-[200px] m-auto block" alt="loading...." src={spinnerimg} />
        </>
    )
}

export default Spinner