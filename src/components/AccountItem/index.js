import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/d7d2aa84b494e467d96d0ba783e47f0d~c5_300x300.webp?x-expires=1699426800&x-signature=gp8IjuAwGxwe4sy2pRV7ATT%2F%2BrU%3D"
                alt="hoaa.hanassii"
            />

            <div className={cx('info')}>
                <h4 className={cx('username')}>
                    hoaa.hanassii
                    <span className={cx('check')}>
                        <svg
                            fontSize="14px"
                            viewBox="0 0 48 48"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                        >
                            <g clipPath="url(#Icon_Color-Verified_Badge_svg__a)">
                                <path d="M0 24a24 24 0 1 1 48 0 24 24 0 0 1-48 0Z" fill="#20D5EC"></path>
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M37.12 15.88a3 3 0 0 1 0 4.24l-13.5 13.5a3 3 0 0 1-4.24 0l-8.5-8.5a3 3 0 1 1 4.24-4.24l6.38 6.38 11.38-11.38a3 3 0 0 1 4.24 0Z"
                                    fill="#fff"
                                ></path>
                            </g>
                            <defs>
                                <clipPath id="Icon_Color-Verified_Badge_svg__a">
                                    <path fill="#fff" d="M0 0h48v48H0z"></path>
                                </clipPath>
                            </defs>
                        </svg>
                    </span>
                </h4>
                <p className={cx('nickname')}>Đào Lê Phương Hoa</p>
            </div>
        </div>
    );
}

export default AccountItem;
