function Body() {
    return (
        <div className="mt-[100px] mr-auto ml-auto flex justify-center items-center w-[80vw] ">
            <div className="flex flex-col float-left  ">
                <span className="text-[400%]" >YOUR FEET DESERVES THE BEST</span>
                <span>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</span>
                <div className="flex space-x-10 mt-[40px] ">
                    <button className="w-40 text-xl border border-black bg-red-500" type="">Shop now</button>
                    <button className="w-40 text-xl border border-black" type="">Catogary</button>
                </div>
                <div className="mt-[10px] flex flex-col items-start ">
                    <span>Also available on</span>
                    <span>amazon</span>
                </div>

            </div>

            <img className="float-right" src="\shoe.png" alt="" />
        </div>

    )
}
export default Body;