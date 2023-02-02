import React from 'react';

const AccountHeader = () => {
    return (
        <div className="relative h-[200px] text-center">
            <div
                className="absolute left-0 top-0 h-full w-full flex justify-center items-end bg-gradient-to-t from-black">
            </div>
            <img className="h-full w-full object-cover" src={`/images/footer.png`} alt={'header'}/>
        </div>
    );
};

export default AccountHeader;