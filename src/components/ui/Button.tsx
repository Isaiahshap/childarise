import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonProps {
  variant?: 'primary' | 'ghost' | 'donate' | 'text' | 'outline' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  href?: string;
  external?: boolean;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  href,
  external = false,
  className,
  onClick,
  disabled = false,
  type = 'button',
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const resolvedVariant =
    variant === 'outline' || variant === 'secondary' ? 'ghost' : variant;

  const variantClasses = {
    primary: 'btn-primary',
    ghost: 'btn-ghost',
    donate: 'btn-donate',
    text: 'btn-ghost',
  };

  const sizeClasses = {
    sm: 'text-sm',
    md: '',
    lg: '',
  };

  const classes = cn(baseClasses, variantClasses[resolvedVariant], sizeClasses[size], className);

  if (href) {
    if (external) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return <Link href={href} className={classes}>{children}</Link>;
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
