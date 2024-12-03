import { useState } from "react";

function Badge({ category }) {
    return (
        <span className="bg-[#FFE0DF] text-[#EF8481] text-sm font-medium px-4 py-2 rounded-full shadow-md">
            {category}
        </span>
    );
}

export default function Chapter() {
    const [view, setView] = useState("manga");

    const chapters = [
        {

            title: 'Alice in Borderland',
            cover_photo: 'https://i.postimg.cc/PqQHYqrL/main-alice-in-borderland.jpg',
            description: 'Arisu Ryouhei will be leaving high school soon, but he tries to avoid thinking about his future. One night, when he is with his partner Karube and his friend Chouta, they see some fireworks. After a blinding explosion, they wake up in another world, called Borderland. Here people are forced to participate in violent games, where the participants must fight to survive. Will Arisu, Karube and Chouta be able to survive in this dangerous new world and find their way back to their true world?',
            category_id: 'shonen',
            author_id: 'alejandro',
            chapters: [
                {
                    title: 'Welcome - part 1',
                    pages: ['https://i.postimg.cc/q76GttJr/alice-in-borderland-001-01.jpg', 'https://i.postimg.cc/c41MRkxX/alice-in-borderland-001-02.jpg', 'https://i.postimg.cc/wvhcVSRb/alice-in-borderland-001-03.jpg', 'https://i.postimg.cc/Zn4PDVrY/alice-in-borderland-001-04.jpg', 'https://i.postimg.cc/SNZLDLjq/alice-in-borderland-001-05.jpg', 'https://i.postimg.cc/GmHFNBsD/alice-in-borderland-001-06.jpg', 'https://i.postimg.cc/nVGGQfJX/alice-in-borderland-001-07.jpg', 'https://i.postimg.cc/QCmgL1bQ/alice-in-borderland-001-08.jpg', 'https://i.postimg.cc/JzvNW1b2/alice-in-borderland-001-09.jpg', 'https://i.postimg.cc/8k4LzdRW/alice-in-borderland-001-10.jpg', 'https://i.postimg.cc/SNKC2XdP/alice-in-borderland-001-11.jpg', 'https://i.postimg.cc/BnrKVm3W/alice-in-borderland-001-12.jpg', 'https://i.postimg.cc/g03ZF3cx/alice-in-borderland-001-13.jpg', 'https://i.postimg.cc/zB5RJ330/alice-in-borderland-001-14.jpg', 'https://i.postimg.cc/4y2Kb5PS/alice-in-borderland-001-15.jpg', 'https://i.postimg.cc/fyRt9Fcd/alice-in-borderland-001-16.jpg', 'https://i.postimg.cc/QtbKVsTs/alice-in-borderland-001-17.jpg', 'https://i.postimg.cc/kMTtmJCv/alice-in-borderland-001-18.jpg', 'https://i.postimg.cc/TYh52zYM/alice-in-borderland-001-19.jpg', 'https://i.postimg.cc/9FSRDLr4/alice-in-borderland-001-20.jpg', 'https://i.postimg.cc/4x9KVp9W/alice-in-borderland-001-21.jpg', 'https://i.postimg.cc/1z18H40s/alice-in-borderland-001-22.jpg', 'https://i.postimg.cc/CLZdpbmw/alice-in-borderland-001-23.jpg', 'https://i.postimg.cc/mr3t6RVM/alice-in-borderland-001-24.jpg', 'https://i.postimg.cc/nzHMy5wW/alice-in-borderland-001-25.jpg', 'https://i.postimg.cc/c4VCx6bw/alice-in-borderland-001-26.jpg', 'https://i.postimg.cc/cHX60mpL/alice-in-borderland-001-27.jpg', 'https://i.postimg.cc/qqqqRKrX/alice-in-borderland-001-28.jpg', 'https://i.postimg.cc/fWqkP87H/alice-in-borderland-001-29.jpg', 'https://i.postimg.cc/6qP3GQ5s/alice-in-borderland-001-30.jpg', 'https://i.postimg.cc/dVr1LvbX/alice-in-borderland-001-31.jpg'],
                    order: 1,
                }, {
                    title: 'Welcome - part 2',
                    pages: ['https://i.postimg.cc/jScjzvjQ/alice-in-borderland-002-01.jpg', 'https://i.postimg.cc/rppwgW06/alice-in-borderland-002-02.jpg', 'https://i.postimg.cc/pd1XSTzm/alice-in-borderland-002-03.jpg', 'https://i.postimg.cc/VLjvNzQh/alice-in-borderland-002-04.jpg', 'https://i.postimg.cc/8zN5JxTz/alice-in-borderland-002-05.jpg', 'https://i.postimg.cc/vBgHwst3/alice-in-borderland-002-06.jpg', 'https://i.postimg.cc/Bb2StByF/alice-in-borderland-002-07.jpg', 'https://i.postimg.cc/nzyVHPdZ/alice-in-borderland-002-08.jpg', 'https://i.postimg.cc/G3DhMb2p/alice-in-borderland-002-09.jpg', 'https://i.postimg.cc/9FjXKsRY/alice-in-borderland-002-10.jpg', 'https://i.postimg.cc/X7cNbx9S/alice-in-borderland-002-11.jpg', 'https://i.postimg.cc/rwVVFW9d/alice-in-borderland-002-12.jpg', 'https://i.postimg.cc/9M7VNBck/alice-in-borderland-002-13.jpg', 'https://i.postimg.cc/6pM973HM/alice-in-borderland-002-14.jpg', 'https://i.postimg.cc/TPSf9svm/alice-in-borderland-002-15.jpg', 'https://i.postimg.cc/bvdq1hWp/alice-in-borderland-002-16.jpg', 'https://i.postimg.cc/j2YKVJ5S/alice-in-borderland-002-17.jpg', 'https://i.postimg.cc/Kj7bmvkr/alice-in-borderland-002-18.jpg', 'https://i.postimg.cc/SQck6VT2/alice-in-borderland-002-19.jpg', 'https://i.postimg.cc/X733QFm2/alice-in-borderland-002-20.jpg', 'https://i.postimg.cc/BQg3ybGJ/alice-in-borderland-002-21.jpg', 'https://i.postimg.cc/Jzz8W81Z/alice-in-borderland-002-22.jpg', 'https://i.postimg.cc/Mp3S6LT4/alice-in-borderland-002-23.jpg'],
                    order: 2,
                }, {
                    title: '3 of clubs - part 1',
                    pages: ['https://i.postimg.cc/QC84WXYq/alice-in-borderland-003-01.jpg', 'https://i.postimg.cc/5ysPBZZW/alice-in-borderland-003-02.jpg', 'https://i.postimg.cc/5t8n7HZ3/alice-in-borderland-003-03.jpg', 'https://i.postimg.cc/W1B5wmfz/alice-in-borderland-003-04.jpg', 'https://i.postimg.cc/15z7m3qm/alice-in-borderland-003-05.jpg', 'https://i.postimg.cc/VLHGdPqj/alice-in-borderland-003-06.jpg', 'https://i.postimg.cc/7ZGBzt9j/alice-in-borderland-003-07.jpg', 'https://i.postimg.cc/qBwZH3gD/alice-in-borderland-003-08.jpg', 'https://i.postimg.cc/PxhKBXHk/alice-in-borderland-003-09.jpg', 'https://i.postimg.cc/KzNQb6c3/alice-in-borderland-003-10.jpg', 'https://i.postimg.cc/kGgsgTD1/alice-in-borderland-003-11.jpg', 'https://i.postimg.cc/QCYb9cTX/alice-in-borderland-003-12.jpg', 'https://i.postimg.cc/ZK0jksG0/alice-in-borderland-003-13.jpg', 'https://i.postimg.cc/MZ9tFJrh/alice-in-borderland-003-14.jpg', 'https://i.postimg.cc/jd9cRQTc/alice-in-borderland-003-15.jpg', 'https://i.postimg.cc/CxqN5BLg/alice-in-borderland-003-16.jpg', 'https://i.postimg.cc/CKp4qhzf/alice-in-borderland-003-17.jpg', 'https://i.postimg.cc/PqbQbgwV/alice-in-borderland-003-18.jpg', 'https://i.postimg.cc/qRkX11cJ/alice-in-borderland-003-19.jpg', 'https://i.postimg.cc/NMp8SRb1/alice-in-borderland-003-20.jpg', 'https://i.postimg.cc/mkk3sh6K/alice-in-borderland-003-21.jpg', 'https://i.postimg.cc/9XgtBtD2/alice-in-borderland-003-22.jpg', 'https://i.postimg.cc/8cYRPD2c/alice-in-borderland-003-23.jpg', 'https://i.postimg.cc/657Vb2Zv/alice-in-borderland-003-24.jpg', 'https://i.postimg.cc/Fs2yMrbn/alice-in-borderland-003-25.jpg', 'https://i.postimg.cc/7Z03DFmP/alice-in-borderland-003-26.jpg', 'https://i.postimg.cc/d0F805x2/alice-in-borderland-003-27.jpg', 'https://i.postimg.cc/k5yWRW0k/alice-in-borderland-003-28.jpg', 'https://i.postimg.cc/FRs3y7m1/alice-in-borderland-003-29.jpg', 'https://i.postimg.cc/xCxHtnT5/alice-in-borderland-003-30.jpg', 'https://i.postimg.cc/Gt4DfV4C/alice-in-borderland-003-31.jpg', 'https://i.postimg.cc/HWNXMYNs/alice-in-borderland-003-32.jpg', 'https://i.postimg.cc/28Bv7ppd/alice-in-borderland-003-33.jpg', 'https://i.postimg.cc/fRndHHZG/alice-in-borderland-003-34.jpg', 'https://i.postimg.cc/Mp7Qgypv/alice-in-borderland-003-35.jpg', 'https://i.postimg.cc/zfqgNVyp/alice-in-borderland-003-36.jpg', 'https://i.postimg.cc/g0462mRp/alice-in-borderland-003-37.jpg', 'https://i.postimg.cc/Kzz3KwrM/alice-in-borderland-003-38.jpg', 'https://i.postimg.cc/Y9sGQRby/alice-in-borderland-003-39.jpg', 'https://i.postimg.cc/WzqD8Zyp/alice-in-borderland-003-40.jpg', 'https://i.postimg.cc/BtWjV6WT/alice-in-borderland-003-41.jpg', 'https://i.postimg.cc/J7sKv2V0/alice-in-borderland-003-42.jpg'],
                    order: 3,
                }, {
                    title: '3 of clubs - part 2',
                    pages: ['https://i.postimg.cc/B6XcWXzk/alice-in-borderland-004-01.jpg', 'https://i.postimg.cc/JhTcdbpj/alice-in-borderland-004-02.jpg', 'https://i.postimg.cc/mk9YDKBS/alice-in-borderland-004-03.jpg', 'https://i.postimg.cc/Ss3LmmFs/alice-in-borderland-004-04.jpg', 'https://i.postimg.cc/RVr18CLp/alice-in-borderland-004-05.jpg', 'https://i.postimg.cc/SQY7DYCz/alice-in-borderland-004-06.jpg', 'https://i.postimg.cc/3JgjHML8/alice-in-borderland-004-07.jpg', 'https://i.postimg.cc/y8sm1f5F/alice-in-borderland-004-08.png', 'https://i.postimg.cc/vZhWcrFC/alice-in-borderland-004-09.png', 'https://i.postimg.cc/VNNXMJzv/alice-in-borderland-004-10.png', 'https://i.postimg.cc/pd1zBPdZ/alice-in-borderland-004-11.png', 'https://i.postimg.cc/tTZPS8ZH/alice-in-borderland-004-12.png', 'https://i.postimg.cc/4dDcrwVH/alice-in-borderland-004-13.png', 'https://i.postimg.cc/DfGLqk3r/alice-in-borderland-004-14.png', 'https://i.postimg.cc/T1nbGmJ7/alice-in-borderland-004-15.jpg', 'https://i.postimg.cc/28fvGcCP/alice-in-borderland-004-16.jpg', 'https://i.postimg.cc/dtmCx21D/alice-in-borderland-004-17.jpg', 'https://i.postimg.cc/rwV4XD0j/alice-in-borderland-004-18.jpg', 'https://i.postimg.cc/SxgMymch/alice-in-borderland-004-19.jpg', 'https://i.postimg.cc/k5DtGLyt/alice-in-borderland-004-20.jpg', 'https://i.postimg.cc/9fSw71xg/alice-in-borderland-004-21.jpg', 'https://i.postimg.cc/gJZXqRQz/alice-in-borderland-004-22.jpg', 'https://i.postimg.cc/Rhx3Phxc/alice-in-borderland-004-23.jpg', 'https://i.postimg.cc/6qV8FKBF/alice-in-borderland-004-24.jpg', 'https://i.postimg.cc/jqynDHyv/alice-in-borderland-004-25.jpg', 'https://i.postimg.cc/dtvkrhBF/alice-in-borderland-004-26.jpg', 'https://i.postimg.cc/3JByB3Sv/alice-in-borderland-004-27.jpg', 'https://i.postimg.cc/jSSD3Bmk/alice-in-borderland-004-28.jpg', 'https://i.postimg.cc/XY1pRQ0N/alice-in-borderland-004-29.jpg', 'https://i.postimg.cc/SKXJkCy6/alice-in-borderland-004-30.jpg', 'https://i.postimg.cc/3wPWRNRP/alice-in-borderland-004-31.jpg', 'https://i.postimg.cc/KzBjgb34/alice-in-borderland-004-32.jpg', 'https://i.postimg.cc/gjK0NKDW/alice-in-borderland-004-33.jpg', 'https://i.postimg.cc/j2T5H1yc/alice-in-borderland-004-34.jpg', 'https://i.postimg.cc/9XPzmWjn/alice-in-borderland-004-35.jpg', 'https://i.postimg.cc/Fs9z12rs/alice-in-borderland-004-36.jpg', 'https://i.postimg.cc/WbX3ZXzm/alice-in-borderland-004-37.jpg'],
                    order: 4,
                }, {
                    title: 'visa',
                    pages: ['https://i.postimg.cc/DZrfwcRX/alice-in-borderland-005-01.jpg', 'https://i.postimg.cc/0QR2v4Xv/alice-in-borderland-005-02.jpg', 'https://i.postimg.cc/3N384vHb/alice-in-borderland-005-03.jpg', 'https://i.postimg.cc/gj4Yv2zc/alice-in-borderland-005-04.jpg', 'https://i.postimg.cc/jqhdVZHV/alice-in-borderland-005-05.jpg', 'https://i.postimg.cc/288jChG1/alice-in-borderland-005-06.jpg', 'https://i.postimg.cc/BQYSbb7M/alice-in-borderland-005-07.jpg', 'https://i.postimg.cc/HkrpymfH/alice-in-borderland-005-08.jpg', 'https://i.postimg.cc/TPmft9d4/alice-in-borderland-005-09.jpg', 'https://i.postimg.cc/50V1TCjN/alice-in-borderland-005-10.jpg', 'https://i.postimg.cc/50S1V2F5/alice-in-borderland-005-11.jpg', 'https://i.postimg.cc/Y027qB15/alice-in-borderland-005-12.jpg', 'https://i.postimg.cc/L5ypJQDn/alice-in-borderland-005-13.jpg', 'https://i.postimg.cc/Df5Fpmhn/alice-in-borderland-005-14.jpg', 'https://i.postimg.cc/15tSkPR6/alice-in-borderland-005-15.jpg', 'https://i.postimg.cc/CLQ0Ytd2/alice-in-borderland-005-16.jpg', 'https://i.postimg.cc/dVZY0ByV/alice-in-borderland-005-17.jpg', 'https://i.postimg.cc/5tcMQCBq/alice-in-borderland-005-18.jpg', 'https://i.postimg.cc/cHhqzkVX/alice-in-borderland-005-19.jpg', 'https://i.postimg.cc/q78HsvQf/alice-in-borderland-005-20.jpg', 'https://i.postimg.cc/pTRbqM1m/alice-in-borderland-005-21.jpg', 'https://i.postimg.cc/zvfmYSN5/alice-in-borderland-005-22.jpg'],
                    order: 5,
                }, {
                    title: 'second day',
                    pages: ['https://i.postimg.cc/j2f1b81p/alice-in-borderland-006-01.jpg', 'https://i.postimg.cc/Hkdhq99N/alice-in-borderland-006-02.jpg', 'https://i.postimg.cc/KzRV9cDv/alice-in-borderland-006-03.jpg', 'https://i.postimg.cc/kXrZcm6q/alice-in-borderland-006-04.jpg', 'https://i.postimg.cc/Ss3PH0gL/alice-in-borderland-006-05.jpg', 'https://i.postimg.cc/SNWP1vC8/alice-in-borderland-006-06.jpg', 'https://i.postimg.cc/T25FgwPt/alice-in-borderland-006-07.jpg', 'https://i.postimg.cc/XYLz4B2Y/alice-in-borderland-006-08.jpg', 'https://i.postimg.cc/d00S1QXm/alice-in-borderland-006-09.jpg', 'https://i.postimg.cc/SKt1zFb0/alice-in-borderland-006-10.jpg', 'https://i.postimg.cc/xCJxvx9X/alice-in-borderland-006-11.jpg', 'https://i.postimg.cc/8PVKvm9C/alice-in-borderland-006-12.jpg', 'https://i.postimg.cc/v8n2DNPj/alice-in-borderland-006-13.jpg', 'https://i.postimg.cc/hjkCpLGp/alice-in-borderland-006-14.jpg', 'https://i.postimg.cc/j2yM9DwK/alice-in-borderland-006-15.jpg', 'https://i.postimg.cc/qMXmxCHx/alice-in-borderland-006-16.jpg', 'https://i.postimg.cc/T3dt7YRM/alice-in-borderland-006-17.jpg', 'https://i.postimg.cc/NjdpWqMy/alice-in-borderland-006-18.jpg', 'https://i.postimg.cc/Zq0Vm7Bw/alice-in-borderland-006-19.jpg', 'https://i.postimg.cc/6QSzprCt/alice-in-borderland-006-20.jpg', 'https://i.postimg.cc/PxwypCMZ/alice-in-borderland-006-21.jpg', 'https://i.postimg.cc/RhxRcvPY/alice-in-borderland-006-22.jpg', 'https://i.postimg.cc/dQGnJT3c/alice-in-borderland-006-23.jpg', 'https://i.postimg.cc/6qVhcFgp/alice-in-borderland-006-24.jpg', 'https://i.postimg.cc/wTH2MTRy/alice-in-borderland-006-25.jpg', 'https://i.postimg.cc/dtBByPGW/alice-in-borderland-006-26.jpg', 'https://i.postimg.cc/wjjk5fV9/alice-in-borderland-006-27.jpg', 'https://i.postimg.cc/nhSG34RB/alice-in-borderland-006-28.jpg', 'https://i.postimg.cc/zfLS6y6M/alice-in-borderland-006-29.jpg', 'https://i.postimg.cc/bvKHhzjv/alice-in-borderland-006-30.jpg', 'https://i.postimg.cc/RFK1CjML/alice-in-borderland-006-31.jpg', 'https://i.postimg.cc/hvnLXpvW/alice-in-borderland-006-32.jpg', 'https://i.postimg.cc/3rjjs5fK/alice-in-borderland-006-33.jpg', 'https://i.postimg.cc/pX2QxG3K/alice-in-borderland-006-34.jpg', 'https://i.postimg.cc/Yqb6SNwZ/alice-in-borderland-006-35.jpg'],
                    order: 6,
                }, {
                    title: '5 of spades - part 1',
                    pages: ['https://i.postimg.cc/L8J16rDg/alice-in-borderland-007-01.jpg', 'https://i.postimg.cc/0yhJ6cXW/alice-in-borderland-007-02.jpg', 'https://i.postimg.cc/LsfgjLrH/alice-in-borderland-007-03.jpg', 'https://i.postimg.cc/Qt39mV3c/alice-in-borderland-007-04.jpg', 'https://i.postimg.cc/k4vVp9Jz/alice-in-borderland-007-05.jpg', 'https://i.postimg.cc/nrdXnkQ1/alice-in-borderland-007-06.jpg', 'https://i.postimg.cc/prV9N7yT/alice-in-borderland-007-07.jpg', 'https://i.postimg.cc/2jTbdzXB/alice-in-borderland-007-08.jpg', 'https://i.postimg.cc/MKTcdhh3/alice-in-borderland-007-09.jpg', 'https://i.postimg.cc/Hk8rCbWQ/alice-in-borderland-007-10.jpg', 'https://i.postimg.cc/CKyzMdd9/alice-in-borderland-007-11.jpg', 'https://i.postimg.cc/SKWjnqMR/alice-in-borderland-007-12.jpg', 'https://i.postimg.cc/C1S5DtGN/alice-in-borderland-007-13.jpg', 'https://i.postimg.cc/3R1RZB9H/alice-in-borderland-007-14.jpg', 'https://i.postimg.cc/prddcF15/alice-in-borderland-007-15.jpg', 'https://i.postimg.cc/C56x3xWP/alice-in-borderland-007-16.jpg', 'https://i.postimg.cc/fWHyt8Jc/alice-in-borderland-007-17.jpg', 'https://i.postimg.cc/Nf5M1RHW/alice-in-borderland-007-18.jpg', 'https://i.postimg.cc/Pr9qKNbN/alice-in-borderland-007-19.jpg', 'https://i.postimg.cc/9Q9QkV1b/alice-in-borderland-007-20.jpg', 'https://i.postimg.cc/R0zZ58DB/alice-in-borderland-007-21.jpg', 'https://i.postimg.cc/ydL1RNY1/alice-in-borderland-007-22.jpg', 'https://i.postimg.cc/652W7tsK/alice-in-borderland-007-23.jpg', 'https://i.postimg.cc/Rh3BnQDd/alice-in-borderland-007-24.jpg', 'https://i.postimg.cc/VN1mHtJs/alice-in-borderland-007-25.jpg', 'https://i.postimg.cc/RFZ9vz1j/alice-in-borderland-007-26.jpg', 'https://i.postimg.cc/fLqsLgBk/alice-in-borderland-007-27.jpg', 'https://i.postimg.cc/3NPHj0MT/alice-in-borderland-007-28.jpg', 'https://i.postimg.cc/sf8yCqMN/alice-in-borderland-007-29.jpg', 'https://i.postimg.cc/DyXhv6sy/alice-in-borderland-007-30.jpg'],
                    order: 7,
                }, {
                    title: '5 of spades - part 2',
                    pages: ['https://i.postimg.cc/DwQKszB9/alice-in-borderland-008-01.jpg', 'https://i.postimg.cc/wB6Ykdr7/alice-in-borderland-008-02.jpg', 'https://i.postimg.cc/vm3FqNRX/alice-in-borderland-008-03.jpg', 'https://i.postimg.cc/XJPM3BYC/alice-in-borderland-008-04.jpg', 'https://i.postimg.cc/d3Zb0QhS/alice-in-borderland-008-05.jpg', 'https://i.postimg.cc/4nCrHCt4/alice-in-borderland-008-06.jpg', 'https://i.postimg.cc/gcwjhvR1/alice-in-borderland-008-07.jpg', 'https://i.postimg.cc/sXxFt4sz/alice-in-borderland-008-08.jpg', 'https://i.postimg.cc/J79n5G50/alice-in-borderland-008-09.jpg', 'https://i.postimg.cc/Nfm0JBd4/alice-in-borderland-008-10.jpg', 'https://i.postimg.cc/1z5536sC/alice-in-borderland-008-11.jpg', 'https://i.postimg.cc/HLZWcxLp/alice-in-borderland-008-12.jpg', 'https://i.postimg.cc/vBCQhN9k/alice-in-borderland-008-13.jpg', 'https://i.postimg.cc/MZjZHzJS/alice-in-borderland-008-14.jpg', 'https://i.postimg.cc/nr7nPGGz/alice-in-borderland-008-15.jpg', 'https://i.postimg.cc/TYMdWBTW/alice-in-borderland-008-16.jpg', 'https://i.postimg.cc/dVnwp1r8/alice-in-borderland-008-17.jpg', 'https://i.postimg.cc/ZqR4SSxX/alice-in-borderland-008-18.jpg', 'https://i.postimg.cc/D0VTLb3K/alice-in-borderland-008-19.jpg', 'https://i.postimg.cc/MGFxZFsH/alice-in-borderland-008-20.jpg', 'https://i.postimg.cc/Y01w3qtL/alice-in-borderland-008-21.jpg', 'https://i.postimg.cc/9XTVV1yX/alice-in-borderland-008-22.jpg', 'https://i.postimg.cc/5NSVQ0PZ/alice-in-borderland-008-23.jpg', 'https://i.postimg.cc/Jz7WNLvt/alice-in-borderland-008-24.jpg', 'https://i.postimg.cc/HLVDNtpg/alice-in-borderland-008-25.jpg', 'https://i.postimg.cc/3xLQ9qQ1/alice-in-borderland-008-26.jpg'],
                    order: 8,
                }, {
                    title: '5 of spades - part 3',
                    pages: ['https://i.postimg.cc/bwV4121F/alice-in-borderland-009-01.jpg', 'https://i.postimg.cc/yYPMYGxK/alice-in-borderland-009-02.jpg', 'https://i.postimg.cc/DwwtWc4X/alice-in-borderland-009-03.jpg', 'https://i.postimg.cc/FKf8psZF/alice-in-borderland-009-04.jpg', 'https://i.postimg.cc/prvSPQty/alice-in-borderland-009-05.jpg', 'https://i.postimg.cc/N0WVzqJ6/alice-in-borderland-009-06.jpg', 'https://i.postimg.cc/k4KZr1zk/alice-in-borderland-009-07.jpg', 'https://i.postimg.cc/Wz7HzD28/alice-in-borderland-009-08.jpg', 'https://i.postimg.cc/nLQS7SFC/alice-in-borderland-009-09.jpg', 'https://i.postimg.cc/ZRt7LPnj/alice-in-borderland-009-10.jpg', 'https://i.postimg.cc/prPsw2DF/alice-in-borderland-009-11.jpg', 'https://i.postimg.cc/kGwT9kch/alice-in-borderland-009-12.jpg', 'https://i.postimg.cc/wxkfhmpc/alice-in-borderland-009-13.jpg', 'https://i.postimg.cc/HssS3kWG/alice-in-borderland-009-14.jpg', 'https://i.postimg.cc/kX1THPD2/alice-in-borderland-009-15.jpg', 'https://i.postimg.cc/T3KtMNWC/alice-in-borderland-009-16.jpg', 'https://i.postimg.cc/50VgzxKR/alice-in-borderland-009-17.jpg', 'https://i.postimg.cc/bJ9THKKN/alice-in-borderland-009-18.jpg', 'https://i.postimg.cc/SRQGZghL/alice-in-borderland-009-19.jpg', 'https://i.postimg.cc/PJ6Q01Xg/alice-in-borderland-009-20.jpg', 'https://i.postimg.cc/mZVjcWYm/alice-in-borderland-009-21.jpg', 'https://i.postimg.cc/8P5HMXwN/alice-in-borderland-009-22.jpg', 'https://i.postimg.cc/J42Qq3dJ/alice-in-borderland-009-23.jpg', 'https://i.postimg.cc/nh9Gws6W/alice-in-borderland-009-24.jpg', 'https://i.postimg.cc/YSczcr7C/alice-in-borderland-009-25.jpg', 'https://i.postimg.cc/Bvxc4rZc/alice-in-borderland-009-26.jpg', 'https://i.postimg.cc/bJp0JmsX/alice-in-borderland-009-27.jpg', 'https://i.postimg.cc/hvG98hLp/alice-in-borderland-009-28.jpg', 'https://i.postimg.cc/Rhbwg9G9/alice-in-borderland-009-29.jpg', 'https://i.postimg.cc/7PB1HM4c/alice-in-borderland-009-30.jpg'],
                    order: 9,
                }, {
                    title: '5 of spades - part 4',
                    pages: ['https://i.postimg.cc/zBGL66yf/alice-in-borderland-010-01.jpg', 'https://i.postimg.cc/KzpK2fTD/alice-in-borderland-010-02.jpg', 'https://i.postimg.cc/qq9zt7jt/alice-in-borderland-010-03.jpg', 'https://i.postimg.cc/BQKjrxn2/alice-in-borderland-010-04.jpg', 'https://i.postimg.cc/fR7JLDXL/alice-in-borderland-010-05.jpg', 'https://i.postimg.cc/mkcP29Nf/alice-in-borderland-010-06.jpg', 'https://i.postimg.cc/XY6r4prm/alice-in-borderland-010-07.jpg', 'https://i.postimg.cc/h4wJZCcS/alice-in-borderland-010-08.jpg', 'https://i.postimg.cc/k5nDRzFy/alice-in-borderland-010-09.jpg', 'https://i.postimg.cc/252yQG0N/alice-in-borderland-010-10.jpg', 'https://i.postimg.cc/ydGN5dqf/alice-in-borderland-010-11.jpg', 'https://i.postimg.cc/jdPzHVPV/alice-in-borderland-010-12.jpg', 'https://i.postimg.cc/ZnyqhS4J/alice-in-borderland-010-13.jpg', 'https://i.postimg.cc/g2K87vgN/alice-in-borderland-010-14.jpg', 'https://i.postimg.cc/v8prx81L/alice-in-borderland-010-15.jpg', 'https://i.postimg.cc/J7y3hHhz/alice-in-borderland-010-16.jpg', 'https://i.postimg.cc/GmRvzMx4/alice-in-borderland-010-17.jpg', 'https://i.postimg.cc/43NVRmMZ/alice-in-borderland-010-18.jpg', 'https://i.postimg.cc/VNGMfzQt/alice-in-borderland-010-19.jpg', 'https://i.postimg.cc/ZRWN0X4M/alice-in-borderland-010-20.jpg', 'https://i.postimg.cc/FRwLSGKs/alice-in-borderland-010-21.jpg', 'https://i.postimg.cc/fyX0fX37/alice-in-borderland-010-22.jpg', 'https://i.postimg.cc/sfZSzFnB/alice-in-borderland-010-23.jpg', 'https://i.postimg.cc/GhwDhMNX/alice-in-borderland-010-24.jpg', 'https://i.postimg.cc/7Y32C3rw/alice-in-borderland-010-25.jpg', 'https://i.postimg.cc/qvpC2Npn/alice-in-borderland-010-26.jpg', 'https://i.postimg.cc/Hk38zTLN/alice-in-borderland-010-27.jpg', 'https://i.postimg.cc/HLxcPFck/alice-in-borderland-010-28.jpg', 'https://i.postimg.cc/R0D6rGKQ/alice-in-borderland-010-29.jpg'],
                    order: 10,
                }, {
                    title: 'Third day',
                    pages: ['https://i.postimg.cc/GtJmpj8f/alice-in-borderland-011-01.jpg', 'https://i.postimg.cc/CMj1JwP4/alice-in-borderland-011-02.jpg', 'https://i.postimg.cc/Z5DK0nnJ/alice-in-borderland-011-03.jpg', 'https://i.postimg.cc/XvGN5WBd/alice-in-borderland-011-04.jpg', 'https://i.postimg.cc/yd0VfTPN/alice-in-borderland-011-05.jpg', 'https://i.postimg.cc/2ywCY8gR/alice-in-borderland-011-06.jpg', 'https://i.postimg.cc/PqgXz71c/alice-in-borderland-011-07.jpg', 'https://i.postimg.cc/ZKbTcpyT/alice-in-borderland-011-08.jpg', 'https://i.postimg.cc/15vyYXpD/alice-in-borderland-011-09.jpg', 'https://i.postimg.cc/0NwxQChC/alice-in-borderland-011-10.jpg', 'https://i.postimg.cc/V6PwbC8P/alice-in-borderland-011-11.jpg', 'https://i.postimg.cc/Qtg3gd89/alice-in-borderland-011-12.jpg', 'https://i.postimg.cc/PJtkSnJ6/alice-in-borderland-011-13.jpg', 'https://i.postimg.cc/kGfPZYt7/alice-in-borderland-011-14.jpg', 'https://i.postimg.cc/bYTPsrV4/alice-in-borderland-011-15.jpg', 'https://i.postimg.cc/Hskg5mfn/alice-in-borderland-011-16.jpg', 'https://i.postimg.cc/sgBC6cfR/alice-in-borderland-011-17.jpg', 'https://i.postimg.cc/0yLRLwrK/alice-in-borderland-011-18.jpg', 'https://i.postimg.cc/VNnQ1kbG/alice-in-borderland-011-19.jpg', 'https://i.postimg.cc/rmT6p218/alice-in-borderland-011-20.jpg', 'https://i.postimg.cc/PxQgpVy1/alice-in-borderland-011-21.jpg', 'https://i.postimg.cc/d3Wgn7z1/alice-in-borderland-011-22.jpg', 'https://i.postimg.cc/5N0hy3CF/alice-in-borderland-011-23.jpg', 'https://i.postimg.cc/Gh5ZyyFg/alice-in-borderland-011-24.jpg', 'https://i.postimg.cc/RZJ2QZGS/alice-in-borderland-011-25.jpg', 'https://i.postimg.cc/1zx2W1Yp/alice-in-borderland-011-26.jpg', 'https://i.postimg.cc/9fGSKgvs/alice-in-borderland-011-27.jpg', 'https://i.postimg.cc/FRNq4gvz/alice-in-borderland-011-28.jpg', 'https://i.postimg.cc/mDjn2zZw/alice-in-borderland-011-29.jpg', 'https://i.postimg.cc/cCJbKxrN/alice-in-borderland-011-30.jpg', 'https://i.postimg.cc/0jHHDTwK/alice-in-borderland-011-31.jpg', 'https://i.postimg.cc/qBmFP35B/alice-in-borderland-011-32.jpg', 'https://i.postimg.cc/xTcZn1wv/alice-in-borderland-011-33.jpg'],
                    order: 11,
                },
                {
                    title: 'Welcome - part 2',
                    pages: [
                        'https://i.postimg.cc/jScjzvjQ/alice-in-borderland-002-01.jpg',
                        'https://i.postimg.cc/rppwgW06/alice-in-borderland-002-02.jpg',
                    ],
                    order: 2,
                },
            ],
        },
    ];

    return (
        <div className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto p-4">
            {/* Left Panel - Manga Details */}
            <div className="lg:w-1/3 flex flex-col gap-4 mt-10">
                <img
                    src={chapters[0].cover_photo}
                    alt={chapters[0].title}
                    className="rounded-lg shadow-lg w-full"
                />
                <h1 className="text-2xl font-bold">{chapters[0].title}</h1>

                <div className="">
                    {chapters.map((chapter, index) => (
                        <div key={index} className="mb-4">
                            <Badge category={chapter.category_id} />
                        </div>
                    ))}
                </div>

                {/* Iconos */}
                <div className="flex justify-around px-1 items-center">
                    <div className="flex flex-col items-center">
                        <button className="flex items-center justify-center w-12 h-12 bg-orange-500 text-white rounded-full shadow-md">
                            👍
                        </button>
                    </div>
                    <div className="flex flex-col items-center">
                        <button className="flex items-center justify-center w-12 h-12 bg-orange-500 text-white rounded-full shadow-md">
                            👎
                        </button>

                    </div>
                    <div className="flex flex-col items-center">
                        <button className="flex items-center justify-center w-12 h-12 bg-orange-500 text-white rounded-full shadow-md">
                            😮
                        </button>
                    </div>
                    <div className="flex flex-col items-center">
                        <button className="flex items-center justify-center w-12 h-12 bg-orange-500 text-white rounded-full shadow-md">
                            ❤️
                        </button>
                    </div>
                </div>

                {/* rating */}
                <div className="flex justify-between items-center bg-white shadow-md rounded-lg p-4">
                    <div className="flex flex-col items-center">
                        <span className="text-lg font-semibold">4.5/5</span>
                        <span className="text-sm text-gray-500">Rating</span>
                    </div>
                    <div className="h-8 w-px bg-gray-300"></div>
                    <div className="flex flex-col items-center">
                        <span className="text-lg font-semibold">265</span>
                        <span className="text-sm text-gray-500">Chapters</span>
                    </div>
                    <div className="h-8 w-px bg-gray-300"></div>
                    <div className="flex flex-col items-center">
                        <span className="text-lg font-semibold">Eng</span>
                        <span className="text-sm text-gray-500">Language</span>
                    </div>
                </div>


                <div className="flex items-center bg-gray-200 rounded-full">
                    <button
                        onClick={() => setView("manga")}
                        className={`flex-1 px-4 py-2 text-center rounded-full transition-colors duration-300 ${view === "manga" ? "bg-orange-500 text-white" : "text-gray-500"
                            }`}
                    >
                        Manga
                    </button>
                    <button
                        onClick={() => setView("chapters")}
                        className={`flex-1 px-4 py-2 text-center rounded-full transition-colors duration-300 ${view === "chapters" ? "bg-orange-500 text-white" : "text-gray-500"
                            }`}
                    >
                        Chapters
                    </button>
                </div>
            </div>

            {/* Right Panel - Chapter List */}
            <div className="lg:w-2/3">
                {view === "chapters" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {chapters[0].chapters.map((chapter, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-4 p-4 bg-white shadow-md rounded-lg"
                            >
                                <img
                                    src={chapters[0].cover_photo}
                                    alt={chapter.title}
                                    className="w-16 h-16 rounded-lg object-cover"
                                />
                                <div className="flex-1">
                                    <h2 className="text-sm font-semibold">{chapter.title}</h2>
                                    <div className="flex justify-center items-center gap-2">
                                        <button>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 mt-1">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                                        </svg>
                                        </button>

                                        <p className="text-xs mt-1 text-gray-500">
                                            {chapter.pages.length} Pages
                                        </p></div>
                                </div>
                                <button className="px-5 py-3 bg-orange-500 text-white rounded-3xl">
                                    Read
                                </button>
                            </div>
                        ))}
                    </div>
                )}
                {view === "manga" && (
                    <>
                        <p className="text-gray-500">{chapters[0].description}</p>
                    </>
                )}
            </div>
        </div>
    );
}
