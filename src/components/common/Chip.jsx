import React from 'react';

const Chip = ({ children, variant = 'default', onClick, href }) => {
  const baseClasses =
    'inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3B63]/60';

  const variants = {
    default: 'bg-[#3c0b21] text-white hover:bg-[#550f2f]',
    primary: 'bg-[#CC1E4A] text-white hover:bg-[#a8183b]',
    outline:
      'border border-[#FF3B63]/60 text-white hover:bg-[#FF3B63]/10 backdrop-blur-sm'
  };

  const Component = href ? 'a' : 'button';
  const props = href
    ? { href, target: href.startsWith('http') ? '_blank' : undefined, rel: href.startsWith('http') ? 'noopener noreferrer' : undefined }
    : { onClick };

  return (
    <Component className={`${baseClasses} ${variants[variant]}`} {...props}>
      {children}
    </Component>
  );
};

export default Chip;
