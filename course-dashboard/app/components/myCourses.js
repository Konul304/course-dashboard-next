import React from 'react';
import "../css/myCourses.css"
import Image from 'next/image';
import top1 from "../../public/images/flex1top.svg"
import top2 from "../../public/images/top2.svg"
import top3 from "../../public/images/top3.svg"
import top4 from "../../public/images/top4.svg"
import bottom1 from "../../public/images/bottom1.svg"
import bottom2 from "../../public/images/bottom2.svg"
import bottom3 from "../../public/images/bottom3.svg"
import bottom4 from "../../public/images/bottom4.svg"

const MyCourses = () => {
    return (
        <>
            <div className='mt-3'>
                <div className='d-flex '>
                    <div className='flex flex1'>
                        <Image className='top1' src={top1} alt='topShape' />
                        <Image className='bottom1' src={bottom1} alt='topShape' />
                    </div>
                    <div className='flex flex2'>
                        <Image className='top2 ' src={top2} alt='topShape' />
                        <Image className='bottom2' src={bottom2} alt='topShape' />
                    </div>
                </div>
                <div className='d-flex'>
                    <div className='flex flex3'>
                        <Image className='top3' src={top3} alt='topShape' />
                        <Image className='bottom3' src={bottom3} alt='topShape' />
                    </div>
                    <div className='flex flex4'>
                        <Image className='top4' src={top4} alt='topShape' />
                        <Image className='bottom4' src={bottom4} alt='topShape' />
                    </div>
                </div>
            </div>
        </>
    );
}

export default MyCourses;
