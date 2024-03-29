import Link from 'next/link';
import AuthButton from '../../buttons/auth/AuthButton';

export interface IHeader extends React.ComponentPropsWithoutRef<'header'> {}

const Header: React.FC<IHeader> = ({ className, ...headerProps }) => {
    return (
        <header
            {...headerProps}
            className={`w-full flex flex-row justify-between ${className}`}
        >
            <div className="space-x-5 m-5">
                <Link href="/" className="hover:underline">
                    Home
                </Link>
                <Link href="/" className="hover:underline">
                    Store
                </Link>
            </div>
            <div className="space-x-5 m-5">
                <Link href="/" className="hover:underline hidden sm:inline">
                    Gmail
                </Link>
                <Link href="/" className="hover:underline hidden sm:inline">
                    Images
                </Link>
                <AuthButton />
            </div>
        </header>
    );
};

export default Header;
