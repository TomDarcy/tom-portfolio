import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'default' | 'sm' | 'lg'
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
}

export function Button({
  children,
  href,
  variant = 'primary',
  size = 'default',
  className,
  onClick,
  type = 'button',
  disabled,
}: ButtonProps) {
  const baseStyles = cn(
    'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 btn-mechanical',
    'focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-[var(--background)]',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    {
      // Variants
      'bg-amber-500 text-charcoal-900 hover:bg-amber-400 shadow-md hover:shadow-lg':
        variant === 'primary',
      'border-2 border-[var(--border)] text-[var(--foreground)] hover:border-amber-500 hover:text-amber-500':
        variant === 'secondary',
      'text-[var(--foreground)] hover:text-amber-500 hover:bg-[var(--muted)]':
        variant === 'ghost',
      // Sizes
      'px-4 py-2 text-sm': size === 'sm',
      'px-6 py-3 text-base': size === 'default',
      'px-8 py-4 text-lg': size === 'lg',
    },
    className
  )

  if (href) {
    return (
      <Link href={href} className={baseStyles}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseStyles}
    >
      {children}
    </button>
  )
}
