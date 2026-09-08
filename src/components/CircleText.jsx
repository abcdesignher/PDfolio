export default function CircleText({ word, size = 'md', className = '' }) {
  return (
    <span className={`circle-text circle-text-${size} ${className}`}>
      <span className="circle-text-label">{word}</span>
      <span className="circle-text-motif" aria-hidden="true">
        <span className="circle-text-circle circle-text-circle-1" />
        <span className="circle-text-circle circle-text-circle-2" />
        <span className="circle-text-circle circle-text-circle-3" />
      </span>
    </span>
  )
}