import { ConfirmButton } from "./button";
import { CancelButton } from "./button";
import XIcon from '/x.svg'

export default function PopUp(){
    return(
        <>
            <div className="w-[688px] h-[310px] bg-white rounded-lg overflow-hidden shadow-md">
                <div className="bg-Green_base h-[83px] w-full flex justify-between items-center">
                    <h1 className="text-white text-2xl px-10">ADD DESIGNATION</h1>
                    <img src={XIcon} alt="" className="w-[48px] h-[48px] m-5"/>
                </div>
                <div className="mx-10 my-5">
                    <form action="" >
                        <label htmlFor="">
                            <span className="font-bold text-[16px] block">DESIGNATION TITLE:</span>
                            <input type="text" className="p-2 h-[44px] text-[16px] outline outline-1 w-full rounded-md"/>
                        </label>
                        <label htmlFor="">
                            <span className="font-bold text-[16px] block pt-2">BASIC SALARY:</span>
                            <input type="text" className="p-2 h-[44px] text-[16px] outline outline-1 w-full rounded-md"/>
                        </label>
                    </form>
                </div>
                <div className="flex justify-end flex-row gap-5 px-10">
                    <CancelButton></CancelButton>
                    <ConfirmButton></ConfirmButton>
                </div>
            </div>
            
        </>
    );
}