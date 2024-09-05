import React from "react";
function Header() {
    return (
        <div className="flex h-[55px] items-center ">
            <img className="absolute left-10" src="\nike.png" alt=""></img>

            <div className="space-x-11 mr-auto ml-auto ">
                <button type="">MENU</button>
                <button type="">LOCATION</button>
                <button type="">ABOUT</button>
                <button type="">CONTACT</button>
            </div>


            <button className="absolute right-10 bg-red-500 w-20" type="">Login</button>

        </div>
    );
}
export default Header;