

export default function LogInForm(){
    return(
        <>
        <div className="shadow-black shadow-sm w-[611px] h-[696px] bg-white flex justify-center items-center flex-col">
            <h1 className="text-[36px] font-extrabold">LOG IN FORM</h1>
            <form action="" className="flex flex-col items-center">
                <label htmlFor="">
                    <span className="block text-2xl">Username:</span>
                    <input type="text" className="outline w-[485.01px] rounded-[5px] outline-1 text-2xl"/>
                </label>
                <label htmlFor="">
                    <span className="block text-2xl">Password:</span>
                    <input type="text" className="outline w-[485.01px] rounded-[5px] outline-1 text-2xl"/>
                </label>
                <label htmlFor="">
                    <span className="block text-2xl">Organization:</span>
                    <select name="Login" id="" className="outline w-[485.01px] rounded-[5px] outline-1 text-2xl ">
                        <option value="">Admin</option>
                        <option value="">Employee</option>
                    </select>
                </label>
                <label htmlFor="" >
                    <input type="button" value="LOG IN" className="m-5 bg-Green_base w-[485.01px] h-[66px] text-white rounded-md "/>
                </label>
            </form>
        </div>
        </>
    );
}