'use client';

import { useState } from 'react';
import { Copy, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

import SocialIcons from '@/components/data-display/social-icons';
import Tag from '@/components/data-display/tag';
import IconButton from '@/components/general/icon-button';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';
import useWindowSize from '@/hooks/use-window-size';
import { copyTextToClipboard } from '@/lib/utils';

let email = 'sayansh1507@gmail.com';
let phone = '+1 (765) 712-2025';

type CopyValue = 'email' | 'phone';

const ContactSection = () => {
  const { width } = useWindowSize();
  const [isCopied, setIsCopied] = useState(false);
  const [copiedValueType, setCopiedValueType] = useState<CopyValue | null>(null);

  const handleCopyClick = async (text: string, type: CopyValue) => {
    try {
      await copyTextToClipboard(text);
      setIsCopied(true);
      setCopiedValueType(type);
      let timoutId: any = setTimeout(() => {
        setIsCopied(false);
        setCopiedValueType(null);
        clearTimeout(timoutId);
      }, 1500);
    } catch (error) {
      setIsCopied(false);
      setCopiedValueType(null);
      alert('Unable to copy!');
    }
  };

  return (
    <Container id='contact'>
      <div className='flex flex-col items-center gap-4'>
        <div className='self-center'>
          <Tag label='Get in touch' />
        </div>
        <Typography
          variant='subtitle'
          className='max-w-xl text-center'
        >
          I&apos;m always on the lookout for new opportunities and my inbox is open for all. If you&apos;re considering my contribution, have a question, or just want to say hi, you can count on hearing back from me!
        </Typography>
      </div>

      <div className='flex flex-col items-center gap-6 md:gap-12'>
        <div className='flex flex-col items-center md:gap-4'>
          <div className='flex items-center gap-4 md:gap-5'>
            <Mail className='h-6 w-6 md:h-8 md:w-8' />
            <Link href={`mailto:${email}`}>
              <Typography variant='h2'>{email}</Typography>
            </Link>
            <IconButton
              size={width && width < 768 ? 'md' : 'lg'}
              onClick={() => handleCopyClick(email, 'email')}
              showTooltip={isCopied && copiedValueType === 'email'}
              tooltipText='Copied!'
            >
              <Copy />
            </IconButton>
          </div>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <div className='flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-2 dark:bg-emerald-900/20'>
            <div className='flex h-6 w-6 items-center justify-center'>
              <span className='relative flex h-3 w-3'>
                <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75'></span>
                <span className='relative inline-flex h-3 w-3 rounded-full bg-emerald-500'></span>
              </span>
            </div>
            <Typography className='font-semibold text-emerald-700 dark:text-emerald-300'>
              <a 
                href='https://cal.com/suryanshchauhan' 
                target='_blank' 
                rel='noopener noreferrer'
                className='hover:text-emerald-800 dark:hover:text-emerald-200 transition-colors duration-200'
              >
                Schedule a Meeting
              </a>
            </Typography>
          </div>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <Typography className='text-center'>You may also find me on these platforms!</Typography>
          <SocialIcons />
        </div>
      </div>
    </Container>
  );
};

export default ContactSection;