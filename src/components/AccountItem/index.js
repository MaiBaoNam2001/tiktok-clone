import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { CheckIcon } from '../Icons';

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
                        <CheckIcon />
                    </span>
                </h4>
                <p className={cx('nickname')}>Đào Lê Phương Hoa</p>
            </div>
        </div>
    );
}

export default AccountItem;
