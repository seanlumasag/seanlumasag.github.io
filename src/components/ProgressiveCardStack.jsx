import { Children, useId, useState } from 'react'
import ChevronDown from 'lucide-react/dist/esm/icons/chevron-down'

const ProgressiveCardStack = ({
  children,
  initialVisible = 3,
  itemLabel = 'item',
}) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const additionalCardsId = `${useId()}-additional-cards`
  const cards = Children.toArray(children)
  const visibleCards = cards.slice(0, initialVisible)
  const additionalCards = cards.slice(initialVisible)
  const hiddenCount = additionalCards.length
  const hasAdditionalCards = hiddenCount > 0
  const hiddenItemLabel = hiddenCount === 1 ? itemLabel : `${itemLabel}s`
  const toggleLabel = isExpanded
    ? 'show less'
    : `show ${hiddenCount} more ${hiddenItemLabel}`

  return (
    <div className="project-stack">
      {visibleCards}
      {hasAdditionalCards && (
        <>
          <button
            className="progressive-card-stack-toggle"
            type="button"
            aria-expanded={isExpanded}
            aria-controls={additionalCardsId}
            onClick={() => setIsExpanded((expanded) => !expanded)}
          >
            <span>{toggleLabel}</span>
            <ChevronDown
              className="progressive-card-stack-toggle-icon"
              size={18}
              strokeWidth={1.8}
              aria-hidden="true"
            />
          </button>
          <div
            className="progressive-card-stack-extra"
            id={additionalCardsId}
            hidden={!isExpanded}
          >
            {additionalCards}
          </div>
        </>
      )}
    </div>
  )
}

export default ProgressiveCardStack
