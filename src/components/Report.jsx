
function MiniStatus({percentage, quarter}){
    return (
        <div className="flex flex-row">
            <img src="https://placehold.co/16x16" alt="" />
            <p className="text-[12px]"><span className="text-green-600">{percentage}</span> since last {quarter}</p>
        </div>
    );
}

export default function Report({cardName="Card Name", cardValue="Value", percentage="100%", period="quarter", StatusIcon ="https://placehold.co/90x90"}){
    return(
        <div className="border-l-[12px] border-Green_Button py-5 pr-5 pl-[8px] flex justify-around items-start w-[338px] shadow-md h-[182px] bg-Status_BG rounded-sm">
            <div className="flex flex-col gap-3">
                <h1 className="text-[20px]">{cardName}</h1>
                <h1 className="text-[42px]">{cardValue}</h1>
                <MiniStatus percentage={percentage} quarter={period}></MiniStatus>
            </div>
            <img src={StatusIcon} alt="" className="w-[90px]"/>
        </div>
    );
}