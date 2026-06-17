import type { ReactNode } from 'react'

interface TextRollButtonProps {
  label: string
  className?: string
  textClassName?: string
  circleClassName?: string
  icon: ReactNode
  type?: 'button' | 'submit'
}

function TextRollButton({
  label,
  className = '',
  textClassName = 'text-[13px] font-medium',
  circleClassName = 'w-6 h-6 bg-white',
  icon,
  type = 'button',
}: TextRollButtonProps) {
  return (
    <button type={type} className={`group inline-flex items-center gap-2 ${className}`}>
      <span className={`overflow-hidden h-[20px] ${textClassName}`}>
        <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-1/2">
          <span>{label}</span>
          <span>{label}</span>
        </span>
      </span>
      <span
        className={`flex shrink-0 items-center justify-center rounded-full transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] -rotate-45 group-hover:rotate-0 ${circleClassName}`}
      >
        {icon}
      </span>
    </button>
  )
}

export default TextRollButton
