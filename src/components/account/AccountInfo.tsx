import React from 'react';
import {Account} from "../../types/Account";

interface AccountInfoProps {
    accountInfo: Account
}

const AccountInfo = ({accountInfo}: AccountInfoProps) => {
    return (
        <div className="flex relative z-50 justify-center flex-row max-w-[1260px] mb-20 mx-auto mt-[-100px]">
            <div className="h-[200px] w-[200px]">
                <img
                    className="hidden xl:block xl:h-full xl:w-ful object-cover rounded-full"
                    src={accountInfo.avatar?.tmdb?.avatar_path ? `https://image.tmdb.org/t/p/original${accountInfo.avatar.tmdb.avatar_path}` : '/images/profile.png'}
                    alt={'avatar'}/>
            </div>
            <div className="flex flex-col justify-center ml-5 gap-y-12">
                <p className="text-white text-6xl font-bold self-start">{accountInfo.username || accountInfo.name}</p>
            </div>
        </div>
    );
};

export default AccountInfo;