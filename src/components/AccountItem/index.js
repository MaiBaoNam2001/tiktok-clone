import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './AccountItem.module.scss';
import { CheckIcon } from '../Icons';
import Image from '../Image';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={data.avatar} alt={data.nickname} />

            <div className={cx('info')}>
                <h4 className={cx('username')}>
                    {data.nickname}
                    {data.tick && (
                        <span className={cx('check')}>
                            <CheckIcon />
                        </span>
                    )}
                </h4>
                <p className={cx('nickname')}>{data.full_name}</p>
            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
