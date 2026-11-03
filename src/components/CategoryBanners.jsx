import React from 'react';
import { 
  Languages, 
  Globe, 
  Activity, 
  FileAudio, 
  CheckCircle2, 
  Layout, 
  ArrowUpRight 
} from 'lucide-react';
import { CATEGORY_SERVICES } from '../data/servicesData';

const iconMap = {
  Languages: Languages,
  Globe: Globe,
  Activity: Activity,
  FileAudio: FileAudio,
  CheckCircle2: CheckCircle2,
  LayoutTemplate: Layout
};

export default function CategoryBanners({ onSelectCategory }) {
  return (
    <section className="categories-section" aria-label="Services Categories">
      <div className="container">
        <div className="categories-horizontal-grid">
          {CATEGORY_SERVICES.map((cat) => {
            const IconComponent = iconMap[cat.iconName] || Languages;
            const isYellow = cat.id === 'translation';

            return (
              <div
                key={cat.id}
                className="category-box"
                style={{ backgroundColor: cat.bgColor }}
                data-theme={isYellow ? 'yellow' : 'default'}
                onClick={() => onSelectCategory && onSelectCategory(cat)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    onSelectCategory && onSelectCategory(cat);
                  }
                }}
              >
                <div className="category-icon-wrapper">
                  <IconComponent size={26} strokeWidth={2.2} />
                </div>
                <h3 className="category-name">{cat.title}</h3>
                <span
                  style={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    color: isYellow ? '#1e293b' : 'rgba(255,255,255,0.7)',
                    opacity: 0.8
                  }}
                >
                  <ArrowUpRight size={16} />
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

