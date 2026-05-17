interface TechChipProps {
  label: string;
  variant?: 'default' | 'teal' | 'violet' | 'orange';
}

export function TechChip({ label, variant = 'default' }: TechChipProps) {
  const variants = {
    default: 'border-border-strong text-text-muted',
    teal: 'border-accent-teal/45 text-accent-teal',
    violet: 'border-accent-violet/50 text-accent-violet',
    orange: 'border-accent-orange/50 text-accent-orange',
  };

  return (
    <span className={`inline-flex items-center px-3 py-1.5 border rounded-full font-code text-xs font-medium ${variants[variant]}`}>
      {label}
    </span>
  );
}
