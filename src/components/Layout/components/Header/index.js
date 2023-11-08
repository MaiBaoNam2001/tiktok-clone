import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';

import 'tippy.js/dist/tippy.css';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import {
    ClearIcon,
    CoinIcon,
    CreatorCenterIcon,
    FeedbackIcon,
    InboxIcon,
    KeyboardShortcutIcon,
    LanguageIcon,
    LoadingIcon,
    LogoutIcon,
    MessageIcon,
    MoreIcon,
    ProfileIcon,
    SearchIcon,
    SettingIcon,
    UploadIcon,
} from '~/components/Icons';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <LanguageIcon />,
        title: 'Tiếng Việt',
        children: {
            title: 'Ngôn ngữ',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt (Việt Nam)',
                },
            ],
        },
    },
    {
        icon: <FeedbackIcon />,
        title: 'Phản hồi và trợ giúp',
        to: '/feedback',
    },
    {
        icon: <KeyboardShortcutIcon />,
        title: 'Phím tắt trên bàn phím',
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    const currentUser = true;

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 0);
    }, []);

    // Handle logic
    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                break;
            default:
        }
    };

    const userMenuItems = [
        {
            icon: <ProfileIcon />,
            title: 'Xem hồ sơ',
            to: '/@nammai558',
        },
        {
            icon: <CoinIcon />,
            title: 'Nhận Xu',
            to: '/coin?enter_from=web_main_nav',
        },
        {
            icon: <CreatorCenterIcon />,
            title: 'Trung tâm Nhà sáng tạo LIVE',
            href: 'https://www.tiktok.com/live/creators?enter_from=portrait&lang=vi-VN&region=VN',
        },
        {
            icon: <SettingIcon />,
            title: 'Cài đặt',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <LogoutIcon />,
            title: 'Đăng xuất',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>

                <HeadlessTippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <div className={cx('search-account')}>Tài khoản</div>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Tìm kiếm" spellCheck={false} />

                        <button className={cx('clear')}>
                            <ClearIcon />
                        </button>

                        <LoadingIcon className={cx('loading')} />

                        <button className={cx('search-btn')}>
                            <SearchIcon />
                        </button>
                    </div>
                </HeadlessTippy>

                <div className={cx('actions')}>
                    <Button className={cx('upload-btn')} outline leftIcon={<UploadIcon />}>
                        Tải lên
                    </Button>

                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 50]} content="Tin nhắn" placement="bottom">
                                <span className={cx('action-btn')}>
                                    <MessageIcon />
                                </span>
                            </Tippy>

                            <Tippy delay={[0, 50]} content="Hộp thư" placement="bottom">
                                <span className={cx('action-btn')}>
                                    <InboxIcon />
                                    <sup className={cx('badge')}>34</sup>
                                </span>
                            </Tippy>
                        </>
                    ) : (
                        <Button primary>Đăng nhập</Button>
                    )}

                    <Menu items={currentUser ? userMenuItems : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7298257508215291910~c5_100x100.jpeg?x-expires=1699430400&x-signature=CB1BzOeyBMnxtU9AanD8i6GvDjY%3D"
                                alt="nammai558"
                            />
                        ) : (
                            <i className={cx('more-btn')}>
                                <MoreIcon className={cx('ellipsis-vertical')} />
                            </i>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
