'use client';

import { cn } from '@/shared/lib/utils';
import React from 'react';
import { Container } from './container';
import Image from 'next/image';
import Link from 'next/link';
import { SearchInput } from './search-input';
import { CartButton } from './cart-button';
import { useRouter, useSearchParams } from 'next/navigation';
import toast from 'react-hot-toast';
import { ProfileButton } from './profile-button';
import { AuthModal } from './modals';
import {Button} from "@/shared/components";
import {ArrowLeft} from "lucide-react";
import {ModeToggle} from "@/components/buttonDarck";

interface Props {
  hasSearch?: boolean;
  hasCart?: boolean;
  className?: string;
}

export const Header: React.FC<Props> = ({ hasSearch = true, hasCart = true, className }) => {
  const router = useRouter();
  const [openAuthModal, setOpenAuthModal] = React.useState(false);

  const searchParams = useSearchParams();

  React.useEffect(() => {
    let toastMessage = '';

    if (searchParams.has('paid')) {
      toastMessage = 'Заказ успешно оплачен! Информация отправлена на почту.';
    }

    if (searchParams.has('verified')) {
      toastMessage = 'Почта успешно подтверждена!';
    }

    if (toastMessage) {
      setTimeout(() => {
        router.replace('/');
        toast.success(toastMessage, {
          duration: 3000,
        });
      }, 1000);
    }
  }, []);

  return (
    <header className={cn('border-b', className)}>
      <Container className="flex items-center justify-between py-8">
        {/* Левая часть */}
        <Link href="/">
          <div className="flex items-center gap-4">
            <Image src="/logo.png" alt="Logo" width={35} height={35}/>
            <div>
              <h1 className="text-2xl uppercase font-black">GAME RECORD ONLINE</h1>
              <p className="text-sm text-gray-400 leading-3">рекорды одиночных заездов</p>
            </div>
          </div>
        </Link>

        {/*{hasSearch && (*/}
        {/*  <div className="mx-10 flex-1">*/}
        {/*    <SearchInput />*/}
        {/*  </div>*/}
        {/*)}*/}

        {/* Правая часть */}
        <div className="flex items-center gap-3">
          <ModeToggle/>
          <Link href="/test">
            <Button variant="outline" className="gap-2">
              test
            </Button>
          </Link>

            <Link href="/blop/up">
              <Button variant="outline" className="gap-2">
                blop up
              </Button>
            </Link>

          <Link href="/blop/list">
            <Button variant="outline" className="gap-2">
              blop list
            </Button>
          </Link>

          <Link href="/blop/list-data">
            <Button variant="outline" className="gap-2">
              blop list-data
            </Button>
          </Link>

          {/*<Link href="/api/blop/get">*/}
          {/*  <Button variant="outline" className="gap-2">*/}
          {/*    api blop get*/}
          {/*  </Button>*/}
          {/*</Link>*/}


          {/*<a href="">*/}
          {/*  <Button variant="outline" className="text-gray-500 border-gray-400 hover:bg-gray-50">*/}
          {/*    Обновить*/}
          {/*  </Button>*/}
          {/*</a>*/}

        <AuthModal open={openAuthModal} onClose={() => setOpenAuthModal(false)}/>

        <ProfileButton onClickSignIn={() => setOpenAuthModal(true)}/>

        {/*{hasCart && <CartButton />}*/}
      </div>
    </Container>
</header>
)
  ;
};
